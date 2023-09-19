import NavBar from './component/navBar'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from './component/footer';
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
      <body suppressHydrationWarning={true} className={inter.className}>
        <NavBar />
         {children}
      <Footer />
        </body>
    </html>
  )
}
