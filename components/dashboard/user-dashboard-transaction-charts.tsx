"use client";

import { Bar, BarChart, ResponsiveContainer, YAxis, XAxis, CartesianGrid, ReferenceLine } from "recharts";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"; 
import { Separator } from "@/components/ui/separator"; 

const chartData = [
  { month: "Jul", spend: 1500 },
  { month: "Aug", spend: 4500 },
  { month: "Sep", spend: 1200 },
  { month: "Oct", spend: 1300 },
  { month: "Nov", spend: 4200 },
  { month: "Dec", spend: 1400 },
];

interface ChartProps {
  totalSpend: number;
  spendChange: number;
}

export function TransactionChart({ totalSpend, spendChange }: ChartProps) {
  const averageSpend = 2000;  

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold">Spends</CardTitle>
        <div className="text-sm text-muted-foreground">
          Total spend: <span className={spendChange < 0 ? "text-red-500" : "text-green-500"}>
            ↓{Math.abs(spendChange)}%
          </span>
        </div>
      </CardHeader>
      <CardContent className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 30 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} />
            <YAxis
              domain={[0, 9000]}
              ticks={[0, 2000, 9000]}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `₹${value}`}
            />
            <Bar dataKey="spend" fill="#2563eb" radius={[4, 4, 0, 0]} />
            <ReferenceLine y={averageSpend} stroke="rgba(0,0,0,0.3)" strokeDasharray="5 5" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}