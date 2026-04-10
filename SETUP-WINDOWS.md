# Ryan Clark Creates - Windows Setup Guide

## Prerequisites

1. **Node.js 18+** - Download from https://nodejs.org (LTS version)
2. **Git** - Download from https://git-scm.com/download/win
3. **Cursor** - Download from https://cursor.sh

## Setup Steps

### 1. Open Terminal in Cursor
Press `Ctrl + `` ` (backtick) to open the integrated terminal.

### 2. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/ryan-clark-creates.git
cd ryan-clark-creates
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Create Environment File
Create a file named `.env.local` in the project root with:

```env
# Stripe Configuration
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_key_here

# Site URL (for local development)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> Get Stripe keys from https://dashboard.stripe.com/apikeys

### 5. Run Development Server
```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Common Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Run production build |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── app/                    # Pages (Next.js App Router)
│   ├── api/               # API routes (checkout, subscribe, webhook)
│   ├── cart/              # Shopping cart page
│   ├── contact/           # Contact & commissions page
│   ├── fineart/           # Fine art gallery
│   ├── ghostwriterpress/  # Books & publishing
│   ├── hookwormrecords/   # Music & records
│   └── subscribe/         # Newsletter signup
├── components/            # React components
├── context/               # Cart state management
├── data/                  # Products & config
└── lib/                   # Stripe client
```

## Deploying to Vercel

1. Push changes to GitHub
2. Connect repo in Vercel dashboard
3. Add environment variables in Vercel project settings
4. Deploy

## Troubleshooting

### "Module not found" errors
```bash
rm -rf node_modules
npm install
```

### Port 3000 in use
```bash
npm run dev -- -p 3001
```

### Stripe webhook errors locally
Use Stripe CLI to forward webhooks:
```bash
stripe listen --forward-to localhost:3000/api/webhook
```

## Questions?
Contact the project owner or check the Next.js docs: https://nextjs.org/docs
