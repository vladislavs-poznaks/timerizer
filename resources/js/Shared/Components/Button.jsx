import React from 'react'

const Button = ({onClick, children, type = 'button'}) => {
    return (
        <button
            onClick={onClick}
            className="inline-flex items-center bg-red-600 text-white font-semibold px-4 py-2 hover:bg-red-700 rounded-md transition ease-in-out duration-150"
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
