import AccountCard from "@/components/customers/accounts/AccountCard";
import { Button } from "@/components/ui/button";
import { Plus, SendHorizonal } from "lucide-react";
import React from "react";
import axios, { all, Axios } from 'axios'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import Link from "next/link";

interface AccountProps{
    accountId: number
    bankName:string
    accNumber:string
    accType:string
    balance:number
}

export default async function page() {

    const response = await axios.get('http://localhost:3000/api/customers/accounts/1001')
    const accounts: AccountProps[] = await response.data;
    const existingAccounts = accounts.map((acc) => acc.accType);
    const allTypes = ["SAVINGS", "CURRENT", "INVESTMENT"];
    const available = allTypes.filter((type) => !existingAccounts.includes(type));
  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
      <Dialog>
      <DialogTrigger asChild>
        <Button disabled={accounts.length === 3}>
          <Plus />
          <span>Create New Account</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle > Create Account </DialogTitle>
        <DialogDescription className="grid grid-col-3 gap-4">
          
        {
        available.map((type, _key) => (
          <Link key={_key} href={`accounts/create/${type}`} className="w-full">
              <Button  className="text-center w-full p-8 hover:bg-opacity-80 hover:cursor-pointer">
                {type}
              </Button>
          </Link>
        ))
      }
    
        </DialogDescription>
      </DialogContent>
      </Dialog>
        <Button>
          <SendHorizonal />
          <p>Transfer Money</p>{" "}
        </Button>
      </div>
      {
        accounts.map((acc) => (
            <AccountCard key={acc.accountId} accNumber={acc.accNumber} accType={acc.accType} bankName={acc.bankName} balance={acc.balance}/>
        ))
      }
    </section>
  );
}
