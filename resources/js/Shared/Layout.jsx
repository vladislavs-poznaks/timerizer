import React from 'react'
import {
    QueryClient,
    QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools';

import Header from "./Header";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({children}) => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
            <main className="bg-gray-100 dark:bg-gray-800 min-h-screen overflow-hidden relative text-gray-800">
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
                <ToastContainer />
            </main>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
}

export default Layout;
