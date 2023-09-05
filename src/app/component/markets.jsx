import { motion, useInView } from "framer-motion"
import { useRef } from "react"
  export default function Markets() {
    const marketsRef = useRef(null)
    const isInView = useInView(marketsRef)
    return (
      <div className="bg-white">
        <div ref={marketsRef} className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
          <ul className="text-4xl space-y-5">
            <li>Oil & Gas</li>
            <li>Food & Beverage</li>
            <li>Steel & Sheet</li>
            <li>Aluminum & Mining</li>
            <li>Chemicals & Cosmetics</li>
            <li>Power & Water & Others</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <motion.img
              initial={{x:-20}}              
              animate={{x:isInView?0:-20}}
              transition={{duration:.5}}
              src="/images/markets/oil.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <motion.img
              initial={{y:-20}}              
              animate={{y:isInView?0:-20}}
              transition={{duration:.5}}
              src="/images/markets/steel.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <motion.img
              initial={{y:20}}              
              animate={{y:isInView?0:20}}
              transition={{duration:.5}}
              src="/images/markets/food.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <motion.img
              initial={{x:20}}              
              animate={{x:isInView?0:20}}
              transition={{duration:.5}}
              src="/images/markets/power.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  