import React from 'react';

export default ({ label, name, className, errors = [], ...props }) => {
    return (
        <div className={`space-y-1 ${className}`}>
            {label && (
                <label className="form-label" htmlFor={name}>
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                {...props}
                className="block w-full border rounded-lg py-3 px-3 bg-gray-900 border-gray-700 placeholder-white-500 text-white focus:border-red-500 focus:outline-red-500"
            />
            {errors && <div className="text-xs text-red-600">{errors}</div>}
        </div>
    );
};
