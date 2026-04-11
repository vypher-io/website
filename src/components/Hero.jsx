import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Terminal } from 'lucide-react';

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[128px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/20 rounded-full blur-[128px]" />
            </div>

            <div className="z-10 max-w-4xl mx-auto space-y-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex justify-center mb-4"
                >
                    <span className="px-4 py-1.5 rounded-full border border-brand-primary/30 bg-brand-primary/10 text-brand-primary text-sm font-medium flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" /> Secure by Nature
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
                >
                    Guard Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                        Codebase
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    Vypher is the advanced CLI tool for detecting PII and PHI in your source code.
                    Built for Finance and Healthcare standards.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row gap-4 justify-center"
                >
                    <a
                        href="#install"
                        className="px-8 py-4 bg-brand-primary text-brand-dark font-bold rounded-lg hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2"
                    >
                        <Terminal className="w-5 h-5" />
                        Install CLI
                    </a>
                    <a
                        href="https://github.com/vypher-io/cli"
                        target="_blank"
                        rel="noreferrer"
                        className="px-8 py-4 border border-white/20 hover:border-white/40 rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                        View on GitHub <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
