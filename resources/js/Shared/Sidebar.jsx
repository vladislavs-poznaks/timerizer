import React from 'react'
import {Link, usePage} from "@inertiajs/inertia-react";

const Sidebar = () => {
    const {auth} = usePage().props

    return (
        <div className="w-1/7 py-6 space-y-4 font-bold text-lg">
            <Link className="block hover:text-red-600" href={route('home')}>Home</Link>
            <Link className="block hover:text-red-600" href={route('home')}>Explore</Link>
            {auth.check &&
            <>
                <Link className="block hover:text-red-600" href={route('workouts.index')}>Workouts</Link>
                <Link className="block hover:text-red-600" href={route('home')}>Profile</Link>
            </>
            }
            {auth.check
            ? <Link className="block hover:text-red-600 font-bold text-lg" href={route('logout')} method='post'
                    as="button">Logout</Link>
            : <Link className="block hover:text-red-600" href={route('login')}>Login</Link>
            }
        </div>
    );
};

export default Sidebar;
