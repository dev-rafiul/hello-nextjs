"use client"
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {


    const router = useRouter()
    const handleBtn = () => {
        const pass = prompt("Enter Your Password");
        if(pass === "1234"){
            router.push('/dashboard')
        }
    };

    return (
        <div className='text-center space-y-5 bg-linear-60 to-sky-100 from-sky-300 text-black p-10 rounded-2xl'>
            <h2 className='text-4xl font-bold'>
            Welcome to Dev-Story
            </h2>
            <button onClick={handleBtn} className='btn px-4 py-2 text-white rounded cursor-pointer hover:bg-black bg-sky-400'>Share-Story</button>
        </div>
    );
};

export default Banner;