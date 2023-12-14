import React, { forwardRef, useRef } from 'react';

const Modal = ({closeModal, updateData, handleSubmit}, ref) => {
    
    const formRef = useRef()

    return (
        <dialog ref={ref} className='w-96 p-2 rounded'>

            <div className='text-right'>
                 <button onClick={() => {closeModal();
                     formRef.current.reset()}}>close</button>
            </div>
           <p>Products Upate</p>
            <form onSubmit={handleSubmit} ref={formRef}>
                <input name='title' type="text" className='w-full border my-3' defaultValue={updateData?.title} />

                <input name='price' type="text" className='w-full border' defaultValue={updateData?.price} />

                <button type='submit' className='bg-blue-500 my-2 p-1 rounded'>Update</button>
           </form>
      </dialog>
    );
};

export default forwardRef(Modal);