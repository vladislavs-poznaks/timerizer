import React from 'react'

const GuestLayout = ({children}) => {
    return (
        <main className="bg-gray-100 dark:bg-gray-800 flex h-screen overflow-hidden relative items-center">
            <div className="m-auto">
                {children}
            </div>
        </main>
    );
}

export default GuestLayout;
