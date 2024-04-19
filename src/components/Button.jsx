import Image from 'next/image';
import React from 'react';

const Button = ({ icon, name, className, children, onClick }) => {
    return (
        <button
            type='submit'
            onClick={onClick}
            className={`relative ${icon ? 'flex justify-center' : ''} text-sm font-semibold rounded-xl w-full py-4 ${className}`}
        >
            {icon ? (
                <span className='mr-3'>
                    <Image
                        src={icon}
                        alt={`${name} icon`}
                        width={20}
                        height={20}
                    />
                </span>
            ) : (
                ''
            )}
            {children}
        </button>
    );
};

export default Button;