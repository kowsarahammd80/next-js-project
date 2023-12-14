import Image from 'next/image';
import React from 'react';
import image from '../../../assets/WhatsApp Image 2023-09-16 at 14.53.50.jpg'

const AboutPage = () => {
    return (
        <div>
            aboutpage
            <div>

              {/* <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt="" placeholder=''/> */}

              <div className='grid grid-cols-1 lg:grid-cols-2'>

               <Image placeholder='blur' sizes="(max-width: 768px) 100vw, 10vh, (max-width: 1200px) 50vw, 33vw" src={image} alt='' className='border'/>
               
               <Image placeholder='blur' sizes="(max-width: 768px) 100vw, 5vh, (max-width: 1200px) 50vw, 33vw" src={image} alt='' className='border'/>

              </div>
          
            </div>
        </div>
    );
};

export default AboutPage;