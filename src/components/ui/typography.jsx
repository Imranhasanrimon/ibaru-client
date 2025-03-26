// components/ui/typography.js

import React from 'react';

const Typography = ({ variant, className, children }) => {
    const variants = {
        h1: 'text-3xl sm:text-4xl lg:text-5xl font-bold',
        h2: 'text-3xl sm:text-4xl lg:text-5xl font-semibold',
        h3: 'text-2xl sm:text-3xl lg:text-4xl font-medium',
        p: 'text-base sm:text-lg leading-relaxed',
        // Add more variants as needed
    };

    return (
        <div className={`${variants[variant] || variants['p']} ${className}`}>
            {children}
        </div>
    );
};

export default Typography;
