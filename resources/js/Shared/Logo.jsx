import React from 'react'
import {Link, usePage} from "@inertiajs/inertia-react";

const Logo = () => {
    const {assets} = usePage().props

    return (
        <Link href={route('home')}>
            <img src={assets.logo} alt="logo" className="object-scale-down h-12"/>
        </Link>
    );
}

export default Logo;
