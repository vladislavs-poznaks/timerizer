import React from 'react';
import {DotsHorizontalIcon} from "@heroicons/react/outline";

export default ({ loading, className, children, ...props }) => {
    return (
        <button
            disabled={loading}
            className={`p-2 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none rounded-full text-purple-700 ${className} ${loading ? 'pointer-events-none select-none bg-purple-100 animate-pulse' : 'bg-purple-200 hover:bg-purple-300'}`}
            {...props}
        >
            {loading ? <DotsHorizontalIcon className="animate-pulse w-5 h-5" /> : children}
        </button>
    );
};
