This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Stripe Webhook — Emails de confirmation

Le webhook Stripe (`src/app/api/webhooks/stripe/route.ts`) écoute l'événement `checkout.session.completed`.

L'email de confirmation membership (via Brevo) ne part **que si le `priceId` est identifié comme membership** dans `MEMBERSHIP_PRICE_IDS` :

| Price ID | Type | Coupon |
|---|---|---|
| `price_1THqDtK49HEAljERGQuMt1x4` | Membership mensuel | HCMEMBER10 (10%) |
| `price_1THqDtK49HEAljERNFrsHZ9G` | Membership annuel | HCMEMBER15 (15%) |

Tout autre `priceId` (nouveaux produits, événements, etc.) ne déclenche pas cet email. Pour ajouter un email spécifique à un autre produit, ajouter un `else if` dans le handler `checkout.session.completed`.
