import React from 'react'

const Input = ({id, value, onChange, type = 'text', autocomplete = null}) => {
    return (
        <input
            id={id}
            className="block mt-1 w-full border rounded-lg py-3 px-3 bg-gray-900 border-gray-700 placeholder-white-500 text-white focus:border-red-600"
            value={value}
            onChange={onChange}
            type={type}
            autoComplete={autocomplete ? autocomplete : 'off'}
        />
    );
};

export default Input;
