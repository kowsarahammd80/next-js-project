import React from 'react';

const ManageSingleProduct = ({productData, oprenModal, handleDelete}) => {
      
    const {title, id} = productData

    return (

        <div>
            <h1>{title}</h1>
            <button onClick={() => oprenModal(productData)} className='bg-blue-500'>Edite</button>
            <button onClick={() => handleDelete(id)} className='bg-red-500'>Delete</button>
        </div>

    );
};

export default ManageSingleProduct;