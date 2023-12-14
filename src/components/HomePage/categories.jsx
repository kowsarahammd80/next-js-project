import getAllCategoris from '@/utils/getAllCategoris';
import React from 'react';
import SingleCagtegory from './SingleCagtegory';

const Categories = async () => {
    const categories = await getAllCategoris()

    return (
        <div>
           <h1>categories</h1>
           {
             categories.map((categoriy) => <SingleCagtegory categoriyData= {categoriy} key={categoriy.id}/>)
           }
        </div>
    );
};

export default Categories;