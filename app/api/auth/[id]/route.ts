import { db } from "@/lib/db";
import { bankCustomers } from "@/schema/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, context: { params: { id: string } }) {
    const id = context.params.id;
    const customer = {
        customer_id: 1001,
        region_code: "IN",
        citizen_ref_id: "123456789012",
        kyc_status: "APPROVED",
        kyc_score: 0.95,
        risk_flag: false
    };
    return NextResponse.json(customer)
}