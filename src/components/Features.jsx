import { motion } from 'framer-motion';
import { ScanSearch, Lock, Zap, FileJson, ShieldCheck, Filter, GitCommitHorizontal } from 'lucide-react';

const features = [
    {
        icon: <ScanSearch className="w-8 h-8 text-brand-primary" />,
        title: "Deep Scanning",
        description: "Recursively scans directories with YAML config files, customizable exclude patterns, max-depth control, and smart default ignores."
    },
    {
        icon: <Lock className="w-8 h-8 text-brand-secondary" />,
        title: "Industry Standards",
        description: "Pre-configured patterns for Finance (SSN, IBAN) and Healthcare (MRN, ICD-10) with tag-based rule filtering for targeted scans."
    },
    {
        icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
        title: "Smart Validation",
        description: "Luhn algorithm verification and keyword proximity detection drastically reduce false positives and indicate match confidence."
    },
    {
        icon: <Zap className="w-8 h-8 text-yellow-400" />,
        title: "Blazing Fast",
        description: "Parallel file scanning auto-scaled to CPU cores. Built with Go for maximum throughput on large codebases."
    },
    {
        icon: <FileJson className="w-8 h-8 text-purple-400" />,
        title: "CI/CD Ready",
        description: "Console, JSON, and SARIF output formats built in. SARIF is compatible with GitHub Code Scanning for inline PR annotations. Use --fail-on-match to block merges on any finding."
    },
    {
        icon: <Filter className="w-8 h-8 text-orange-400" />,
        title: "Flexible Filtering",
        description: "Exclude files with glob patterns and leverage sensible defaults to focus scanning on what matters."
    },
    {
        icon: <GitCommitHorizontal className="w-8 h-8 text-pink-400" />,
        title: "Shift Left",
        description: "Pre-commit hooks catch sensitive data before it ever enters your repo. Stop leaks at the source, not in production."
    }
];

export default function Features() {
    return (
        <section className="py-24 px-4 bg-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Why Vypher?</h2>
                    <p className="text-gray-400">Essential protection for modern development.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-primary/50 transition-colors group"
                        >
                            <div className="mb-4 bg-white/5 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
