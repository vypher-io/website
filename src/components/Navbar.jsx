import { Github } from 'lucide-react';
import { motion } from 'framer-motion';
import vypherIcon from '../assets/vypher-icon.png';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-between p-6 px-12 border-b border-white/10 bg-brand-dark/50 backdrop-blur-md fixed w-full z-50"
        >
            <div className="flex items-center gap-3">
                <img src={vypherIcon} alt="Vypher" className="w-8 h-8 object-contain mix-blend-screen" />
                <div className="text-2xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-secondary">
                    VYPHER
                </div>
            </div>
            <div className="flex gap-6 items-center">
                <a href="https://docs.vypher.io" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                    Docs
                </a>
                <a href="https://github.com/vypher-io/cli" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                    <Github className="w-6 h-6" />
                </a>
            </div>
        </motion.nav>
    );
}
