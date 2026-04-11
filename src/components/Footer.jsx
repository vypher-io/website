
export default function Footer() {
    return (
        <footer className="py-12 px-6 border-t border-white/10 text-center text-gray-500">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
                <p>&copy; {new Date().getFullYear()} Vypher. All rights reserved.</p>
                <p className="text-sm">
                    A tool for the modern, security-conscious developer.
                </p>
            </div>
        </footer>
    );
}
