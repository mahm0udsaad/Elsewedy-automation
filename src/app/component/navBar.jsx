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
              <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
                <div className="flex h-18 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-white">
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
                          className=" sm:h-20 sm:w-56 w-40 h-16 transtion duration-600"
                          >
                        <svg className='h-full w-full' viewBox="0 0 433 130" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                          <rect width="433" height="130" fill="url(#pattern0)"/>
                          <defs>
                          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                          <use xlinkHref="#image0_1_2" transform="matrix(0.00223714 0 0 0.00745139 0 -0.0178713)"/>
                          </pattern>
                          <image id="image0_1_2" width="447" height="139" xlinkHref="data:image/png;base64,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"/>
                          </defs>
                          </svg>
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
                                : 'transtion duration-300 hover:bg-white hover:text-black',
                              'rounded-md lg:px-3 py-2 text-sm font-medium'
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
              <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
                <div className="flex h-18 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-white rounded-lg">
                      <Link href={'/'} className=''>
                        <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration:.5}}
                        className=" sm:h-20 sm:w-56 w-40 h-16 transtion duration-600"
                        >
                      <svg className='h-full w-full' viewBox="0 0 433 130" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <rect width="433" height="130" fill="url(#pattern0)"/>
                        <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0_1_2" transform="matrix(0.00223714 0 0 0.00745139 0 -0.0178713)"/>
                        </pattern>
                        <image id="image0_1_2" width="447" height="139" xlinkHref="data:image/png;base64,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"/>
                        </defs>
                        </svg>
                    </motion.div>  
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
                                ? 'bg-white text-white'
                                : 'transtion duration-300 hover:bg-white hover:text-black',
                              'rounded-md lg:px-3 py-2 text-sm font-medium'
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