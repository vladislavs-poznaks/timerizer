import React, {useState} from 'react'
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import GuestLayout from "../../Shared/GuestLayout";
import {Head, Link, useForm} from "@inertiajs/inertia-react";
import Logo from "../../Shared/Logo";
import TextInput from "../../Shared/Components/TextInput";

const Register = () => {
    const {data, setData, errors, post, processing} = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('register'), data)
    }

    return (
        <>
            <Head title="Login"/>
            <div className="flex flex-col w-full space-y-6 max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center">
                    <Logo/>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <div className="flex flex-col">
                                <TextInput
                                    label="Name"
                                    type="name"
                                    autoComplete="off"
                                    placeholder="Your name"
                                    errors={errors.name}
                                    value={data.name}
                                    onChange={e => setData('name', e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <TextInput
                                    label="Email"
                                    type="email"
                                    autoComplete="off"
                                    placeholder="Your email"
                                    errors={errors.email}
                                    value={data.email}
                                    onChange={e => setData('email', e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <TextInput
                                    label="Password"
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Your password"
                                    errors={errors.password}
                                    value={data.password}
                                    onChange={e => setData('password', e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col">
                                <TextInput
                                    label="Repeat password"
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Confirm password"
                                    errors={errors.password_confirmation}
                                    value={data.password_confirmation}
                                    onChange={e => setData('password_confirmation', e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex w-full mt-6">
                            <PrimaryButton type="submit">
                                Register
                            </PrimaryButton>
                        </div>
                    </form>
                    {/*<div className="relative my-6">*/}
                    {/*    <div className="absolute inset-0 flex items-center">*/}
                    {/*        <div className="w-full border-t border-gray-300"/>*/}
                    {/*    </div>*/}
                    {/*    <div className="relative flex justify-center text-sm leading-5">*/}
                    {/*        <span className="px-2 text-gray-500 bg-white">*/}
                    {/*            Or sing up using*/}
                    {/*        </span>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="flex gap-4 item-center">*/}
                    {/*    <Button type="button">*/}
                    {/*        <div className="flex space-x-3 items-center justify-center">*/}
                    {/*            <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792"*/}
                    {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                <path*/}
                    {/*                    d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"*/}
                    {/*                >*/}
                    {/*                </path>*/}
                    {/*            </svg>*/}
                    {/*            <span>Facebook</span>*/}
                    {/*        </div>*/}
                    {/*    </Button>*/}
                    {/*    <Button type="button">*/}
                    {/*        <div className="flex space-x-3 items-center justify-center">*/}
                    {/*            <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792"*/}
                    {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                <path*/}
                    {/*                    d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">*/}
                    {/*                </path>*/}
                    {/*            </svg>*/}
                    {/*            <span>Google</span>*/}
                    {/*        </div>*/}
                    {/*    </Button>*/}
                    {/*</div>*/}
                </div>
                <div className="flex items-center justify-center mt-6">
                    <Link
                        href={route('login')}
                        className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
                    >
                        <span className="ml-2">
                            Already registered?
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
};

Register.layout = page => <GuestLayout children={page}/>

export default Register;
