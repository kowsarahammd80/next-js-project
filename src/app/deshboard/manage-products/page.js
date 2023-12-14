import allProducts from '@/utils/allProducts';
import React from 'react';
import ManageProducts from './ManageProducts';

export const metadata = {
    title: "ManagePdoducts | DeshBoard | Next",
    description: "Next Project"
}

const ManageProductsPage =  async() => {
     
    const products = await allProducts()

    return (
        <div className='mx-16 '>
           <h1 className='text-center font-semibold text-2xl my-10'> Manage Products </h1>
           
           <section className='my-10'>

              <div className=''>
                 <ManageProducts products= {products} />
              </div>

           </section>

        </div>
    );
};

export default ManageProductsPage;