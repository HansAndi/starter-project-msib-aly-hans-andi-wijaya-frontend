import Image from 'next/image';
import React from 'react';

const Input = ({ name, placeholder, icon, type = 'text', setting, onClick, children }) => {
  return (
    <div className={`my-5`}>
      <label
        htmlFor={name}
        className='block text-base font-medium leading-6 text-black capitalize'
      >
        {name}
      </label>
      <div className='relative flex mt-2 rounded-xl shadow-sm border-2 border-solid border-[#202020] overflow-hidden'>
        {type === 'textarea' ? (
          <textarea
            name={name}
            id={name}
            className={`flex-1 block w-full h-20 px-4 py-3 font-medium border-0 text-primary placeholder:text-grey ${setting ? 'bg-[#EDF2F6]' : 'bg-transparent'} md:text-lg sm:text-sm sm:leading-6 placeholder:font-medium placeholder:text-base focus:outline-none`}
            placeholder={placeholder}
          />
        ) : (
          <>
            <input
              type={type}
              name={name}
              id={name}
              className={`block w-full px-4 py-3 font-medium border-0 text-primary placeholder:text-grey ${setting ? 'bg-[#EDF2F6]' : 'bg-transparent'} md:text-lg sm:text-sm placeholder:font-medium placeholder:text-base focus:outline-none`}
              placeholder={placeholder}
            ></input>
            {icon ? (
              <button
                type='button'
                className='text-xl cursor-pointer bg-transparent border-none flex items-center pr-4'
                onClick={onClick}
              >
                {children}
              </button>

            ) : (
              ''
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Input;