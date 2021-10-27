import React from 'react';

export default ({ loading, className, children, ...props }) => {
    return (
        <button
            disabled={loading}
            className={`py-2 px-4 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full ${loading ? 'pointer-events-none select-none bg-purple-500 animate-pulse' : 'bg-purple-600 hover:bg-purple-700'}`}
            {...props}
        >
            {loading ? 'Loading...' : children}
        </button>
    );
};
