'use client';

import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Integrations } from '@/components/Integrations';
import { TechStack } from '@/components/TechStack';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <div id="integrations">
        <Integrations />
      </div>
      <div id="technology">
        <TechStack />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}

