import React from 'react'

const Label = ({id, children}) => {
    return (
        <label htmlFor={id}>
            {children}
        </label>
    );
};

export default Label;
