import React from 'react';
import wait from './wait';

const loadeSingleBlog = async (id) => {
    await wait()
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        // cache: "no-cache",  //no catch for server side rendering

        cache: "force-cache" // static data fetch
    })
    return res.json()
    
};

export default loadeSingleBlog