import React from 'react'

const Label = ({id, children}) => {
    return (
        <label className="form-label inline-flex text-gray-700 dark:text-gray-100" htmlFor={id}>
            {children}
        </label>
    );
};

export default Label;
