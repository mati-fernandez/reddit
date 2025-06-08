This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Environment Variables
To run this project correctly, create a .env.local file with your own API keys and settings, for example:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_ADMIN_TOKEN=

OPENAI_API_KEY=
```
To test OpenAI-related features, you must use your own API key. The same applies when deploying on Vercel — set these variables under Environment Variables.

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

## Deploying to Vercel (What I Actually Did)
This project is deployed on Vercel, using the following steps:

1. Production Build Locally

```bash
vercel build
```
>⚠️ Make sure to run the terminal as Administrator if you're on Windows — vercel build may fail otherwise due to permission issues when creating symlinks.

> ⚠️ Manually copied environment variables to Vercel after initial build error.

2. Deploy to Production

```bash
vercel --prod
```
3. Add Custom Domain (Optional)

- Go to your Vercel dashboard → your project → Domains tab.

- Add your custom domain and verify it.

4. Configure CORS in Sanity

- Go to Sanity.io → Project Settings → API → CORS origins.

- Add your deployed URL (e.g. https://yourdomain.com or the Vercel preview URL).

- Enable credentials

- Save changes.

