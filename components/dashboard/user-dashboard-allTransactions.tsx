"use client";

import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TransactionList } from "./user-dashboard-transaction-list";
import { format } from "date-fns";
import { IndianRupee } from "lucide-react";

interface Transaction {
  id: string;
  date: Date;
  description: string;
  amount: number;
  category: "income" | "expense" | "transfer";
}

const allTransactionsData: Transaction[] = [
  { id: "1", date: new Date("2024-04-20"), description: "Salary", amount: 50000, category: "income" },
  { id: "2", date: new Date("2024-04-21"), description: "Groceries", amount: -2500, category: "expense" },
  { id: "3", date: new Date("2024-04-22"), description: "Transfer to Savings", amount: -10000, category: "transfer" },
  { id: "4", date: new Date("2024-04-23"), description: "Freelance Payment", amount: 15000, category: "income" },
  { id: "5", date: new Date("2024-04-24"), description: "Dinner with friends", amount: -1800, category: "expense" },
  { id: "6", date: new Date("2024-04-25"), description: "Investment", amount: -5000, category: "transfer" },
  { id: "7", date: new Date("2024-04-26"), description: "Rent Payment", amount: -12000, category: "expense" },
  { id: "8", date: new Date("2024-04-26"), description: "Interest Earned", amount: 500, category: "income" },
];

export function AllTransactions() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredTransactions =
    activeTab === "all"
      ? allTransactionsData
      : allTransactionsData.filter((transaction) => transaction.category === activeTab);

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Transactions</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="income">Income</TabsTrigger>
            <TabsTrigger value="expense">Expenses</TabsTrigger>
            <TabsTrigger value="transfer">Transfers</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-4">
            <TransactionList transactions={filteredTransactions} />
          </TabsContent>
          <TabsContent value="income" className="mt-4">
            <TransactionList transactions={filteredTransactions.filter(t => t.category === "income")} />
          </TabsContent>
          <TabsContent value="expense" className="mt-4">
            <TransactionList transactions={filteredTransactions.filter(t => t.category === "expense")} />
          </TabsContent>
          <TabsContent value="transfer" className="mt-4">
            <TransactionList transactions={filteredTransactions.filter(t => t.category === "transfer")} />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}