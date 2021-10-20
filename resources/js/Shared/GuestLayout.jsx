import React from 'react'
import {Link} from "@inertiajs/inertia-react";
import Logo from "./Logo";

const GuestLayout = ({children}) => {
    return (
        <div className="min-h-screen mx-auto flex flex-col justify-center items-center pt-6 sm:pt-0">
            <div>
                <Logo/>
            </div>
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
};

export default GuestLayout;
