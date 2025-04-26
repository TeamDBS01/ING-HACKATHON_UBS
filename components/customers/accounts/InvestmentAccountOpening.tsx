'use client'

import React, { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, CheckCircle, AlertTriangle, Banknote, TrendingUp, UserPlus, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

// Schema for the account creation form
const accountCreationSchema = z.object({
    termsAndConditions: z.boolean().refine((val) => val === true, {
        message: "You must accept the terms and conditions",
    }),
    initialDeposit: z.number().min(100, { message: 'Initial deposit must be at least $100.' }),
});

// Step Components
const AccountCreationStep = ({ form }: { form: any }) => (
    <div className="space-y-4">
        <FormField
            control={form.control}
            name="termsAndConditions"
            render={({ field }) => (
                <FormItem className="flex flex-row items-start gap-3 space-y-0">
                    <FormControl>
                        <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="mt-1"
                        />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel>
                            I agree to the <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>
                        </FormLabel>
                        <FormMessage />
                    </div>
                </FormItem>
            )}
        />
        <FormField
            control={form.control}
            name="initialDeposit"
            render={({ field }) => (
                <FormItem>
                    <FormLabel>Initial Deposit ($)</FormLabel>
                    <FormControl>
                        <Input placeholder="Enter initial deposit amount" type="number" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    </div>
);

const BasicInvestmentUI = () => {
    // Dummy data for demonstration
    const [accountValue, setAccountValue] = useState(12540.25);
    const [holdings, setHoldings] = useState([
        { name: 'ABC Corp', shares: 100, value: 2500.00, change: 2.5 },
        { name: 'XYZ Fund', shares: 50, value: 5500.00, change: -1.2 },
        { name: 'GHI Inc', shares: 200, value: 4540.25, change: 4.1 },
    ]);

    const totalChange = holdings.reduce((acc, h) => acc + h.change, 0);
    const performance = totalChange > 0 ? 'positive' : totalChange < 0 ? 'negative' : 'neutral';

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                        <TrendingUp className="h-6 w-6 text-blue-500" />
                        Investment Account Overview
                    </CardTitle>
                    <CardDescription>
                        Welcome to your investment dashboard.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="bg-gray-800 rounded-lg p-6 text-white">
                        <h3 className="text-lg font-semibold mb-2">Account Value</h3>
                        <p className="text-3xl font-bold">
                            ${accountValue.toFixed(2)}
                        </p>
                        <p className={cn(
                            "mt-2 text-sm",
                            performance === 'positive' ? 'text-green-500' :
                                performance === 'negative' ? 'text-red-500' : 'text-gray-400'
                        )}>
                            {performance === 'positive' && '+'}
                            {totalChange.toFixed(2)}% (Total Change)
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold">Your Holdings</CardTitle>
                    <CardDescription>
                        Summary of your current investments.
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {holdings.map((holding, index) => (
                        <div
                            key={index}
                            className="p-4 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex justify-between items-center"
                        >
                            <div>
                                <h4 className="text-lg font-semibold">{holding.name}</h4>
                                <p className="text-gray-500 dark:text-gray-400">
                                    {holding.shares} Shares
                                </p>
                            </div>
                            <div>
                                <p className="text-lg font-bold">
                                    ${holding.value.toFixed(2)}
                                </p>
                                <p className={cn(
                                    "text-sm",
                                    holding.change > 0 ? 'text-green-500' :
                                        holding.change < 0 ? 'text-red-500' : 'text-gray-400'
                                )}>
                                    {holding.change > 0 && '+'}
                                    {holding.change.toFixed(2)}%
                                </p>
                            </div>
                        </div>
                    ))}
                    <div className="text-center">
                        <Button variant="outline">View All Holdings</Button>
                    </div>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold">
                        Invest
                    </CardTitle>
                    <CardDescription>
                        Grow your wealth.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                        Explore investment opportunities and manage your portfolio.
                    </p>
                    <Button className="w-full">
                        <ArrowRight className="mr-2 h-4 w-4" />
                        Start Investing
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
};

const InvestmentAccountOpening = () => {
    const [isAccountCreated, setIsAccountCreated] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [submissionResult, setSubmissionResult] = useState<{ success?: boolean; message?: string; errors?: any } | null>(null);

    const form = useForm({
        resolver: zodResolver(accountCreationSchema),
        defaultValues: {
            termsAndConditions: false,
            initialDeposit: 100,
        },
    });

    const onSubmit = async (data: z.infer<typeof accountCreationSchema>) => {
        setIsLoading(true);
        setSubmissionResult(null); // Clear previous results

        // Simulate account creation process
        try {
            console.log('Account creation data:', data);
            await new Promise((resolve) => setTimeout(resolve, 2500)); // Simulate network delay

            // Simulate success
            setIsAccountCreated(true);
            setSubmissionResult({ success: true, message: 'Account created successfully!' });

        } catch (error: any) {
            setSubmissionResult({ success: false, message: error.message });
        } finally {
            setIsLoading(false);
        }
    };

    if (isAccountCreated) {
        return (
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white flex items-center justify-center gap-3">
                            <CheckCircle className="h-8 w-8 text-green-500" />
                            Account Created!
                        </h2>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            Your investment account has been successfully created.
                        </p>
                    </div> */}
                    <BasicInvestmentUI />
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-white flex items-center justify-center gap-2">
                        <Banknote className="h-8 w-8 text-blue-500" />
                        Open Investment Account
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                        Start your investment journey.
                    </p>
                </div>
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>Account Details</CardTitle>
                        <CardDescription>
                            Enter your details to create an investment account.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8 space-y-6">
                                <AccountCreationStep form={form} />
                                <div className="flex items-center justify-between">
                                    {/* <Button
                                        variant="secondary"
                                        className="w-1/2 mr-2"
                                        onClick={() => {
                                            // In a real app, you'd integrate with your existing KYC system
                                            alert("Skipping KYC and creating account.  Ensure KYC is completed separately.");
                                            setIsAccountCreated(true); // For demo, we just skip
                                        }}
                                        disabled={isLoading}
                                    >
                                        Skip KYC
                                    </Button> */}
                                    <Button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-1/2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                Creating...
                                            </>
                                        ) : (
                                            <>
                                                <UserPlus className="mr-2 h-4 w-4" />
                                                Create Account
                                            </>

                                        )}
                                    </Button>
                                </div>
                            </form>
                        </Form>
                        {submissionResult && (
                            <div className={cn(
                                "mt-6 p-4 rounded-md text-center",
                                submissionResult.success
                                    ? "bg-green-100 text-green-800 border border-green-300"
                                    : "bg-red-100 text-red-800 border border-red-300"
                            )}>
                                {submissionResult.success ? (
                                    <div className="flex items-center justify-center gap-2">
                                        <CheckCircle className="h-5 w-5" />
                                        <p>{submissionResult.message}</p>
                                    </div>
                                ) : (
                                    <div className="flex items-center justify-center gap-2">
                                        <AlertTriangle className="h-5 w-5" />
                                        {submissionResult.errors ? (
                                            <div>
                                                <p>Please correct the following errors:</p>
                                                <ul>
                                                    {Object.entries(submissionResult.errors).map(([key, value]) => (
                                                        <li key={key}>{key}: {value}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                        ) : (
                                            <p>{submissionResult.message}</p>
                                        )}
                                    </div>
                                )}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default InvestmentAccountOpening;
