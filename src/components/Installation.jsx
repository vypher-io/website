import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function Installation() {
    const [copied, setCopied] = useState(false);
    const command = "brew install vypher-io/tap/vypher";

    const handleCopy = () => {
        navigator.clipboard.writeText(command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="install" className="py-24 px-4 bg-brand-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-brand-primary/5 rounded-full blur-[100px]" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="text-3xl font-bold mb-8">Get Started in Seconds</h2>

                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-black/50 border border-white/20 rounded-xl p-6 flex items-center justify-between gap-4 backdrop-blur-md"
                >
                    <code className="font-mono text-brand-primary text-sm md:text-base overflow-x-auto whitespace-nowrap scrollbar-hide">
                        {command}
                    </code>
                    <button
                        onClick={handleCopy}
                        className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
                        title="Copy to clipboard"
                    >
                        {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                    </button>
                </motion.div>

                <p className="mt-4 text-gray-500 text-sm">
                    Check <a href="https://docs.vypher.io/installation.html" className="text-brand-secondary hover:underline">documentation</a> for more installation instructions.
                </p>
            </div>
        </section>
    );
}
