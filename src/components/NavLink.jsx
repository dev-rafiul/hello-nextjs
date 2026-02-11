import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathName = usePathname()
    return (
        <div>
            <Link className={`${pathName.startsWith(href) && "bg-sky-600 py-2 px-3"}`} href={href}>{children}</Link>
{/* 
              <nav className='space-x-5'>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/stories">Stories</NavLink>
            <NavLink href="/tutorials">tutorials</NavLink>
            <NavLink href="/login">login</NavLink>
            <NavLink href="/register">register</NavLink>
            
        </nav> */}
        </div>
    );
};

export default NavLink;