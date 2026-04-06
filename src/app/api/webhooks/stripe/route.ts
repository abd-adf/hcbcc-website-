import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { BrevoClient } from "@getbrevo/brevo";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2026-02-25.clover",
});

const COUPON_MAP: Record<string, { code: string; discount: string }> = {
  price_1THqDtK49HEAljERGQuMt1x4: { code: "HCMEMBER10", discount: "10%" },
  price_1THqDtK49HEAljERNFrsHZ9G: { code: "HCMEMBER15", discount: "15%" },
};

async function sendConfirmationEmail(
  toEmail: string,
  toName: string,
  coupon: { code: string; discount: string } | null,
  billingUrl: string
) {
  const client = new BrevoClient({ apiKey: process.env.BREVO_API_KEY! });

  const couponBlock = coupon
    ? `
    <div style="background:#f7f7f5;border:1px solid #e8e8e5;padding:20px;margin:24px 0;">
      <p style="margin:0 0 8px 0;font-size:11px;text-transform:uppercase;letter-spacing:0.4em;color:#a0aab4;">Your member discount</p>
      <p style="margin:0 0 12px 0;font-size:14px;color:#6b7a8d;">Use this code at checkout for ${coupon.discount} off your order:</p>
      <div style="background:#ffffff;border:1px solid #e8e8e5;padding:12px 20px;display:inline-block;margin-bottom:12px;">
        <span style="font-size:22px;font-weight:700;letter-spacing:0.2em;color:#111111;">${coupon.code}</span>
      </div>
      <br/>
      <a href="https://shop.horscategoriebrussels.cc" style="font-size:13px;color:#2f3a47;font-weight:600;text-transform:uppercase;letter-spacing:0.15em;">Go to the shop →</a>
    </div>`
    : "";

  const htmlContent = `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#f7f7f5;font-family:'DM Sans',Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f5;padding:40px 20px;">
    <tr><td align="center">
      <table width="100%" style="max-width:560px;background:#ffffff;border:1px solid #e8e8e5;">

        <!-- Header -->
        <tr>
          <td style="background:#111111;padding:32px;text-align:center;">
            <p style="margin:0 0 16px 0;font-size:11px;text-transform:uppercase;letter-spacing:0.5em;color:#a0aab4;">Payment confirmed</p>
            <h1 style="margin:0;font-size:48px;font-weight:700;color:#ffffff;line-height:1;letter-spacing:0.05em;">WELCOME TO<br>THE HC PELOTON</h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px;">
            <p style="margin:0 0 16px 0;font-size:15px;color:#6b7a8d;line-height:1.6;">
              Hi ${toName},
            </p>
            <p style="margin:0 0 24px 0;font-size:15px;color:#6b7a8d;line-height:1.6;">
              You're officially part of <strong style="color:#2f3a47;">Hors Catégorie Brussels Cycling Club</strong>. We're stoked to have you in the peloton. We'll see you on the road.
            </p>

            ${couponBlock}

            <!-- WhatsApp -->
            <a href="https://chat.whatsapp.com/BB0uTITT0vZ9aYH1AZWi7y" style="display:block;background:#25D366;padding:20px 24px;text-decoration:none;margin-bottom:12px;">
              <span style="font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:0.15em;color:#ffffff;">Join the HC WhatsApp group →</span>
              <br><span style="font-size:13px;color:rgba(255,255,255,0.75);">Rides, news, the crew</span>
            </a>

            <!-- Manage subscription -->
            <a href="${billingUrl}" style="display:block;background:#f7f7f5;border:1px solid #e8e8e5;padding:16px 24px;text-decoration:none;margin-bottom:24px;">
              <span style="font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:0.15em;color:#2f3a47;">Manage your membership →</span>
              <br><span style="font-size:12px;color:#a0aab4;">Update payment, cancel anytime</span>
            </a>

            <hr style="border:none;border-top:1px solid #e8e8e5;margin:24px 0;">

            <!-- Next steps -->
            <p style="margin:0 0 12px 0;font-size:11px;text-transform:uppercase;letter-spacing:0.4em;color:#a0aab4;">Next steps</p>
            <ul style="margin:0;padding:0 0 0 16px;color:#6b7a8d;font-size:14px;line-height:2;">
              <li>Follow the club on <a href="https://www.strava.com/clubs/horscategoriebrussels" style="color:#2f3a47;">Strava</a> to get ride notifications</li>
              <li>Check the ride schedule — Tuesdays 18:30 &amp; Sundays 09:00 from Drohme Park</li>
              <li>Read the <a href="https://horscategoriebrussels.cc/ride-etiquette" style="color:#2f3a47;">ride etiquette</a> before your first ride</li>
              <li>Get your <a href="https://horscategoriebrussels.cc/licence" style="color:#2f3a47;">FCWB Velopass licence</a> if you haven't already</li>
            </ul>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#f7f7f5;padding:24px;text-align:center;border-top:1px solid #e8e8e5;">
            <p style="margin:0;font-size:12px;color:#a0aab4;">Hors Catégorie Brussels · Chaussée de la Hulpe 53, 1180 Uccle</p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  await client.transactionalEmails.sendTransacEmail({
    to: [{ email: toEmail, name: toName }],
    sender: { name: "Hors Catégorie Brussels", email: "hello@horscategoriebrussels.cc" },
    subject: "Welcome to HC — You're in the peloton",
    htmlContent,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get("stripe-signature");

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    const email = session.customer_details?.email;
    const name = session.customer_details?.name ?? "HC Member";
    const customerId = session.customer as string | null;
    const priceId = session.metadata?.priceId ?? "";
    const coupon = COUPON_MAP[priceId] ?? null;

    // Generate Stripe billing portal URL
    let billingUrl = "https://billing.stripe.com/p/login";
    if (customerId) {
      try {
        const portalSession = await stripe.billingPortal.sessions.create({
          customer: customerId,
          return_url: "https://horscategoriebrussels.cc/membership",
        });
        billingUrl = portalSession.url;
      } catch {
        // fallback to generic billing URL
      }
    }

    if (email) {
      try {
        await sendConfirmationEmail(email, name, coupon, billingUrl);
      } catch (err) {
        console.error("[Brevo] Failed to send email:", err);
      }
    }
  }

  return NextResponse.json({ received: true });
}
