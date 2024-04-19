import Image from 'next/image';

const Navbar = () => {
    return (
        <div className='inline-flex items-center justify-between w-full h-24 px-8 py-4 bg-white border border-borderGrey rounded-lg'>
            <span className='font-bold text-xl'>Settings</span>
            <div className='lg:relative flex items-center justify-start gap-3 p-3 rounded-lg h-14'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>

                <div className="flex items-center pr-2 justify-between rounded-2xl bg-[#DEE1E6] cursor-pointer">
                    <Image
                        alt='profile'
                        className='w-8 h-8 bg-cover rounded-full mr-3'
                        src='/assets/profile.jpg'
                        width={36}
                        height={36}
                    />
                    <p className='text-base font-medium leading-normal text-black'>Hans Andi W</p>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default Navbar;