"use client"

import { Fragment, useContext, useEffect ,useRef,useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import {BsMessenger} from 'react-icons/bs'
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';
import { IoLogoWhatsapp } from "react-icons/io";
import { MyContext } from '../context';
import Logo from './logo';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
 function NavBar() {
  const {isFooterInview} = useContext(MyContext)
  const [navigation , setNavigation] = useState(
    [
      { name: 'Home', href: '/', current: false },
      { name: 'About US', href: '/about', current: false },
      { name: 'Products', href: '../products', current: false },
      { name: 'Solutions & Services', href: '/services', current: false },
      { name: 'Training', href: '/training', current: false },
      { name: 'Clients', href: '/clients', current: false },
      { name: 'Gallery', href: '/gallery', current: false },
      { name: 'Contact Us', href: '/contact', current: false },
    ]
  )
  const [bg  , setBg] = useState('transparent')
  const [color  , setColor] = useState('white')
  const [showOldLogo , setShowOldLogo] = useState(false)
  
  useEffect(() => {
    const intervalDuration = !showOldLogo ? 1000 : 7000; 
    const time = setInterval(() => {
      setShowOldLogo((prevShowOldLogo) => !prevShowOldLogo);
    }, intervalDuration);
    
    return () => {
      clearInterval(time);
    };
  }, [showOldLogo]);
  useEffect(() => {
    const handleScroll = () => {
      const newY = window.scrollY;
      if (newY > 450) {
        setBg('white');
        setColor('black');
      } else {
        setBg('transparent');
        setColor('white');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <div className="min-h-full">
        <Disclosure style={{backgroundColor:bg , color: color}} as="nav" className="z-20 fixed w-full top-0">
          {({ open }) => (
            <>
              <div className="px-4">
                <div className="flex h-18 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 ">
                    <Link href={'/'} className=''>
                      {!showOldLogo ? (
                        <motion.img
                        key={"newLogo"}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        className=" sm:h-20 sm:w-56 w-40 h-16 transtion duration-600"
                        src={"/images/oldLogo.png"}
                        alt="Company's logo"
                      />
                      ):(
                       <motion.div
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          transition={{duration:.5}}
                          className=" sm:h-20 sm:w-56 w-40 h-16 transtion duration-600 pt-4"
                          >
                         <Logo />
                      </motion.div>         
                      )}
                      </Link>
                       </div>
                  </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'redBg text-white'
                                : 'transtion duration-300 hover:bg-red-800 hover:text-white',
                              'rounded-md  p-2 text-lg font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="transtion duration-300 relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="transition duration-300 bg-white text-black space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-black' : 'hover:bg-red-700 hover:text-white',
                        'transition duration-300 block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
          <a title='chat with us' href='https://web.whatsapp.com/send?phone=+201028833734' className=' bg-transparent fixed z-20 bottom-5 left-5 text-6xl text-green-600 hover:text-green-300'>
          {isFooterInview ? <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75`}></span> : null}
            <IoLogoWhatsapp />
          </a>
          <a title='chat with us' className=' bg-transparent fixed z-20 bottom-5 right-5 text-6xl text-blue-600 hover:text-blue-300' href="https://www.facebook.com/messages/t/195682397271401">
          {isFooterInview ? <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75`}></span> : null}
          <BsMessenger />
          </a>
      </div>
    </>
  )
}

const PagesNav = () =>{
  const [showOldLogo , setShowOldLogo] = useState(false)
  const [navigation , setNavigation] = useState(
    [
      { name: 'Home', href: '/', current: false },
      { name: 'About US', href: '/about', current: false },
      { name: 'Products', href: '../products', current: false },
      { name: 'Solutions & Services', href: '/services', current: false },
      { name: 'Training', href: '/training', current: false },
      { name: 'Clients', href: '/clients', current: false },
      { name: 'Gallery', href: '/gallery', current: false },
      { name: 'Contact Us', href: '/contact', current: false },
    ]
  )

  return (
    <div className="min-h-full">
        <Disclosure style={{backgroundColor:"white" , color: 'balck'}} as="nav" className="z-20 fixed w-full top-0">
          {({ open }) => (
            <>
              <div className="px-3">
                <div className="flex h-18 items-center justify-between">
                  <div className="flex items-center">
                  <div className="flex-shrink-0 ">
                    <Link href={'/'} className=''>
                       <motion.div
                          initial={{opacity: 0}}
                          animate={{opacity: 1}}
                          transition={{duration:.5}}
                          className=" sm:h-20 sm:w-56 w-40 h-16 transtion duration-600 pt-4"
                          >
                         <Logo />
                      </motion.div>         
                      </Link>
                       </div>
                  </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-center space-x-4">
                        {navigation.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? 'bg-white text-white'
                                : 'transtion duration-300 hover:bg-red-800 hover:text-white',
                              'rounded-md p-2 text-md font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="transtion duration-300 relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="transition duration-300 space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'hover:bg-red-700 hover:text-white',
                        'transition duration-300 block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
  )
}
export { NavBar , PagesNav}