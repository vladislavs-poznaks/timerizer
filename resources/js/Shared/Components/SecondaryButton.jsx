import React from 'react';

export default ({ loading, className, children, ...props }) => {
    return (
        <button
            disabled={loading}
            className={`py-2 px-4 bg-white hover:bg-gray-100 focus:ring-purple-500 focus:ring-offset-purple-200 text-purple-500 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ${className}`}
            {...props}
        >
            {loading ? 'Loading...' : children}
        </button>
    );
};
