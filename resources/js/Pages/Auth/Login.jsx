import React, {useState} from 'react'
import {Inertia} from "@inertiajs/inertia";

import GuestLayout from "../../Shared/GuestLayout";
import Input from "../../Shared/Components/Input";
import Error from "../../Shared/Components/Error";
import Label from "../../Shared/Components/Label";
import Button from "../../Shared/Components/Button";

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: '',
        remember_me: true,
    })

    const handleChange = (e) => {
        console.log(e.target.type);

        const key = e.target.id
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value

        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }


    const handleSubmit = (e) => {
        e.preventDefault()

        Inertia.post(route('login'), values)
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <Label id="email">Email</Label>
                <Input id="email" value={values.email} onChange={handleChange} type="email"/>
                <Error name="email"/>
            </div>
            <div>
                <Label id="email">Password</Label>
                <Input id="password" value={values.password} onChange={handleChange} type="password"/>
                <Error name="password"/>
            </div>
            <div className="flex items-center justify-between mt-4">
                <label htmlFor="remember_me" className="inline-flex items-center">
                    <input
                        id="remember_me"
                        className="rounded focus:outline-none focus:shadow-outline"
                        checked={values.remember_me}
                        onChange={handleChange}
                        type="checkbox"
                    />
                    <span className="ml-2 text-sm text-white">Remember me</span>
                </label>
            </div>
            <Button type="submit">
                Submit
            </Button>
        </form>
    );
};

Login.layout = page => <GuestLayout children={page}/>

export default Login;
