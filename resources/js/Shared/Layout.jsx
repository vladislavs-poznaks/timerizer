import React from 'react'

import Header from "./Header";

const Layout = ({children}) => {
    return (
        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative text-gray-800">
            <Header/>
            <div className="mx-auto container flex items-start justify-between">
                <div className="flex flex-col w-full px-0 md:p-4 md:space-y-4">
                    <div className="overflow-auto h-screen pt-2 px-2 md:pt-0 md:px-0">
                        <div className="flex flex-col flex-wrap sm:flex-row space-y-4 ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}

export default Layout;
