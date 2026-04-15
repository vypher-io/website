import { motion } from 'framer-motion';
import {
    SiDocker,
    SiGithub,
    SiGitlab,
    SiCircleci,
    SiJenkins,
    SiGit,
    SiBitbucket,
} from 'react-icons/si';

const platforms = [
    { icon: SiGithub,    name: 'GitHub Actions', color: '#ffffff' },
    { icon: SiGitlab,    name: 'GitLab CI/CD',   color: '#FC6D26' },
    { icon: SiBitbucket, name: 'Bitbucket',       color: '#0052CC' },
    { icon: SiCircleci,  name: 'CircleCI',        color: '#343434' },
    { icon: SiJenkins,   name: 'Jenkins',          color: '#D24939' },
    { icon: SiDocker,    name: 'Docker',           color: '#2496ED' },
    { icon: SiGit,       name: 'Git Hooks',        color: '#F05032' },
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden:  { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function CompatibleWith() {
    return (
        <section className="py-16 px-4 border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-8"
                >
                    Works with your toolset
                </motion.p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
                >
                    {platforms.map(({ icon: Icon, name, color }) => (
                        <motion.div
                            key={name}
                            variants={itemVariants}
                            className="flex flex-col items-center gap-2 group"
                        >
                            <Icon
                                style={{ color }}
                                className="w-8 h-8 opacity-50 group-hover:opacity-100 transition-opacity duration-200"
                            />
                            <span className="text-xs text-gray-600 group-hover:text-gray-400 transition-colors duration-200 whitespace-nowrap">
                                {name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
