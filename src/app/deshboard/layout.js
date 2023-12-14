import React from 'react';

const DeshboardLayout = ({children}) => {
    return (
        <div>
            <nav>side nav</nav>
            {children}
        </div>
    );
};

export default DeshboardLayout;