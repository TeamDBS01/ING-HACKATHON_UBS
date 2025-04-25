// @/components/dashboard/user-dashboard-transaction-list.tsx
"use client";

import { useState } from "react";
import { format } from "date-fns";
import { IndianRupee, ArrowUpCircle, ArrowDownCircle,  ArrowLeftRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: "income" | "expense" | "transfer";
}

interface TransactionListProps {
  transactions: Transaction[];
}

function getIconByCategory(category: Transaction["category"]) {
  switch (category) {
    case "income":
      return <ArrowUpCircle className="mr-2 h-4 w-4 text-green-500" />;
    case "expense":
      return <ArrowDownCircle className="mr-2 h-4 w-4 text-red-500" />;
    case "transfer":
      return <ArrowLeftRight className="mr-2 h-4 w-4 text-blue-500" />;
    default:
      return null;
  }
}

export function TransactionList({ transactions }: TransactionListProps) {
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTransactionClick = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTransaction(null);
  };

  if (transactions.length === 0) {
    return <p className="text-muted-foreground">No transactions in this category.</p>;
  }

  return (
    <>
      <ScrollArea className="h-[300px] w-full">
        <div className="space-y-2">
          {transactions.map((transaction) => (
            <Card
              key={transaction.id}
              className="cursor-pointer transition-colors hover:bg-accent hover:text-accent-foreground"
              onClick={() => handleTransactionClick(transaction)}
            >
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center">
                  {getIconByCategory(transaction.category)}
                  <div>
                    <h3 className="font-semibold text-sm">{transaction.description}</h3>
                    <p className="text-xs text-muted-foreground">{format(transaction.date, "MMM dd, yyyy")}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <IndianRupee className="mr-1 h-4 w-4 text-muted-foreground" />
                  <span className={transaction.amount > 0 ? "text-green-500" : "text-red-500"}>
                    {transaction.amount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Transaction Details</DialogTitle>
          </DialogHeader>
          {selectedTransaction && (
            <div className="space-y-4">
              <p>
                <span className="font-semibold">Description:</span> {selectedTransaction.description}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {format(selectedTransaction.date, "MMM dd, yyyy 'at' HH:mm:ss")}
              </p>
              <p>
                <span className="font-semibold">Amount:</span>{" "}
                <IndianRupee className="inline-block mr-1 h-4 w-4 text-muted-foreground" />
                <span className={selectedTransaction.amount > 0 ? "text-green-500" : "text-red-500"}>
                  {selectedTransaction.amount.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </p>
              <p>
                <span className="font-semibold">Category:</span> {selectedTransaction.category}
              </p>
              <p>
                <span className="font-semibold">Transaction ID:</span> {selectedTransaction.id}
              </p>
            </div>
          )}
          <Button className="mt-4" onClick={handleCloseModal}>
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}