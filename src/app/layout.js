import {NavBar} from './component/navBar'
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
        <link rel="icon" className='w-28' href="/LOGO-fa.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VPVP6F38V7"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-VPVP6F38V7');
              `,
            }}
          />
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
