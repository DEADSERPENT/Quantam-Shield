# QuantumShield - The World's First Quantum-Safe Security Key

Website for QuantumShield, featuring post-quantum cryptography and quantum-random number generation technology.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: React 19

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Deployment

⚠️ **Important**: Never deploy using `npm run dev` in production!

### Build and Run Locally

```bash
# Create production build
npm run build

# Start production server
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import to [Vercel](https://vercel.com)
3. Vercel automatically handles build and deployment

### Deploy to Other Platforms

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions for:
- Netlify
- Docker
- VPS/Cloud servers
- PM2 process manager

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Home page
│   ├── pricing/      # Pricing page
│   ├── product/      # Product page
│   └── ...
├── components/       # Reusable React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ...
└── globals.css       # Global styles
```

## Environment Variables

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

## Scripts

- `npm run dev` - Start development server (port 3000)
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

ISC

---

Made in India 🇮🇳
