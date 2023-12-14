import Link from 'next/link';
import React from 'react';

const SingleProduct = ({ product }) => {
    const { id, title, price} = product
    return (
        <div>
            <p>{title}</p>
            <Link href={`/products/${id}`}>
            {id}
            </Link>
        </div>
    );
};

export default SingleProduct;