"use client"
import NavBar from './component/navBar'
import Footer from './component/footer'
import './globals.css'
import { Inter } from 'next/font/google'
import { useRef, useState } from 'react';
import { inView, useInView } from 'framer-motion';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'El Sewedy Automation',
  description: 'Generated by mahmoud saad',
};

export default function RootLayout({ children }) {
  const [inView , setInview] = useState(null)
  function handelWhatsPing(isFooterInview){
    setInview(isFooterInview)
  }
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/" />
      </head>
      <body suppressHydrationWarning={true} className={inter.className}>
        <NavBar isFooterInview={inView} />
         {children}
      <Footer handelWhatsPing={handelWhatsPing}/>
        </body>
    </html>
  )
}
