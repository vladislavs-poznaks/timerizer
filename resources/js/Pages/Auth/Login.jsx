import React, {useState} from 'react'
import {Inertia} from "@inertiajs/inertia";

import AuthLayout from "../../Shared/AuthLayout";
import Input from "../../Shared/Components/Input";
import Error from "../../Shared/Components/Error";
import Label from "../../Shared/Components/Label";
import Button from "../../Shared/Components/Button";

const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const key = e.target.id
        const value = e.target.value

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
                    <Input id="email" value={values.email} onChange={handleChange} type="email" autocomplete="off"/>
                    <Error name="email"/>
                </div>
                <div>
                    <Label id="email">Password</Label>
                    <Input id="password" value={values.password} onChange={handleChange} type="password" autocomplete="off"/>
                    <Error name="password"/>
                </div>
                <Button onClick={handleSubmit}>
                    Submit
                </Button>
            </form>
    );
};

Login.layout = page => <AuthLayout children={page}/>

export default Login;
