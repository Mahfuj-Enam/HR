
import React from 'react';
import { EXPERIENCES } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-slate-800 dark:text-lightest-slate relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-brand-teal after:left-1/2 after:-translate-x-1/2 after:bottom-[-1rem]">
        {children}
    </h2>
);

const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-20 md:py-28">
            <SectionTitle>Professional Experience</SectionTitle>
            <div className="relative border-l-2 border-brand-teal/30 ml-3 md:ml-0">
                {EXPERIENCES.map((job, index) => (
                    <div key={index} className="mb-12 pl-10 timeline-item">
                        <div className="bg-white dark:bg-light-navy p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                            <span className="text-brand-teal font-semibold text-sm">{job.period}</span>
                            <h3 className="text-xl font-bold mt-1 text-slate-800 dark:text-lightest-slate">{job.role}</h3>
                            <p className="text-slate-500 dark:text-slate mb-4">{job.company}</p>
                            <ul className="space-y-2 list-disc list-inside text-slate-600 dark:text-light-slate">
                                {job.responsibilities.map((resp, i) => (
                                    <li key={i}>{resp}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
