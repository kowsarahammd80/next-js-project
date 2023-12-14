import Link from 'next/link';
import React from 'react';
import NavLink from './NavLink';

const NavLinks = [
    {
        path: '/',
        title: "Home",
    },
    {
        path:'/about',
        title: "About",
    },
    {
        path: '/blogs',
        title: "Blogs",
    },
    {
        path: '/products',
        title: "Products",
    }
]

const NavBar = () => {
    
   

    return (
        <div className='mx-16'>
            <nav className='flex justify-between'>
                <h1> Next Hero </h1>
               <ul className='flex justify-between'>
               {
                 NavLinks.map(({path, title}) => (
                    <li key={path}>
                        <NavLink exact={path === '/'} activeClassName="text-red-500 font-semibold" href={path}> <span className='ms-5'>{title}</span>  </NavLink>
                    </li>)
                 )   
                }
               </ul>
            </nav>
        </div>
    );
};

export default NavBar;