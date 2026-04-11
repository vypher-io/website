import { motion } from 'framer-motion';
import { CreditCard, Shield, Mail, Phone, Landmark, FileHeart, Baby, Stethoscope, Bitcoin, Hexagon, Coins } from 'lucide-react';

const categories = [
    {
        name: "Finance",
        color: "text-brand-primary",
        borderColor: "border-brand-primary/30",
        bgColor: "bg-brand-primary/10",
        patterns: [
            { icon: <CreditCard className="w-5 h-5" />, name: "Credit Card", description: "13-16 digit card numbers with Luhn validation", tags: ["Luhn ✓", "Proximity"] },
            { icon: <Shield className="w-5 h-5" />, name: "SSN", description: "US Social Security Numbers (XXX-XX-XXXX)", tags: ["Proximity"] },
            { icon: <Landmark className="w-5 h-5" />, name: "IBAN", description: "International Bank Account Numbers", tags: [] },
        ]
    },
    {
        name: "Crypto",
        color: "text-orange-400",
        borderColor: "border-orange-400/30",
        bgColor: "bg-orange-400/10",
        patterns: [
            { icon: <Bitcoin className="w-5 h-5" />, name: "Bitcoin", description: "P2PKH, P2SH, and Bech32 wallet addresses", tags: ["Proximity"] },
            { icon: <Hexagon className="w-5 h-5" />, name: "Ethereum", description: "0x-prefixed 40 hex character addresses", tags: ["Proximity"] },
            { icon: <Coins className="w-5 h-5" />, name: "Solana", description: "Base58 encoded 32-44 character addresses", tags: ["Proximity"] },
        ]
    },
    {
        name: "Healthcare",
        color: "text-brand-secondary",
        borderColor: "border-brand-secondary/30",
        bgColor: "bg-brand-secondary/10",
        patterns: [
            { icon: <FileHeart className="w-5 h-5" />, name: "MRN", description: "Medical Record Numbers (6-12 digits)", tags: [] },
            { icon: <Baby className="w-5 h-5" />, name: "DOB", description: "Dates of Birth near keywords", tags: [] },
            { icon: <Stethoscope className="w-5 h-5" />, name: "ICD-10", description: "ICD-10 medical diagnosis codes", tags: [] },
        ]
    },
    {
        name: "General PII",
        color: "text-purple-400",
        borderColor: "border-purple-400/30",
        bgColor: "bg-purple-400/10",
        patterns: [
            { icon: <Mail className="w-5 h-5" />, name: "Email", description: "Email addresses", tags: [] },
            { icon: <Phone className="w-5 h-5" />, name: "Phone", description: "US and international phone numbers", tags: [] },
        ]
    }
];

export default function DetectionPatterns() {
    return (
        <section className="py-24 px-4 relative overflow-hidden">
            <div className="absolute top-0 left-1/3 w-96 h-96 bg-brand-primary/5 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary/5 rounded-full blur-[128px]" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Detection Patterns</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        11 built-in patterns across finance, crypto, healthcare, and general PII — each filterable by tag with <code className="text-brand-primary bg-white/5 px-1.5 py-0.5 rounded text-sm">--rules</code>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {categories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                            className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
                        >
                            <div className={`px-6 py-4 border-b border-white/10 flex items-center gap-3`}>
                                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${category.bgColor} ${category.color} border ${category.borderColor}`}>
                                    {category.name}
                                </span>
                                <span className="text-gray-500 text-sm">{category.patterns.length} patterns</span>
                            </div>

                            <div className="divide-y divide-white/5">
                                {category.patterns.map((pattern, patIndex) => (
                                    <div key={patIndex} className="px-6 py-4 flex items-start gap-4 hover:bg-white/5 transition-colors">
                                        <div className={`mt-0.5 ${category.color}`}>
                                            {pattern.icon}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <span className="font-semibold text-white">{pattern.name}</span>
                                                {pattern.tags.map((tag, tagIndex) => (
                                                    <span key={tagIndex} className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-white/10 text-gray-400">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="text-sm text-gray-500 mt-0.5">{pattern.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
