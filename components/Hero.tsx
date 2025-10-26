
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full animated-gradient z-0"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-navy/50 z-10"></div>
            
            <div className="relative z-20 text-center p-6 flex flex-col items-center">
                <div className="w-40 h-40 md:w-48 md:h-48 mb-6 rounded-full overflow-hidden border-4 border-brand-teal shadow-2xl">
                    <img src="https://picsum.photos/seed/mahfuj/300/300" alt="Md. Mahfuj Al Enam" className="w-full h-full object-cover filter grayscale" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-lightest-slate mb-3">Md. Mahfuj Al Enam</h1>
                <p className="text-lg md:text-2xl text-brand-teal font-medium">
                    HR & Administration Specialist | Driving People, Performance & Compliance
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
