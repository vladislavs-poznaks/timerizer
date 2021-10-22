import React from 'react'
import GuestLayout from "../../Shared/GuestLayout";
import Button from "../../Shared/Components/Button";
import {useForm} from "@inertiajs/inertia-react";
import TextInput from "../../Shared/Components/TextInput";

const Login = () => {
    const { data, setData, errors, post, processing } = useForm({
        email: '',
        password: '',
        remember_me: true,
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        post(route('login'), data)
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <TextInput
                label="Email"
                name="email"
                type="email"
                autoComplete="off"
                errors={errors.email}
                value={data.email}
                onChange={e => setData('email', e.target.value)}
            />
            <TextInput
                label="Password"
                name="password"
                type="password"
                autoComplete="off"
                errors={errors.password}
                value={data.password}
                onChange={e => setData('password', e.target.value)}
            />
            <div className="flex items-center justify-between mt-4">
                <label htmlFor="remember_me" className="inline-flex items-center">
                    <input
                        id="remember_me"
                        className="rounded focus:outline-none focus:shadow-outline"
                        checked={data.remember_me}
                        onChange={e => setData('remember_me', e.target.checked)}
                        type="checkbox"
                    />
                    <span className="ml-2 text-sm text-white">Remember me</span>
                </label>
            </div>
            <Button type="submit" loading={processing}>
                Submit
            </Button>
        </form>
    );
};

Login.layout = page => <GuestLayout children={page}/>

export default Login;
