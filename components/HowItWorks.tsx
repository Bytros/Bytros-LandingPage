'use client';

import { motion } from 'framer-motion';
import { Wallet, Bitcoin, TrendingUp, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Wallet,
    number: '01',
    title: 'Connect Your Wallet',
    description: 'Connect your Starknet wallet (ArgentX, Braavos, or Xverse). No email or personal information required.',
    color: 'from-brand-accent to-brand-accent-light',
  },
  {
    icon: Bitcoin,
    number: '02',
    title: 'Deposit Bitcoin Collateral',
    description: 'Deposit bBTC to use as collateral for your trades. Your funds remain in your control at all times.',
    color: 'from-pastel-green-400 to-pastel-green-500',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Trade Perpetuals',
    description: 'Open long or short positions across 50+ markets with leverage up to 20x. Monitor and manage your positions in real-time.',
    color: 'from-brand-accent to-brand-accent-light',
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Manage & Profit',
    description: 'Track your portfolio, close positions, and withdraw profits. All transactions are gasless with AVNU Paymaster.',
    color: 'from-pastel-green-400 to-pastel-green-500',
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-brand-accent/20 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How It <span className="text-brand-accent">Works</span>
          </h2>
          <p className="text-xl text-brand-light/70 max-w-2xl mx-auto">
            Get started with Bytros in four simple steps
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-16 last:mb-0"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Number and Icon */}
                <div className="flex-shrink-0 relative">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} p-0.5`}>
                    <div className="w-full h-full bg-brand-dark rounded-2xl flex items-center justify-center">
                      <step.icon className="w-12 h-12 text-brand-light" />
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-brand-dark border-2 border-brand-accent flex items-center justify-center">
                    <span className="text-lg font-bold text-brand-accent">{step.number}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 text-brand-light">
                    {step.title}
                  </h3>
                  <p className="text-lg text-brand-light/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-12 top-24 w-px h-16 bg-gradient-to-b from-brand-accent/50 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

