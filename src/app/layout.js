// "us client"

import { Roboto } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const roboto = Roboto({ subsets: ['latin'] , weight: ["100","300", "400", "500", "700"]})

export const metadata = {
  title: 'Next JS Project',
  description: 'Generated by create next app',
}

const RootLayout = ({ children }) => {
  console.log("From RootLayout")
  return (
    <html lang="en">
      
      <body className={roboto.className}>
      {/* <nav>
         <Link href="about">about</Link>
         <Link className='ms-3' href="/">Home</Link>
      </nav> */}
        {children}
        </body>
    </html>
  )
}

export default RootLayout;
