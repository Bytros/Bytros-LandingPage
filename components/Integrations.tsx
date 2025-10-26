'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const integrations = [
  {
    name: 'AVNU Paymaster',
    description: 'Gasless transactions - Pay gas fees with USDC, ETH, or STRK',
    logo: '⚡',
    link: 'https://doc.avnu.fi/',
    color: 'from-purple-500 to-purple-600',
  },
  {
    name: 'Extended Protocol',
    description: 'Perpetuals trading infrastructure with 50+ markets',
    logo: '📊',
    link: 'https://docs.extended.exchange/',
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Pragma Oracle',
    description: 'Real-time price feeds for accurate market data',
    logo: '🔮',
    link: 'https://docs.pragma.build/',
    color: 'from-green-500 to-green-600',
  },
  {
    name: 'Sats Connect',
    description: 'Xverse wallet integration for Bitcoin + Starknet',
    logo: '₿',
    link: 'https://docs.xverse.app/sats-connect/',
    color: 'from-orange-500 to-orange-600',
  },
  {
    name: 'Starknet',
    description: 'Layer 2 scaling solution with Cairo smart contracts',
    logo: '⚙️',
    link: 'https://www.starknet.io/',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    name: 'Threshold Network',
    description: 'tBTC - 1:1 Bitcoin-backed token on Starknet',
    logo: '🔐',
    link: 'https://threshold.network/',
    color: 'from-red-500 to-red-600',
  },
];

export function Integrations() {
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
            Powered by <span className="text-brand-accent">Leading Protocols</span>
          </h2>
          <p className="text-xl text-brand-light/70 max-w-2xl mx-auto">
            Built on top of the most trusted and battle-tested protocols in the ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {integrations.map((integration, index) => (
            <motion.a
              key={index}
              href={integration.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-brand-dark-lighter/30 backdrop-blur-md border border-brand-accent/20 hover:bg-brand-dark-lighter/50 hover:border-brand-accent/40 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-brand-accent/10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`text-4xl w-16 h-16 rounded-lg bg-gradient-to-br ${integration.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    {integration.logo}
                  </div>
                  <ExternalLink className="w-5 h-5 text-brand-light/40 group-hover:text-brand-accent transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-brand-light group-hover:text-brand-accent transition-colors">
                  {integration.name}
                </h3>
                <p className="text-brand-light/70 text-sm leading-relaxed">
                  {integration.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

