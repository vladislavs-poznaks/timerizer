import React, {useState} from 'react'
import Layout from "../../Shared/Layout";
import {Inertia} from "@inertiajs/inertia";
import Label from "../../Shared/Components/Label";
import Input from "../../Shared/Components/Input";
import Error from "../../Shared/Components/Error";
import Button from "../../Shared/Components/Button";
import GuestLayout from "../../Shared/GuestLayout";

const Register = () => {
    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
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

        Inertia.post(route('register'), values)
    }

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <Label id="name">Name</Label>
                <Input id="name" value={values.name} onChange={handleChange}/>
                <Error name="name"/>
            </div>
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
            <div>
                <Label id="email">Confirm password</Label>
                <Input id="password_confirmation" value={values.password_confirmation} onChange={handleChange} type="password"/>
                <Error name="password_confirmation"/>
            </div>
            <Button onClick={handleSubmit}>
                Register
            </Button>
        </form>
    );
};

Register.layout = page => <GuestLayout children={page}/>

export default Register;
