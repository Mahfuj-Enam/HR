import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light-navy text-center py-6">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="https://www.linkedin.com/in/md-mahfuj-al-enam/" target="_blank" rel="noopener noreferrer" className="text-slate hover:text-brand-teal transition-colors"><LinkedInIcon /></a>
                <a href="mailto:mahfuj.enam71@gmail.com" className="text-slate hover:text-brand-teal transition-colors"><EmailIcon /></a>
            </div>
            <p className="text-slate">&copy; 2025 Md. Mahfuj Al Enam. All Rights Reserved.</p>
        </footer>
    );
};

const LinkedInIcon = () => (
    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
);

const EmailIcon = () => (
     <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
    </svg>
);

export default Footer;