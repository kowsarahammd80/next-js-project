import Categories from '@/components/HomePage/categories';
import Image from 'next/image';

export const revalidate = 0;

const HomePage = ( ) => {
  return (
    <main className="">
      
       <h1>Home page root page</h1>

       <Categories/>

    </main>
  )
}

export default HomePage;
