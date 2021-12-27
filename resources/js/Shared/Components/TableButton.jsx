import React from 'react';
import {DotsHorizontalIcon} from "@heroicons/react/outline";

export default ({ loading, color, className, children, ...props }) => {
    return (
        <button
            disabled={loading}
            className={`p-2 transition ease-in duration-200 text-center text-base font-semibold focus:outline-none rounded-full text-${color ? color : 'purple'}-700 ${className} ${loading ? `pointer-events-none select-none bg-${color ? color : 'purple'}-100 animate-pulse` : `bg-${color ? color : 'purple'}-200 hover:bg-${color ? color : 'purple'}-300`}`}
            {...props}
        >
            {loading ? <DotsHorizontalIcon className="animate-pulse w-5 h-5" /> : children}
        </button>
    );
};
