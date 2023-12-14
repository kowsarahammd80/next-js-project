import allProducts from '@/utils/allProducts';
import React from 'react';
import SingleProduct from './SingleProduct';

const ProductsPage = async ({searchParams}) => {
    const products = await allProducts(searchParams.categorieyId);
    return (
        <div>
            <h1>PRODUCTS</h1>
            <div>
                 {
                    products.map((product) => <SingleProduct product={product} key={product.id}/>)
                 }
            </div>
        </div>
    );
};

export default ProductsPage;