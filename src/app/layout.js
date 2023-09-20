import NavBar from './component/navBar'
import Footer from './component/footer'
import './globals.css'
import { Inter } from 'next/font/google'
import CounterProvider from './context'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'El Sewedy Automation',
  description: 'Generated by mahmoud saad',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <head>
        <link rel="icon" href="/" />
      </head>
      <CounterProvider>
      <body suppressHydrationWarning={true} className={inter.className}>
        <NavBar />
         {children}
        <Footer /> 
      </body>
      </CounterProvider>
    </html>
  )
}
