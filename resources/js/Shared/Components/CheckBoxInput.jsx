import React from 'react';

export default ({label, name, className, errors = [], ...props}) => {
    return (
        <>
            <label className="flex items-center space-x-3">
                <input
                    id={name}
                    type="checkbox"
                    className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
                    {...props}
                />
                <span className="inline-flex text-gray-700 dark:text-gray-100">{label}</span>
            </label>
            {errors && <p className="text-sm text-red-500 mt-1">{errors}</p>}
        </>
);
}
