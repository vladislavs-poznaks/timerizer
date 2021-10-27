import React from 'react';

export default ({label, name, className, errors = [], ...props}) => {
    return (
        <div className={`space-y-1 ${className}`}>
            {label && (
                <label className="form-label inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100" htmlFor={name}>
                    {label}
                </label>
            )}
            <textarea
                id={name}
                name={name}
                {...props}
                className={`h-3/4 rounded-lg flex-1 appearance-none border w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.length ? 'ring-2 ring-red-600' : 'border-gray-300'}`}
            />
        </div>
    );
}
