
import React, { useState } from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-lightest-slate relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-brand-teal after:left-1/2 after:-translate-x-1/2 after:bottom-[-1rem]">
        {children}
    </h2>
);

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formState);
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <section id="contact" className="py-20 md:py-28">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="max-w-3xl mx-auto">
                <p className="text-center mb-8 text-lg text-slate-600 dark:text-slate">
                    I'm always open to discussing new opportunities, creative ideas or opportunities to be part of your visions.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input type="text" name="name" placeholder="Your Name" value={formState.name} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-200 dark:bg-lightest-navy text-slate-800 dark:text-light-slate rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal" />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Your Email" value={formState.email} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-200 dark:bg-lightest-navy text-slate-800 dark:text-light-slate rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal" />
                    </div>
                    <div>
                        <textarea name="message" placeholder="Your Message" rows={5} value={formState.message} onChange={handleChange} required className="w-full px-4 py-3 bg-gray-200 dark:bg-lightest-navy text-slate-800 dark:text-light-slate rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="px-8 py-3 bg-brand-teal text-navy font-semibold rounded-md hover:bg-opacity-80 transition-colors duration-300">
                            Send Message
                        </button>
                    </div>
                </form>
                {submitted && <p className="text-center mt-4 text-green-400">Message Sent Successfully!</p>}

                <div className="text-center mt-12">
                     <a href="/mahfuj_cv.pdf" download className="inline-block mb-8 px-8 py-3 border-2 border-brand-teal text-brand-teal font-semibold rounded-md hover:bg-brand-teal/10 transition-colors duration-300">
                        Download CV
                    </a>
                    <div className="flex justify-center space-x-6">
                        <a href="#" className="text-slate hover:text-brand-teal transition-colors"><LinkedInIcon /></a>
                        <a href="#" className="text-slate hover:text-brand-teal transition-colors"><GitHubIcon /></a>
                        <a href="mailto:mahfuj.enam@example.com" className="text-slate hover:text-brand-teal transition-colors"><EmailIcon /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const LinkedInIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);
const GitHubIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/>
    </svg>
);
const EmailIcon = () => (
     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
    </svg>
);

export default Contact;
