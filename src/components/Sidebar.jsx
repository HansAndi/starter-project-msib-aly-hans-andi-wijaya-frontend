import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Sidebar = () => {
    const pathname = usePathname()

    return (
        <aside className="">
            <div className="sidebar flex flex-col justify-between py-5 fixed top-0 bottom-0 lg:left-0 left-[-245px] p-2 w-[245px] overflow-y-auto text-center bg-white shadow h-screen left">
                <div className="text-xl">
                    <div className="p-2.5 mt-1 flex items-center rounded-md justify-center">
                        <h1 className="text-[15px] text-xl text-primary font-bold">HAW</h1>
                        <i className="bi bi-x ml-20 cursor-pointer lg:hidden"></i>
                    </div>
                    <hr className="my-2 text-gray-600" />

                    <div>
                        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer">
                            <svg className='w-5 fill-primary' dataSlot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" />
                            </svg>
                            <input className="text-[15px] ml-4 w-full bg-transparent placeholder-primary focus:outline-none" placeholder="Search" />
                        </div>

                        <div className="group p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-secondary">
                            <svg className='w-5 fill-primary group-hover:stroke-surface group-active:stroke-surface' dataSlot="icon" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path clipRule="evenodd" fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" />
                            </svg>
                            <span className="text-[15px] ml-4 text-primary group-hover:text-surface group-active:text-surface">Home</span>
                        </div>
                        <div className={`${pathname === '/profile' ? 'bg-secondary' : ''} group p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-secondary active:bg-secondary`}>
                            <svg className={`${pathname === '/profile' ? 'stroke-surface' : ''} w-5 stroke-primary group-hover:stroke-surface group-active:stroke-surface`} dataSlot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span className={`${pathname === '/profile' ? 'text-surface' : ''} text-[15px] ml-4 text-primary group-hover:text-surface group-active:text-surface`}>Settings</span>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Link href='/login'>
                        <div className="group p-2.5 mb-4 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-secondary">
                            <svg className='w-5 h-5 stroke-primary group-hover:stroke-surface group-active:stroke-surface' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                            </svg>

                            <span className="text-[15px] ml-4 text-primary group-hover:text-surface group-active:text-surface">Logout</span>
                        </div>
                    </Link>
                    
                    <div className="py-6">
                        <span className='text-sm font-semibold'>©2024 - HAW</span>
                        <br />
                        <span className='text-sm'>All rights reserved</span>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar