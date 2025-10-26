
import React, { useState, useEffect } from 'react';

interface HeaderProps {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => (
    <a href={href} onClick={onClick} className="block md:inline-block text-light-slate hover:text-brand-teal px-3 py-2 rounded-md text-base font-medium transition-colors">
        {children}
    </a>
);

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', text: 'About' },
        { href: '#experience', text: 'Experience' },
        { href: '#skills', text: 'Skills' },
        { href: '#contact', text: 'Contact' },
    ];

    return (
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-light-navy/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 md:px-12 py-4">
                <div className="flex items-center justify-between">
                    <a href="#home" className="text-xl font-bold text-brand-teal">
                        Md. Mahfuj Al Enam
                    </a>
                    <div className="hidden md:flex items-center space-x-2">
                        {navLinks.map(link => <NavLink key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.text}</NavLink>)}
                        <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full text-light-slate hover:bg-lightest-navy focus:outline-none transition-colors">
                           {darkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                         <button onClick={() => setDarkMode(!darkMode)} className="p-2 mr-2 rounded-full text-light-slate hover:bg-lightest-navy focus:outline-none transition-colors">
                           {darkMode ? <SunIcon /> : <MoonIcon />}
                        </button>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-light-slate focus:outline-none">
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden mt-4 bg-light-navy rounded-lg p-4">
                        {navLinks.map(link => <NavLink key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)}>{link.text}</NavLink>)}
                    </div>
                )}
            </nav>
        </header>
    );
};


const SunIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
);

const MoonIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
);

const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export default Header;
