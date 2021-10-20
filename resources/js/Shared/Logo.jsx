import React from 'react'
import {Link} from "@inertiajs/inertia-react";

const Logo = () => {
    return (
        <Link href={route('home')}>-- LOGO --</Link>
    );
};

export default Logo;
