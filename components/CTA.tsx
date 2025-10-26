'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Bell, Github, Twitter } from 'lucide-react';
import { useState } from 'react';

export function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Thank you! We\'ll notify you when Bytros launches.');
        setEmail('');

        // Reset after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again later.');
      console.error('Subscription error:', error);
    }
  };
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/20 via-pastel-green-400/20 to-brand-accent/20 blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-12 md:p-16 rounded-2xl bg-gradient-to-br from-brand-dark-lighter/80 to-brand-dark/80 backdrop-blur-xl border border-brand-accent/30 shadow-2xl shadow-brand-accent/20">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-pastel-green-400/10 rounded-full blur-2xl"></div>

            <div className="relative text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Ready to <span className="text-brand-accent">Start Trading</span>?
                </h2>
                <p className="text-xl md:text-2xl text-brand-light/80 mb-10 leading-relaxed">
                  Join the waitlist and be among the first to experience Bitcoin-collateralized perpetual futures on Starknet
                </p>
              </motion.div>

              {/* Email signup form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="max-w-md mx-auto mb-8"
              >
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    disabled={status === 'loading' || status === 'success'}
                    className="flex-1 px-6 py-4 rounded-lg bg-brand-dark border border-brand-accent/30 text-brand-light placeholder:text-brand-light/40 focus:outline-none focus:border-brand-accent/60 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="group px-8 py-4 bg-brand-accent hover:bg-brand-accent-dark text-brand-light font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-brand-accent/25 hover:shadow-brand-accent/40 hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <Bell className="w-5 h-5" />
                    {status === 'loading' ? 'Sending...' : status === 'success' ? 'Subscribed!' : 'Notify Me'}
                    {status === 'idle' && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                  </button>
                </form>
                {message && (
                  <p className={`text-sm mt-3 ${status === 'success' ? 'text-pastel-green-400' : status === 'error' ? 'text-red-400' : 'text-brand-light/50'}`}>
                    {message}
                  </p>
                )}
                {!message && (
                  <p className="text-sm text-brand-light/50 mt-3">
                    We'll notify you when Bytros launches. No spam, ever.
                  </p>
                )}
              </motion.div>

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex justify-center gap-4"
              >
                <a
                  href="https://x.com/BytrosX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-brand-dark/50 border border-brand-accent/20 hover:border-brand-accent/40 hover:bg-brand-dark-lighter/50 transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-6 h-6 text-brand-light/70 hover:text-brand-accent transition-colors" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-brand-dark/50 border border-brand-accent/20 hover:border-brand-accent/40 hover:bg-brand-dark-lighter/50 transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-6 h-6 text-brand-light/70 hover:text-brand-accent transition-colors" />
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

