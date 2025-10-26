import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bytros - Bitcoin Perpetuals on Starknet | Coming Soon',
  description: 'Trade perpetual futures with Bitcoin collateral. Up to 20x leverage, no KYC, self-custody on Starknet. Launching soon.',
  keywords: 'Bitcoin, Perpetuals, Starknet, DeFi, Leverage Trading, tBTC, Decentralized Exchange',
  openGraph: {
    title: 'Bytros - Bitcoin Perpetuals on Starknet',
    description: 'Trade perpetual futures with Bitcoin collateral. Up to 20x leverage, no KYC, self-custody on Starknet.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bytros - Bitcoin Perpetuals on Starknet',
    description: 'Trade perpetual futures with Bitcoin collateral. Up to 20x leverage, no KYC, self-custody on Starknet.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/Bytros1.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/Bytros1.jpg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}

