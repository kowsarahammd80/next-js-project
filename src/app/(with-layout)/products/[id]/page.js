import getSingleProduct from '@/utils/getSingleProduct';

import React from 'react';



const SingleProduct = async ({ params }) => {
    const products = await getSingleProduct(params.id)
    return (
        <div>
            {products.price}, {products.id}
        </div>
    );
};

export default SingleProduct;