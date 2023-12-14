import Link from 'next/link';
import React from 'react';

const SingleCagtegory = ({categoriyData}) => {

    const {id, name, imageURL} = categoriyData;

    return (
        <Link className='block ms-16 border w-52' href={`/products?categorieyId=${id}`}>{name}
        </Link>
    );
};

export default SingleCagtegory;