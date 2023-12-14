"use client"

import React, { useEffect } from 'react';

const ProductError = ({error, reset}) => {
    
    useEffect(() => {
        console.error(error)
    },[error])

    return (
        <div>
           <h1>
             {error.massage || "Something want worng happend!"}    
           </h1> 
           <button onClick={() => reset()}>Reset</button>   
        </div>  // this function for error handleling this function if i need i set this app rout for globel error handeling
    );
};

export default ProductError;