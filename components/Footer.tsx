
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-light-navy text-center py-6">
            <p className="text-slate">&copy; {new Date().getFullYear()} Md. Mahfuj Al Enam. All Rights Reserved.</p>
        </footer>
    );
};

export default Footer;
