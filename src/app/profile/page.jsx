'use client'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import Image from 'next/image'
import Input from '@/components/Input';
import Button from '@/components/Button';

export default function Profile() {
    const links = [
        {
            id: 1,
            link: '#',
            text: 'Profile',
        },
        {
            id: 2,
            link: '#',
            text: 'Notifications',
        },
        {
            id: 3,
            link: '#',
            text: 'Security',
        },
    ];

    return (
        <>
            <div className="flex min-h-screen bg-surface">
                <Sidebar />
                <div className='w-full lg:ml-60 lg:pl-4 lg:flex lg:flex-col mt-5 mx-2'>
                    <div className="p-5">
                        <Navbar />
                        <div className="bg-white rounded-lg shadow-md my-4">
                            <div className="items-center px-8 py-4">
                                <nav className='lg:flex text-black'>
                                    <ul className='relative flex items-center justify-center cursor-pointer lg:justify-between sm:flex-row'>
                                        {links.map((link) => (
                                            <li
                                                className='pr-3 py-3 group'
                                                key={link.id}
                                            >
                                                <a
                                                    className='text-base font-bold leading-normal'
                                                    href={link.link}
                                                >
                                                    {link.text}
                                                </a>
                                                <div className='group-hover:bg-black h-[1px] bg-transparent group-hover:animate-bounce transition-all'></div>
                                                <div className="text-gray-50 ml-3"></div>
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                                <div className="py-3">
                                    <div className="">
                                        <ul>
                                            <li className="text-gray-400 mb-3">Manage your profile</li>
                                        </ul>
                                        <Image
                                            alt='profile'
                                            className='bg-cover rounded-xl mb-3'
                                            src='/assets/profile.jpg'
                                            width={100}
                                            height={100}
                                        />
                                        <hr className='border-gray-400' />
                                    </div>
                                    <div className='lg:grid lg:grid-cols-2 gap-x-3'>
                                        <Input
                                            placeholder={'John Doe'}
                                            name={'full name'}
                                            setting={true}
                                        />
                                        <Input
                                            placeholder={'johndoe@example.com'}
                                            name={'email'}
                                            setting={true}
                                        />
                                        <Input
                                            placeholder={'+123 456 7890'}
                                            name={'phone number'}
                                            setting={true}
                                        />
                                        <Input
                                            placeholder={'1234 Main St, New York, NY 10030, USA'}
                                            name={'address'}
                                            setting={true}
                                        />
                                    </div>
                                    <div className='w-full'>
                                        <Input
                                            placeholder={'Tell us about yourself'}
                                            name={'bio'}
                                            type={'textarea'}
                                            setting={true}
                                        />
                                    </div>
                                    <div className='flex justify-end pt-2'>
                                        <Button className={"max-w-fit px-10 text-white bg-secondary"}>Save</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
