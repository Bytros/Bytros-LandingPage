# Bytros Landing Page

Landing page for Bytros - Bitcoin Perpetuals on Starknet

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The landing page will be available at `http://localhost:3001`

## 📦 Tech Stack

- **Next.js 13** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🎨 Design System

- **Font**: Aeonik Regular
- **Background**: `#000000` (Black)
- **Primary Accent**: `#ed786a` (Coral/orange-red)
- **Secondary Accent**: `#4ade80` (Pastel Green)

## 📁 Structure

```
landing/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main landing page
├── components/
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   ├── HowItWorks.tsx    # How it works section
│   ├── TechStack.tsx     # Technology stack section
│   ├── CTA.tsx           # Call to action section
│   └── Footer.tsx        # Footer
├── lib/
│   └── utils.ts          # Utility functions
└── public/               # Static assets
```

## 🌐 Deployment

The landing page is configured for static export and can be deployed to any static hosting service:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## 📝 License

MIT

