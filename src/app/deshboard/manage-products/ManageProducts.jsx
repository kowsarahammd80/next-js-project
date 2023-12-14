"use client"

import React, { useRef, useState, useTransition } from 'react';
import ManageSingleProduct from './ManageSingleProduct';
import Modal from '@/components/Modal';
import { useRouter } from 'next/navigation';

const ManageProducts = ({products}) => {

    const modalRef = useRef(null);
    const [updateData, setUpdateData] = useState(null);
    const router = useRouter();
    const [isPanding, startTransition] = useTransition()
    const [loading, setLoading] = useState(false)

    const isLoading = isPanding || loading;

    const oprenModal = (product) => {
      setUpdateData(product)
      modalRef.current.showModal();
    }

    const closeModal = () => {
        setUpdateData(null);
        modalRef.current.close();
    }


    const handleSubmit = async (e) => {
       e.preventDefault();
       const form = e.target;
       const title = form.title.value;
       const price = form.price.value;
       const Data = {
        title: title,
        price: price
       }
       
       if(title && price){ 
        
        setLoading(true)
          try {
            const res = await fetch(`http://localhost:5000/products/${updateData?.id}`,{
             method: "PATCH",
             headers: {
                'content-type' : "application/json"
             },
             body: JSON.stringify(Data)
          })
          const result = await res.json()
          console.log(result)
          form.reset()
          closeModal()
          setLoading(false)
          startTransition(() => {
            router.refresh();
          })
          } catch (error) {
            console.log(error)
          }
       }

    }


    const handleDelete = async (id) => {
       
           
           try {
             const res = await fetch(`http://localhost:5000/products/${id}`,{
              method: "DELETE",
              
           })
           const result = await res.json()
           console.log(result)
           startTransition(() => {
             router.refresh();
           })
           } catch (error) {
             console.log(error)
           }
       
 
     }

    return (
        <div className=''>
            <div className={`grid grid-cols-3 ${isLoading ? "opacity-30" : "opacity-100"}`}>   
               {
                products.map( product => <ManageSingleProduct key={product.id} productData={product} oprenModal={oprenModal} handleDelete={handleDelete} /> )
               }
            </div>
            <Modal ref={modalRef} closeModal={closeModal} updateData={updateData} handleSubmit={handleSubmit} />
        </div>
    );
    
};

export default ManageProducts;