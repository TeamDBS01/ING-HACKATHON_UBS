export type CustomerAccount = {
    accountId: number
    customerId: number
    bankId: number
    bankName: string
    accNumber: string
    accType: "SAVINGS" | "CURRENT" | "INVESTMENT"
    balance: number
    currency: "INR" | "EUR" | "USD"
}

export type Bank = {
    bankId:number
    bankName:string
    regionCode:string
    centralBankId:number
}