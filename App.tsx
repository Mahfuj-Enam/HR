
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';

export default function App() {
    const [darkMode, setDarkMode] = useState(true);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
        }
    }, [darkMode]);
    
    return (
        <div className="bg-gray-100 dark:bg-navy text-slate-700 dark:text-light-slate transition-colors duration-300">
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <main>
                <Hero />
                <div className="container mx-auto px-6 md:px-12">
                    <About />
                    <Experience />
                    <Skills />
                    <Achievements />
                    <Contact />
                </div>
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
}
