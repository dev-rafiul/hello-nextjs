"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';

const Header = () => {
    const pathName = usePathname();
    console.log(pathName)
    if(pathName.startsWith("/dashboard")) return <></>
    return (
        <header className='px-4 py-3 border-b-2 border-gray-500 flex justify-between items-center flex-wrap'>
            {/* <Link href="/"> */}
            <Link href={'/'} className='text-lg font-semibold'>Dev-Story</Link>
            {/* </Link> */}


        
        <nav className='space-x-5 flex'>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/stories">Stories</NavLink>
            <NavLink href="/tutorials">tutorials</NavLink>
            <NavLink href="/login">login</NavLink>
            <NavLink href="/register">register</NavLink>
            
        </nav>

        </header>
    );
};

export default Header;