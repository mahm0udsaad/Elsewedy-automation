import { Fragment, useEffect ,useState} from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';

const navigation = [
    { name: 'Products', href: '../products', current: false },
    { name: 'Solutions & Services', href: '/services', current: false },
    { name: 'Training', href: '/training', current: false },
    { name: 'About US', href: '/about', current: false },
    { name: 'Contact Us', href: '/contact', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const [showOldLogo , setShowOldLogo] = useState(false)
  useEffect(() => {
    const intervalDuration = !showOldLogo ? 2000 : 6000; 
    const time = setInterval(() => {
      setShowOldLogo((prevShowOldLogo) => !prevShowOldLogo);
    }, intervalDuration);
  
    return () => {
      clearInterval(time);
    };
  }, [showOldLogo]);
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4  sm:px-6 lg:px-8">
                <div className="flex h-18 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link href={'/'}>
                      <motion.img
                        key={!showOldLogo ? "oldLogo" : "newLogo"}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{ opacity: 0 }}
                        className="h-20 w-48 transtion duration-600"
                        src={!showOldLogo ? "/images/oldLogo.png":"/images/LOGO-0.png"}
                        alt="Company's logo"
                      /></Link>
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
                                ? 'bg-gray-900 text-white'
                                : 'transtion duration-300 hover:bg-red-800 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
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
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
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
    </>
  )
}
