import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full animated-gradient z-0"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-navy/50 z-10"></div>
            
            <div className="relative z-20 text-center p-6 flex flex-col items-center">
                <div className="group w-48 h-48 md:w-56 md:h-56 mb-6">
                    <img src="https://i.ibb.co.com/XZj5JWby/Joseph-removebg-preview.png" alt="Md. Mahfuj Al Enam" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue tracking-tight drop-shadow-lg mb-4">
                    Md. Mahfuj Al Enam
                </h1>
                <p className="text-lg md:text-xl text-lightest-slate font-light uppercase tracking-wider">
                    HR & Administration Specialist <span className="text-brand-teal mx-2">|</span> Driving People, Performance & Compliance
                </p>
            </div>
             <div className="absolute bottom-10 z-20">
                <a href="#about" aria-label="Scroll down">
                    <div className="w-6 h-10 border-2 rounded-full flex justify-center items-start p-1">
                        <div className="w-1 h-2 bg-brand-teal rounded-full animate-bounce"></div>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;