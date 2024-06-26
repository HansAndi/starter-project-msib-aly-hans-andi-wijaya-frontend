'use client'
import Input from '@/components/Input'
import React from 'react'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import AuthLayout from '@/components/layouts/AuthLayout'

export default function Login() {
    return (
        <AuthLayout title="Login" type="login">
            <FormLogin />
        </AuthLayout>
    )
}

const FormLogin = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <form action="">
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
