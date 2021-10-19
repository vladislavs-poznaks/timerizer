import React from 'react'
import {Link} from "@inertiajs/inertia-react";

const Layout = ({children}) => {
    return (
        <>
            <header className="container mx-auto px-2 md:px-4 py-6">
                <nav className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Link href="/">Home</Link>
                        <Link href={route('users')}>Users</Link>
                        <Link href={route('settings')}>Settings</Link>
                    </div>
                    <div>
                        <Link href="/login">Login</Link>
                    </div>
                </nav>
            </header>
            <main className="container mx-auto flex items-center justify-between px-2 md:px-4">
                {children}
            </main>
        </>
    );
};

export default Layout;
