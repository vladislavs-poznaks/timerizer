import React from 'react'

const GuestLayout = ({children}) => {
    return (
        <main className="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
            <div className="flex flex-col md:flex-row justify-center items-center">
                {children}
            </div>
        </main>
    );
}

export default GuestLayout;
