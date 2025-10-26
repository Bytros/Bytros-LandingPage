'use client';

import { motion } from 'framer-motion';
import { Code2, Layers, Zap, Shield } from 'lucide-react';

const technologies = [
  {
    category: 'Smart Contracts',
    icon: Code2,
    items: ['Cairo 2.8.2', 'Starknet', 'Scarb 2.8.4'],
    color: 'text-brand-accent',
  },
  {
    category: 'Frontend',
    icon: Layers,
    items: ['Next.js 13', 'TypeScript', 'Tailwind CSS'],
    color: 'text-pastel-green-400',
  },
  {
    category: 'Integrations',
    icon: Zap,
    items: ['AVNU Paymaster', 'Extended Protocol', 'Pragma Oracle'],
    color: 'text-brand-accent',
  },
  {
    category: 'Wallets',
    icon: Shield,
    items: ['ArgentX', 'Braavos', 'Xverse'],
    color: 'text-pastel-green-400',
  },
];

export function TechStack() {
  return (
    <section className="py-20 md:py-32 relative bg-brand-dark-lighter/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Built with <span className="text-brand-accent">Cutting-Edge</span> Technology
          </h2>
          <p className="text-xl text-brand-light/70 max-w-2xl mx-auto">
            Powered by the best tools and protocols in the blockchain ecosystem
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-xl bg-brand-dark/50 backdrop-blur-md border border-brand-accent/20 hover:border-brand-accent/40 transition-all duration-300 hover:scale-105">
                <tech.icon className={`w-10 h-10 ${tech.color} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-semibold mb-4 text-brand-light">
                  {tech.category}
                </h3>
                <ul className="space-y-2">
                  {tech.items.map((item, i) => (
                    <li key={i} className="text-brand-light/70 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-accent"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

