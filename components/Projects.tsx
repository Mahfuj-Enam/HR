import React from 'react';
import { PROJECTS } from '../constants';
import { useInView } from '../hooks/useInView';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-lightest-slate relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-brand-teal after:left-1/2 after:-translate-x-1/2 after:bottom-[-1rem]">
        {children}
    </h2>
);

const ProjectCard: React.FC<{ project: typeof PROJECTS[0], index: number }> = ({ project, index }) => {
    const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.2 });
    const animationDelay = `${index * 100}ms`;

    return (
        <div
            ref={ref}
            className={`bg-white dark:bg-light-navy p-6 rounded-lg shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: animationDelay }}
        >
            <div className="flex items-center mb-4">
                <project.icon className="w-8 h-8 text-brand-teal mr-4"/>
                <h3 className="text-xl font-bold text-slate-800 dark:text-lightest-slate">{project.title}</h3>
            </div>
            <p className="text-slate-600 dark:text-light-slate">{project.description}</p>
        </div>
    );
};

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-20 md:py-28 bg-gray-100 dark:bg-navy -mx-6 md:-mx-12 px-6 md:px-12">
            <div className="container mx-auto">
                <SectionTitle>Key HR Initiatives</SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
