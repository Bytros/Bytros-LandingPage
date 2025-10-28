'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Zap, TrendingUp, Wallet, DollarSign, BarChart3, Coins } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'No KYC Required',
    description: 'Trade anonymously without identity verification. Your privacy is protected.',
    color: 'text-brand-accent',
  },
  {
    icon: Lock,
    title: 'Self-Custody',
    description: 'You control your Bitcoin. Never deposit to a centralized exchange.',
    color: 'text-pastel-green-400',
  },
  {
    icon: Zap,
    title: 'Gasless Trading',
    description: 'Pay gas fees with USDC, ETH, or STRK. Zero ETH required for trading.',
    color: 'text-brand-accent',
  },
  {
    icon: TrendingUp,
    title: '50+ Markets',
    description: 'Trade perpetuals across major cryptocurrencies with up to 20x leverage.',
    color: 'text-pastel-green-400',
  },
  {
    icon: Wallet,
    title: 'Multi-Wallet Support',
    description: 'Connect with ArgentX, Braavos, or Xverse. Choose your preferred wallet.',
    color: 'text-brand-accent',
  },
  {
    icon: DollarSign,
    title: 'bBTC Collateral',
    description: 'Use native bBTC token (1:1 backed by Bitcoin) as collateral.',
    color: 'text-pastel-green-400',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Data',
    description: 'Live price feeds via Pragma Oracle and WebSocket market updates.',
    color: 'text-brand-accent',
  },
  {
    icon: Coins,
    title: 'Extended Protocol',
    description: 'Built on Extended Protocol for reliable perpetual futures trading.',
    color: 'text-pastel-green-400',
  },
];

export function Features() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="text-brand-accent">Bytros</span>?
          </h2>
          <p className="text-xl text-brand-light/70 max-w-2xl mx-auto">
            Experience the future of decentralized perpetual futures trading with cutting-edge features
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-brand-dark-lighter/30 backdrop-blur-md border border-brand-accent/20 hover:bg-brand-dark-lighter/50 hover:border-brand-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-accent/10">
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold mb-3 text-brand-light">
                  {feature.title}
                </h3>
                <p className="text-brand-light/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

