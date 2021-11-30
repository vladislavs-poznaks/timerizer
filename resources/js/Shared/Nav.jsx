import React from 'react'
import {Link, usePage} from "@inertiajs/inertia-react";

const Nav = () => {
    const {auth} = usePage().props

    return (
        <nav className="flex space-x-2">
            <Link
                href={route('home')}
                className={`w-full font-bold flex items-center px-4 py-2 transition-colors duration-200 hover:text-purple-500 ${route().current('home') ? 'text-purple-500 border-b-4 border-purple-500' : 'text-gray-700 dark:text-gray-200 mb-1'}`}
            >
                Home
            </Link>
            <Link
                href={route('workouts.index')}
                className={`w-full font-bold flex items-center px-4 py-2 transition-colors duration-200 hover:text-purple-500 ${route().current('workouts.*') ? 'text-purple-500 border-b-4 border-purple-500' : 'text-gray-700 dark:text-gray-200 mb-1'}`}
            >
                Workouts
            </Link>
            {auth.check
                ?
                <Link
                    href={route('logout')}
                    as="button"
                    method="post"
                    className={`w-full font-bold flex items-center px-4 py-2 transition-colors duration-200 hover:text-purple-500 ${route().current('logout') ? 'text-purple-500 border-b-4 border-purple-500' : 'text-gray-700 dark:text-gray-200 mb-1'}`}
                >
                    Logout
                </Link>
                :
                <Link
                    href={route('login')}
                    className={`w-full font-bold flex items-center px-4 py-2 transition-colors duration-200 hover:text-purple-500 ${route().current('login') ? 'text-purple-500 border-b-4 border-purple-500' : 'text-gray-700 dark:text-gray-200 mb-1'}`}
                >
                    Login
                </Link>
            }
        </nav>
    );
}

export default Nav;
