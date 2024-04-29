'use client'
import Input from '@/components/Input'
import React from 'react'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import AuthLayout from '@/components/layouts/AuthLayout'

export default function Register() {
    return (
        <AuthLayout title="Register" type="register">
            <FormRegister />
        </AuthLayout>
    )
}

const FormRegister = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form action="">
            <Input
                placeholder={'John Doe'}
                name={'name'}
            />
            <Input
                placeholder={'johndoe@example.com'}
                name={'email'}
            />
            <Input
                placeholder={'********'}
                name={'password'}
                type={showPassword ? 'text' : 'password'}
                icon={true}
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </Input>
        </form>
    )
}