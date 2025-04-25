import AccountCard from "@/components/customers/accounts/AccountCard";
import { Button } from "@/components/ui/button";
import { Plus, SendHorizonal } from "lucide-react";
import React from "react";
import axios, { Axios } from 'axios'

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
    console.log(accounts)

  return (
    <section className="flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <Button>
          <Plus />
          <p>Create New Account</p>
        </Button>
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
