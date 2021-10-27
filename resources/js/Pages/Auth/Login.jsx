import React from 'react'
import GuestLayout from "../../Shared/GuestLayout";
import PrimaryButton from "../../Shared/Components/PrimaryButton";
import {Head, Link, useForm} from "@inertiajs/inertia-react";
import TextInput from "../../Shared/Components/TextInput";
import Logo from "../../Shared/Logo";

const Login = () => {
    const {data, setData, errors, post, processing} = useForm({
        email: '',
        password: '',
        remember_me: true,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('login'), data)
    }

    return (
        <>
            <Head title="Login"/>
            <div className="flex flex-col w-full space-y-8 max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                <div className="self-center">
                    <Logo/>
                </div>
                <div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <TextInput
                                name="email"
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
                                name="password"
                                type="password"
                                autoComplete="off"
                                placeholder="Your password"
                                errors={errors.password}
                                value={data.password}
                                onChange={e => setData('password', e.target.value)}
                            />
                        </div>
                        <label className="flex items-center space-x-3">
                            <input
                                id="remember_me"
                                type="checkbox"
                                className="form-tick appearance-none bg-white bg-check h-6 w-6 border border-gray-300 rounded-md checked:bg-purple-500 checked:border-transparent focus:outline-none"
                                checked={data.remember_me}
                                onChange={e => setData('remember_me', e.target.checked)}
                            />
                            <span
                                className="inline-flex text-xs text-gray-500 sm:text-sm dark:text-gray-100">Remember me</span>
                        </label>
                        <div className="flex items-center">
                            <div className="flex ml-auto">
                                <a href="#"
                                   className="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">
                                    Forgot Your Password?
                                </a>
                            </div>
                        </div>
                        <div className="flex w-full">
                            <PrimaryButton type="submit">
                                Login
                            </PrimaryButton>
                        </div>
                    </form>
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"/>
                        </div>
                        <div className="relative flex justify-center text-sm leading-5">
                            <span className="px-2 text-gray-500 bg-white">
                                Or login using
                            </span>
                        </div>
                    </div>
                    <div className="flex gap-4 item-center">
                        <PrimaryButton type="button">
                            <div className="flex space-x-3 items-center justify-center">
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"
                                    >
                                    </path>
                                </svg>
                                <span>Facebook</span>
                            </div>
                        </PrimaryButton>
                        <PrimaryButton type="button">
                            <div className="flex space-x-3 items-center justify-center">
                                <svg width="20" height="20" fill="currentColor" className="mr-2" viewBox="0 0 1792 1792"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                                    </path>
                                </svg>
                                <span>Google</span>
                            </div>
                        </PrimaryButton>
                    </div>
                </div>
                <div className="flex items-center justify-center mt-6">
                    <Link
                        href={route('register')}
                        className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white"
                    >
                        <span className="ml-2">
                            You don&#x27;t have an account?
                        </span>
                    </Link>
                </div>
            </div>
        </>
    );
};

Login.layout = page =>
    <GuestLayout children={page}/>

export default Login;
