// "use client";

import loadBlogs from '@/utils/loadBlogs';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

import React from 'react';

export const metadata = {
  title: "Blogs | next",
  description: "Next Web",
}


// const blogs = [
//     {
//         id : 1,
//         year: 2016,
//         title: 1,
//     },
//     {
//         id : 2,
//         year: 2019,
//         title: 2,
//     },
//     {
//         id : 3,
//         year: 2023,
//         title: 3,
//     },
// ]

const Blogs = async () => {
    // const router = useRouter();

    const bloges = await loadBlogs();

    return (
        <div>
            <h1>Blogs</h1>
           <ul>
           {
                bloges.map(({id, title,}) =>
                   
                    <Link href={`/blogs/${id}`} key={id} className='block border'>
                      {id},  {title}
                    </Link> //this is common 
                    
                    // <Link href={{
                    //     pathname: `/blogs/${year}/${id}`,
                    //     query: {
                    //         title: title
                    //     }
                    // }} key={id}>
                    //     {title}
                    // </Link>
                    //   query serch patahnor jonno ei function

                    // <button 
                    // onClick={() => router.push( `/blogs/${year}/${id}?title=${title}`)}
                    // key={id}>
                    //     {title}
                    // </button>
                    // <button 
                    // onClick={() => router.replace( `/blogs/${year}/${id}?title=${title}`)}
                    // key={id}>
                    //     {title}
                    // </button>

                )
            }
           </ul>
        </div>
    );
};

export default Blogs;