import React from 'react'
import Logo from "./Logo";
import Sidebar from "./Sidebar";
import Friends from "./Friends";

const Layout = ({children}) => {
    return (
        <>
            <section className="px-8 py-4 mb-4">
                <header className="container mx-auto flex justify-between items-center">
                    <Logo />
                    <div>avatar</div>
                </header>
            </section>
            <section className="px-8">
                <main className="container mx-auto">
                    <div className="flex justify-between">
                        <Sidebar />
                        <div className="flex-1 max-w-xl py-6">
                            {children}
                        </div>
                        <Friends />
                    </div>
                </main>
            </section>
            <section className="px-8 py-4 mb-4">
                <footer className="container mx-auto flex justify-around">
                    Koopy and Kiwi Productions.
                </footer>
            </section>
        </>
    );
}

export default Layout;
