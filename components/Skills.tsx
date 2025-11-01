import React, { useState, useEffect } from 'react';
import { SKILLS_CATEGORIZED } from '../constants';
import type { Skill } from '../types';
import { useInView } from '../hooks/useInView';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-lightest-slate relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-brand-teal after:left-1/2 after:-translate-x-1/2 after:bottom-[-1rem]">
        {children}
    </h2>
);

const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.5 });
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (isInView) {
            setWidth(skill.level);
        }
    }, [isInView, skill.level]);

    return (
        <div ref={ref} className="w-full">
            <div className="flex justify-between mb-1">
                <span className="text-base font-medium text-slate-700 dark:text-light-slate">{skill.name}</span>
                <span className="text-sm font-medium text-slate-700 dark:text-light-slate">{width}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-lightest-navy rounded-full h-2.5">
                <div 
                    className="bg-brand-teal h-2.5 rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${width}%` }}
                ></div>
            </div>
        </div>
    );
};


const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-20 md:py-28">
            <SectionTitle>Core Competencies</SectionTitle>
            <div className="space-y-12">
                {Object.entries(SKILLS_CATEGORIZED).map(([category, skills]) => (
                    <div key={category}>
                        <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-lightest-slate">{category}</h3>
                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                            {skills.map((skill) => (
                                <SkillBar key={skill.name} skill={skill} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;