import React from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-lightest-slate relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-brand-teal after:left-1/2 after:-translate-x-1/2 after:bottom-[-1rem]">
        {children}
    </h2>
);

const About: React.FC = () => {
    return (
        <section id="about" className="py-20 md:py-28">
            <SectionTitle>About Me</SectionTitle>
            <div className="grid md:grid-cols-5 gap-10 items-center">
                <div className="md:col-span-3 text-lg text-slate-600 dark:text-slate leading-relaxed">
                    <p className="mb-4">
                        A seasoned HR & Administration professional with over 7 years of experience across the manufacturing and IT sectors. My expertise lies in building robust HR frameworks that drive performance, ensure compliance, and foster a positive work environment.
                    </p>
                    <p>
                        I specialize in recruitment, KPI-based performance management, HR policy development, and labor law compliance. I am passionate about creating transparent, data-driven, and people-centric workplaces where both the organization and its employees can achieve their full potential.
                    </p>
                </div>
                <div className="md:col-span-2 bg-white dark:bg-light-navy p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-brand-teal">Key Information</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start">
                            <CheckIcon />
                            <div>
                                <span className="font-bold block">Core Skills:</span> Recruitment, Performance Management, HR Policy & Compliance, C&B, HRIS, Labor Law.
                            </div>
                        </li>
                        <li className="flex items-start">
                             <CheckIcon />
                            <div>
                                <span className="font-bold block">Education (LLB):</span> World University of Bangladesh
                            </div>
                        </li>
                        <li className="flex items-start">
                            <CheckIcon />
                             <div>
                                <span className="font-bold block">Education (PGD in HRM):</span> Edupro, UK
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

const CheckIcon = () => (
    <svg className="w-6 h-6 text-brand-teal flex-shrink-0 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
);


export default About;