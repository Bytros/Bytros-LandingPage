'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pastel-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* Coming Soon Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-accent/20 border border-brand-accent/30 mb-8"
          >
            <Sparkles className="w-4 h-4 text-brand-accent" />
            <span className="text-sm font-medium text-brand-accent">Launching Soon</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-brand-accent via-brand-accent-light to-brand-accent bg-clip-text text-transparent">
              Bytros
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-8 text-brand-light"
          >
            Bitcoin Perpetuals on Starknet
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-brand-light/80 mb-12 leading-relaxed max-w-3xl mx-auto"
          >
            Trade decentralized perpetual futures with <span className="text-pastel-green-400 font-semibold">Bitcoin collateral</span>. 
            Up to <span className="text-brand-accent font-semibold">20x leverage</span>, no KYC, complete self-custody.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button className="group relative px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-brand-light font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:scale-105 flex items-center gap-2">
              Get Notified
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 border-2 border-brand-accent/30 bg-brand-accent/10 hover:bg-brand-accent/20 text-brand-light font-semibold rounded-lg transition-all duration-300 hover:border-brand-accent/50">
              Learn More
            </button>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          >
            {[
              { label: 'Markets', value: '50+' },
              { label: 'Max Leverage', value: '20x' },
              { label: 'KYC Required', value: 'No' },
              { label: 'Gas Fees', value: 'Gasless' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-brand-light/60">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-brand-accent/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-brand-accent rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
}

