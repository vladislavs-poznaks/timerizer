import React from 'react'
import {Link, usePage} from "@inertiajs/inertia-react";
import Logo from "./Logo";

const Sidebar = () => {
    const {auth} = usePage().props

    return (
        <div className="h-screen hidden lg:block my-4 ml-4 shadow-lg relative w-80">
            <div className="bg-white h-full rounded-2xl dark:bg-gray-700">
                <div className="flex justify-center py-4">
                    <Logo/>
                </div>
                <nav className="">
                    <div>
                        <Link
                            href={route('home')}
                            className={`w-full font-bold flex items-center p-3 my-2 transition-colors duration-200 justify-start hover:text-purple-500 ${route().current('home') ? 'text-purple-500 justify-start bg-gradient-to-r from-white to-purple-100 border-r-4 border-purple-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-purple-500' : 'text-gray-700 dark:text-gray-200'}`}
                        >
                            <span className="mx-4 text-lg font-bold">
                                    Home
                            </span>
                        </Link>
                        <Link
                            href={route('workouts.index')}
                            className={`w-full font-bold flex items-center p-3 my-2 transition-colors duration-200 justify-start hover:text-purple-500 ${route().current('workouts.*') ? 'text-purple-500 justify-start bg-gradient-to-r from-white to-purple-100 border-r-4 border-purple-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-purple-500' : 'text-gray-700 dark:text-gray-200'}`}
                        >
                            <span className="mx-4 text-lg font-bold">
                                    Workouts
                            </span>
                        </Link>
                        {auth.check
                            ?
                            <Link
                                href={route('logout')}
                                as="button"
                                method="post"
                                className={`w-full font-bold flex items-center p-3 my-2 transition-colors duration-200 justify-start hover:text-purple-500 ${route().current('logout') ? 'text-purple-500 justify-start bg-gradient-to-r from-white to-purple-100 border-r-4 border-purple-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-purple-500' : 'text-gray-700 dark:text-gray-200'}`}
                            >
                                <span className="mx-4 text-lg font-bold">Logout</span>
                            </Link>
                            :
                            <Link
                                href={route('login')}
                                className={`w-full font-bold flex items-center p-3 my-2 transition-colors duration-200 justify-start hover:text-purple-500 ${route().current('login') ? 'text-purple-500 justify-start bg-gradient-to-r from-white to-purple-100 border-r-4 border-purple-500 dark:from-gray-700 dark:to-gray-800 border-r-4 border-purple-500' : 'text-gray-700 dark:text-gray-200'}`}
                            >
                                <span className="mx-4 text-lg font-bold">Login</span>
                            </Link>
                        }
                    </div>
                </nav>
            </div>
        </div>
    );
}
;

export default Sidebar;
