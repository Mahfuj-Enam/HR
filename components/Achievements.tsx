
import React, { useState, useEffect } from 'react';
import { ACHIEVEMENTS } from '../constants';
import type { Achievement } from '../types';
import { useInView } from '../hooks/useInView';

const AnimatedCounter: React.FC<{ achievement: Achievement }> = ({ achievement }) => {
    const [count, setCount] = useState(0);
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.5 });

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = achievement.value;
            if (start === end) return;

            const duration = 1500;
            const incrementTime = (duration / end);
            
            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) {
                    clearInterval(timer);
                }
            }, incrementTime);

            return () => clearInterval(timer);
        }
    }, [isInView, achievement.value]);

    return (
        <div ref={ref} className="text-center bg-white dark:bg-light-navy p-8 rounded-lg shadow-lg">
            <p className="text-4xl md:text-5xl font-bold text-brand-teal">
                {count}{achievement.suffix}
            </p>
            <p className="text-slate-600 dark:text-slate mt-2">{achievement.label}</p>
        </div>
    );
};


const Achievements: React.FC = () => {
    return (
        <section id="achievements" className="py-20 md:py-28 bg-gray-100 dark:bg-navy -mx-6 md:-mx-12 px-6 md:px-12">
            <div className="container mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-lightest-slate relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-brand-teal after:left-1/2 after:-translate-x-1/2 after:bottom-[-1rem]">
                    Key Achievements
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {ACHIEVEMENTS.map((ach) => (
                        <AnimatedCounter key={ach.label} achievement={ach} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
