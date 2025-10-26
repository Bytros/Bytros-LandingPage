'use client';

import { Github, Twitter, FileText } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-accent/20 bg-brand-dark-lighter/30 backdrop-blur-md">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <span className="text-3xl font-bold bg-gradient-to-r from-brand-accent to-brand-accent-light bg-clip-text text-transparent">
                Bytros
              </span>
            </div>
            <p className="text-brand-light/70 mb-4 max-w-md">
              Decentralized perpetual futures trading with Bitcoin collateral on Starknet. 
              Trade with up to 20x leverage, no KYC, complete self-custody.
            </p>
            <div className="flex gap-4">
              <a
                href="https://x.com/BytrosX"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-dark/50 border border-brand-accent/20 hover:border-brand-accent/40 hover:bg-brand-dark-lighter/50 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-brand-light/70 hover:text-brand-accent transition-colors" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-brand-dark/50 border border-brand-accent/20 hover:border-brand-accent/40 hover:bg-brand-dark-lighter/50 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-brand-light/70 hover:text-brand-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold text-brand-light mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-brand-light/70 hover:text-brand-accent transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-brand-light/70 hover:text-brand-accent transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-brand-light/70 hover:text-brand-accent transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#technology" className="text-brand-light/70 hover:text-brand-accent transition-colors">
                  Technology
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-brand-light mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-brand-light/70 hover:text-brand-accent transition-colors flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-light/70 hover:text-brand-accent transition-colors flex items-center gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-brand-light/70 hover:text-brand-accent transition-colors">
                  Whitepaper
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brand-accent/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-light/60 text-sm">
              © {currentYear} Bytros. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-brand-light/60 hover:text-brand-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-brand-light/60 hover:text-brand-accent transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

