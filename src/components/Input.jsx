import Image from 'next/image';
import React from 'react';

const Input = ({ name, placeholder, icon, type = 'text', setting }) => {
  return (
    <div className={`my-5`}>
      <label
        htmlFor={name}
        className='block text-base font-medium leading-6 text-black capitalize'
      >
        {name}
      </label>
      <div className='mt-2 '>
        <div className='relative flex rounded-xl shadow-sm border-2 border-solid border-[#202020] overflow-hidden'>
          {type === 'textarea' ? (
            <textarea
              name={name}
              id={name}
              className={`flex-1 block w-full h-20 px-5 py-3 font-medium border-0 text-primary placeholder:text-grey ${setting ? 'bg-[#EDF2F6]' : ''} sm:text-sm sm:leading-6 placeholder:font-medium placeholder:text-sm focus:outline-none`}
              placeholder={placeholder}
            />
          ) : (
            <>
              <input
                type={type}
                name={name}
                id={name}
                className={`flex-1 block w-full px-5 py-3 font-medium border-0 text-primary placeholder:text-grey ${setting ? 'bg-[#EDF2F6]' : ''} sm:text-sm sm:leading-6 placeholder:font-medium placeholder:text-sm focus:outline-none`}
                placeholder={placeholder}
              />
              {icon ? (
                  <Image
                    src={icon}
                    alt='eye icon'
                    width={20}
                    height={20}
                    className='absolute top-0 bottom-0 my-auto cursor-pointer right-5 z-1'
                  />
              ) : (
                ''
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Input;