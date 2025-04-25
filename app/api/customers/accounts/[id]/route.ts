import { NextRequest, NextResponse } from "next/server";

interface AccountProps{
    accountId: number
    bankName:string
    accNumber:string
    accType:string
    balance:number
}

const accounts = [
  {
    account_id: 5001,
    customer_id: 1001,
    bank_id: 101,
    account_number: "SBIN000123",
    account_type: "SAVINGS",
    currency: "INR",
    balance: 50000.0,
  },
  {
    account_id: 5008,
    customer_id: 1001,
    bank_id: 102,
    account_number: "SBIN000112",
    account_type: "CURRENT",
    currency: "INR",
    balance: 50000.0,
  },
  {
    account_id: 5009,
    customer_id: 1001,
    bank_id: 103,
    account_number: "SBIN000897",
    account_type: "INVESTMENT",
    currency: "INR",
    balance: 50000.0,
  },
  {
    account_id: 5002,
    customer_id: 2002,
    bank_id: 202,
    account_number: "JPMC987654",
    account_type: "CHECKING",
    currency: "USD",
    balance: 1200.5,
  },
  {
    account_id: 5003,
    customer_id: 3003,
    bank_id: 303,
    account_number: "ABNA543210",
    account_type: "SAVINGS",
    currency: "EUR",
    balance: 10000.75,
  },
];

const banks = [
  {
    bank_id: 101,
    bank_name: "State Bank of India",
    region_code: "IN",
    central_bank_id: 1,
  },
  {
    bank_id: 202,
    bank_name: "JPMorgan Chase & Co.",
    region_code: "US",
    central_bank_id: 2,
  },
  {
    bank_id: 303,
    bank_name: "ABN AMRO Bank N.V.",
    region_code: "NL",
    central_bank_id: 3,
  },
];

export async function GET(request: NextRequest, context: {params: {id: string}}) {
    const customerId = parseInt(context.params.id);

    const result = accounts
        .filter((acc) => acc.customer_id === customerId)
        .map((acc) => {
            const bankName = banks.find((bank) => bank.bank_id === acc.bank_id)?.bank_name || "Unknown Bank";
            return {
                accountId: acc.account_id,
                bankName,
                accNumber: acc.account_number,
                accType: acc.account_type,
                balance: acc.balance,
            };
        });
        console.log(result)
        console.log(request.url)

    return NextResponse.json(result);
}
