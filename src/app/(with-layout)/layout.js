import NavBar from '@/components/NavBar';
import Link from 'next/link';
import React from 'react';

const WithLayOut = ({children}) => {
    return (
        <div>
           <NavBar/>
            {children}
        </div>
    );
};

export default WithLayOut;