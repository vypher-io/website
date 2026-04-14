import { motion } from 'framer-motion';
import { Copy, Check } from 'lucide-react';
import { useState, useEffect } from 'react';

function detectOS() {
    const ua = navigator.userAgent;
    if (ua.includes('Win')) return 'windows';
    if (ua.includes('Mac')) return 'mac';
    if (ua.includes('Linux') || ua.includes('X11')) return 'linux';
    return 'unknown';
}

const OS_CONFIG = {
    mac: {
        label: 'macOS',
        command: 'brew install vypher-io/tap/vypher',
        note: null,
    },
    linux: {
        label: 'Linux',
        command: 'brew install vypher-io/tap/vypher',
        note: 'Requires Homebrew on Linux.',
    },
    windows: {
        label: 'Windows',
        command: 'scoop bucket add vypher-io https://github.com/vypher-io/scoop-bucket && scoop install vypher',
        note: 'Requires Scoop.',
    },
    unknown: {
        label: null,
        command: null,
        note: null,
    },
};

export default function Installation() {
    const [copied, setCopied] = useState(false);
    const [os, setOS] = useState('mac');

    useEffect(() => {
        setOS(detectOS());
    }, []);

    const config = OS_CONFIG[os];

    const handleCopy = () => {
        navigator.clipboard.writeText(config.command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="install" className="py-24 px-4 bg-brand-dark relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-64 bg-brand-primary/5 rounded-full blur-[100px]" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <h2 className="text-3xl font-bold mb-8">Get Started in Seconds</h2>

                {os !== 'unknown' ? (
                    <>
                        {config.label && (
                            <p className="text-gray-500 text-sm mb-4">
                                Detected: <span className="text-white">{config.label}</span>
                            </p>
                        )}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            className="bg-black/50 border border-white/20 rounded-xl p-6 flex items-center justify-between gap-4 backdrop-blur-md"
                        >
                            <code className="font-mono text-brand-primary text-sm md:text-base overflow-x-auto whitespace-nowrap scrollbar-hide">
                                {config.command}
                            </code>
                            <button
                                onClick={handleCopy}
                                className="p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white flex-shrink-0"
                                title="Copy to clipboard"
                            >
                                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                            </button>
                        </motion.div>
                        {config.note && (
                            <p className="mt-3 text-gray-500 text-sm">{config.note}</p>
                        )}
                    </>
                ) : (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-black/50 border border-white/20 rounded-xl p-6 text-center backdrop-blur-md"
                    >
                        <p className="text-gray-300 mb-3">Download the latest binary for your platform:</p>
                        <a
                            href="https://github.com/vypher-io/cli/releases/latest"
                            className="inline-block px-5 py-2 bg-brand-primary text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            View Releases on GitHub
                        </a>
                    </motion.div>
                )}

                <p className="mt-4 text-gray-500 text-sm">
                    Check <a href="https://docs.vypher.io/installation.html" className="text-brand-secondary hover:underline">documentation</a> for more installation instructions.
                </p>
            </div>
        </section>
    );
}
