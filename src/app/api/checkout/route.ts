import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Support both single priceId (membership) and items array (cart)
    const lineItems: { priceId: string; quantity: number; size?: string }[] = body.items
      ?? [{ priceId: body.priceId, quantity: 1 }];
    const successUrl = body.items
      ? `${process.env.NEXT_PUBLIC_BASE_URL}/thankyou-product`
      : `${process.env.NEXT_PUBLIC_BASE_URL}/thankyou`;

    if (!lineItems.length || lineItems.some((i) => !i.priceId)) {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    }

    const prices = await Promise.all(
      lineItems.map((i) => stripe.prices.retrieve(i.priceId))
    );
    const mode = prices.some((p) => p.recurring) ? "subscription" : "payment";

    const session = await stripe.checkout.sessions.create({
      mode,
      payment_method_types: ["card"],
      line_items: lineItems.map((i) => ({ price: i.priceId, quantity: i.quantity })),
      success_url: successUrl,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("[Stripe] checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}
