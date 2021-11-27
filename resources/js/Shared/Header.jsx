import React from 'react'
import Logo from "./Logo";
import Nav from "./Nav";

const Header = () => {
        return (
            <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center">
                <div className="flex justify-between items-center px-8 py-4">
                    <div className="flex space-x-4 items-center">
                        <Logo/>
                        <Nav />
                    </div>
                </div>
            </header>
        );
    }
;

export default Header;
