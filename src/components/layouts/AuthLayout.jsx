import Button from '@/components/Button'
import Link from 'next/link'
import React from 'react'

const AuthLayout = ({ children, title, type }) => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center w-full my-6 lg:px-20 lg:my-0 bg-surface'>
            <div className="w-full max-w-sm">
                <div className='inline-flex items-center justify-between w-full pt-4 pb-6'>
                    <div className='flex-col justify-center items-center gap-3.5 text-center w-full mb-5'>
                        <div className='text-xl font-bold leading-normal text-black lg:text-2xl'>{title}</div>
                    </div>
                </div>

                <Button icon="/assets/google.png" className={'border-2 border-solid border-[#202020]'}>Continue with Google</Button>

                <div className="flex items-center mt-5 gap-5">
                    <hr className='flex-1 border-gray-400' />
                    <span className='text-center'>Or</span>
                    <hr className='flex-1 border-gray-400' />
                </div>

                <div className=''>
                    <form action=''>
                        {children}

                        <Checkbox type={type} />

                        <Button className={"text-white bg-[#202020]"}>{type === "login" ? "Log In" : "Create Account"}</Button>
                    </form>

                    <Footer type={type} />
                </div>
            </div>
        </div>
    )
}

const Checkbox = ({ type }) => {
    if (type === "login") {
        return (
            <div className='flex items-center justify-between my-5'>
                <div className='flex items-center'>
                    <input type='checkbox' className='mr-2 size-4 accent-[#202020]' />
                    <label htmlFor='rememberMe' className='text-sm font-normal text-primary'>Remember me</label>
                </div>
                <span className='font-semibold text-primary'><a href='#' className=''>Forgot password?</a></span>
            </div>
        )
    } else {
        return (
            <div className='flex items-center justify-between my-5'>
                <div className='flex items-center'>
                    <input type='checkbox' className='mr-2 size-4 accent-[#202020]' />
                    <label htmlFor='termsConditions' className='text-sm font-normal text-primary'>I agree to Terms and Conditions</label>
                </div>
            </div>
        )
    }
}

const Footer = ({ type }) => {
    if (type === "login") {
        return (
            <p className='text-sm font-normal text-center text-primary my-5'>
                {"Don't have an account? "}
                <Link href='/register'>
                    <span className='font-bold underline cursor-pointer'>Create one</span>
                </Link>
            </p>
        )
    } else {
        return (
            <p className='text-sm font-normal text-center text-primary my-5'>
                {"Already have an account? "}
                <Link href='/login'>
                    <span className='font-bold underline cursor-pointer'>Login Now</span>
                </Link>
            </p>
        )
    }
}

export default AuthLayout