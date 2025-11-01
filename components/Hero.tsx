import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full animated-gradient z-0"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-navy/50 z-10"></div>
            
            <div className="relative z-20 text-center p-6 flex flex-col items-center">
                 <img 
                    src="https://i.ibb.co/vxKVQ2Ym/rsz-1photo.png" 
                    alt="Md. Mahfuj Al Enam"
                    className="w-52 h-52 rounded-full object-cover mb-8 shadow-xl transition-transform duration-300 hover:scale-105"
                />
                <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-blue tracking-tight drop-shadow-lg mb-4 leading-normal py-2">
                    Md. Mahfuj Al Enam
                </h1>
                <p className="text-lg md:text-xl text-lightest-slate font-bold uppercase tracking-wider">
                    HR & Administration Specialist <span className="text-brand-teal mx-2">|</span> Empowering People, Enhancing Performance, Ensuring Compliance
                </p>
            </div>
        </section>
    );
};

export default Hero;