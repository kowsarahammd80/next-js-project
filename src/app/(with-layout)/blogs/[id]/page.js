// "use client"


import loadBlogs from '@/utils/loadBlogs';
import loadeSingleBlog from '@/utils/loadeSingleBlog';
// import { useParams, useSearchParams } from 'next/navigation';
import React from 'react';

export const generateMetadata = async ({params}) => {
    const {title} = await loadeSingleBlog(params.id)
    return{
        title: title,
    };
}


export const genetareStaticParams = async () => {
    const blogs = await loadBlogs();
    return blogs.map(({id}) => {
        // id: id.toString() // onk spmoy error dile eita us korte hoy
        id
    })
}

const SingleBlog = async ({ params }) => {

    const {id, title, body} = await loadeSingleBlog(params.id);

    // searchParams

    // console.log(params.sigments)
    // const [year, id] = params.sigments || [];
    // const params2 = useParams();
    // const searchParams2 = useSearchParams();

    // console.log(params2.sigments, searchParams2.get("title"));

    return (
        <div>
            {/* <>Single Blog {year || new Date().getFullYear()} for {id} </> */}
            <br />
            {/* {
                searchParams.title
            } */}

            <p>{title}, {id}</p>
            <p></p>
        </div>
    );
};

export default SingleBlog;