import React, { useState } from 'react';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-800 dark:text-lightest-slate relative after:content-[''] after:absolute after:w-20 after:h-1 after:bg-brand-teal after:left-1/2 after:-translate-x-1/2 after:bottom-[-1rem]">
        {children}
    </h2>
);

const Contact: React.FC = () => {
    const EMAILJS_PUBLIC_KEY = "ZCsFjYTDHqeILe33D";
    const EMAILJS_SERVICE_ID = "service_w92h4ps";
    const EMAILJS_TEMPLATE_ID = "template_3zjvh32";

    const [submitting, setSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setSubmitting(true);
        setStatusMessage('');
        setIsError(false);

        const form = e.target as HTMLFormElement;

        if (!(window as any).emailjs) {
            setStatusMessage("Email service is not available. Please try again later.");
            setIsError(true);
            setSubmitting(false);
            return;
        }

        (window as any).emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form, EMAILJS_PUBLIC_KEY)
            .then(() => {
                setStatusMessage("Message Sent Successfully!");
                setIsError(false);
                form.reset();
            }, (error: any) => {
                let errorMessage = "Oops! There was a problem submitting your form.";
                if (error && error.text) {
                    errorMessage = `Failed to send: ${error.text}. Please double-check your EmailJS service, template, and variable names ({{name}}, {{email}}, {{message}}).`;
                }
                setStatusMessage(errorMessage);
                setIsError(true);
                console.error("EmailJS failed to send:", error);
            }).finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <section id="contact" className="py-20 md:py-28">
            <SectionTitle>Get In Touch</SectionTitle>
            <div className="max-w-3xl mx-auto">
                <p className="text-center mb-8 text-lg text-slate-600 dark:text-slate">
                    Let’s connect to build stronger people and performance systems. I'm always open to discussing new opportunities, creative ideas or opportunities to be part of your visions.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <input type="text" name="name" placeholder="Your Name" required className="w-full px-4 py-3 bg-gray-200 dark:bg-lightest-navy text-slate-800 dark:text-light-slate rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal" />
                    </div>
                    <div>
                        <input type="email" name="email" placeholder="Your Email" required className="w-full px-4 py-3 bg-gray-200 dark:bg-lightest-navy text-slate-800 dark:text-light-slate rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal" />
                    </div>
                    <div>
                        <textarea name="message" placeholder="Your Message" rows={5} required className="w-full px-4 py-3 bg-gray-200 dark:bg-lightest-navy text-slate-800 dark:text-light-slate rounded-md focus:outline-none focus:ring-2 focus:ring-brand-teal"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" disabled={submitting} className="px-8 py-3 bg-brand-teal text-navy font-semibold rounded-md hover:bg-opacity-80 transition-colors duration-300 disabled:bg-opacity-50 disabled:cursor-not-allowed">
                            {submitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>
                {statusMessage && <p className={`text-center mt-4 ${isError ? 'text-red-500' : 'text-green-400'}`}>{statusMessage}</p>}

                <div className="text-center mt-12">
                     <a href="https://drive.google.com/uc?export=download&id=1r9UNwYVemGQQXnt0BecPvgPlXd1dMX9Q" target="_blank" rel="noopener noreferrer" className="inline-block mb-8 px-8 py-3 border-2 border-brand-teal text-brand-teal font-semibold rounded-md hover:bg-brand-teal/10 transition-colors duration-300">
                        Download CV
                    </a>
                    <div className="flex justify-center space-x-6">
                        <a href="https://www.linkedin.com/in/md-mahfuj-al-enam/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-brand-teal transition-colors"><LinkedInIcon /></a>
                        <a href="mailto:mahfuj.enam71@gmail.com" className="text-slate hover:text-brand-teal transition-colors"><EmailIcon /></a>
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

const EmailIcon = () => (
     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
    </svg>
);

export default Contact;