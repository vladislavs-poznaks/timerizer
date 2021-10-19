import React from 'react'
import {usePage} from "@inertiajs/inertia-react";

const Error = ({name}) => {
    const {errors} = usePage().props

    return (
        <>
            {errors[name] && <div className="text-xs text-red-600 mt-1">{errors[name]}</div>}
        </>
    );
};

export default Error;
