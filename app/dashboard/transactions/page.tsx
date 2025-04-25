import { AllTransactions } from '@/components/dashboard/user-dashboard-allTransactions'
import { TransactionChart } from '@/components/dashboard/user-dashboard-transaction-charts'
import {  UserDashboardTransactions } from '@/components/dashboard/user-dashboard-transactions'
import React from 'react'

export default function page() {
  return (
  <div className='flex flex-col gap-4'>

    <TransactionChart totalSpend={4} spendChange={3} />
    {/* <UserDashboardTransactions/> */}
    <AllTransactions/>
   
  </div>  
  )
}
