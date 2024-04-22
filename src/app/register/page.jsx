'use client'
import Input from '@/components/Input'
import Button from '@/components/Button'
import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';

export default function Register() {
    const[showPassword, setShowPassword] = useState(false);

    return (
        <div className='min-h-screen flex flex-col items-center justify-center w-full my-6 lg:px-20 lg:my-0 bg-surface'>
            <div className="w-full max-w-sm">
                <div className='inline-flex items-center justify-between w-full pt-4 pb-6'>
                    <div className='flex-col justify-center items-center gap-3.5 text-center w-full mb-5'>
                        <div className='text-xl font-bold leading-normal text-black lg:text-2xl'>Register</div>
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

                        <div className='flex items-center justify-between my-5'>
                            <div className='flex items-center'>
                                <input type='checkbox' className='mr-2 size-4 accent-[#202020]'/>
                                <label htmlFor='rememberMe' className='text-sm font-normal text-primary'>Remember me</label>
                            </div>
                            <span className='font-bold text-primary'><a href='#' className=''>Forgot password?</a></span>
                        </div>

                        <Button className={"text-white bg-[#202020]"}>Login Now</Button>
                    </form>

                    <div className="flex justify-between">

                    </div>

                    <p className='text-sm font-normal text-center text-primary my-5'>
                        Already have an account?{' '}
                        <Link href='/login'>
                            <span
                                className='font-bold underline cursor-pointer'
                            >
                                Login Now
                            </span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

