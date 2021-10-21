import React from 'react'
import Layout from "../Shared/Layout";
import {usePage} from "@inertiajs/inertia-react";

const Home = () => {
    const {auth} = usePage().props

    return (
        <>
            <div className="border-b border-white px-4 py-4">
                <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                        <a href="#">
                            <img
                                src="https://avatars.dicebear.com/api/male/r32wgegt4wg.svg"
                                alt="avatar"
                                className="w-10 rounded-full"
                            />
                        </a>
                    </div>

                    <div className="w-full">
                        <div className="flex items-center">
                            <a
                                className="mr-2"
                                href="#"
                            >
                                <h5 className="font-bold">name surname</h5>
                            </a>
                            &middot;
                            <span className="text-sm ml-2">time </span>
                        </div>
                        <a href="#">
                            <h6 className="text-sm text-red-500 hover:text-red-600">@username</h6>
                        </a>
                        <p className="text-sm mt-1">workout Description....</p>

                        <div className="flex justify-between items-center w-full">Go to workout</div>
                    </div>
                </div>
            </div>
        </>
    );
};

Home.layout = page =>
    <Layout children={page}/>

export default Home;
