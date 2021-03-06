import React from 'react'

const Badge = ({color, children, className}) => {
    return (
        <span
            className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-${color ? color : 'purple'}-100 text-${color ? color : 'purple'}-800 ${className && className}`}
        >
            {children}
        </span>
    );
};

export default Badge;
