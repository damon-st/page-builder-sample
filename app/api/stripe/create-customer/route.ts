import { stripe } from "@/lib/stripe";
import { NextResponse } from "next/server";
import { StripeCustomerType } from "@/lib/types";

export async function POST(req: Request) {
  const { address, email, name, shipping }: StripeCustomerType =
    await req.json();

  if (!email || !address || !name || !shipping) {
    return new NextResponse("Missing Data", { status: 400 });
  }
  try {
    const customer = await stripe.customers.create({
      email,
      name,
      address,
      shipping,
    });
    return Response.json({ customerId: customer.id });
  } catch (error) {
    console.log("[ERROR_STRIPE_CUSTOMER]", error);

    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
