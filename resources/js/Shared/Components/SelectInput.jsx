import React from 'react';
import Label from "./Label";

export default ({label, name, className, children, errors = [], ...props}) => {
    return (
        <div className={`space-y-1 ${className}`}>
            {label && (
                <Label id={name}>
                    {label}
                </Label>
            )}
            <select
                id={name}
                name={name}
                {...props}
                className={`rounded-lg flex-1 appearance-none border w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent ${errors.length ? 'ring-2 ring-red-600' : 'border-gray-300'}`}
            >
                {children}
            </select>
            {errors && <p className="text-sm text-red-500 mt-1">{errors}</p>}
        </div>
    );
}
