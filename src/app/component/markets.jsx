import { motion, useInView } from "framer-motion"
import { useRef } from "react"
  export default function Markets() {
    const marketsRef = useRef(null)
    const isInView = useInView(marketsRef)
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
          <ul className="text-4xl space-y-5">
            <li>Oil & Gas</li>
            <li>Food & Beverage</li>
            <li>Steel & Sheet</li>
            <li>Aluminum & Mining</li>
            <li>Chemicals & Cosmetics</li>
            <li >Power & Water & Others</li>
            </ul>
          </div>
          <div ref={marketsRef} className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <motion.div
              initial={{x:-50}}              
              animate={{x:isInView?0:-50}}
              transition={{duration:.7}}
            >
              <img
                className="rounded-xl h-[100%]"
                loading="lazy"
                src="/images/markets/oil.jpg"
                alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
               />
            </motion.div>
            <motion.div
              initial={{y:-50}}              
              animate={{y:isInView?0:-50}}
              transition={{duration:.7}}
            >
              <img
                className="rounded-xl h-[100%]"
                loading="lazy"
                src="/images/markets/steel.jpg"
                alt="Top down view of walnut card tray with embedded magnets and card groove."
               />
            </motion.div>
            <motion.div
              initial={{y:25}}              
              animate={{y:isInView?0:25}}
              transition={{duration:.7}}
            >
              <img
                className="rounded-xl h-[100%]"
                loading="lazy"
                 src="/images/markets/food.jpg"
                alt="Side of walnut card tray with card groove and recessed card area."
               />
            </motion.div>
            <motion.div
              initial={{x:25}}              
              animate={{x:isInView?0:25}}
              transition={{duration:.7}}
            >
              <img
                className="rounded-xl h-[100%]"
                loading="lazy"
                src="/images/markets/power.jpg"
                alt="Walnut card tray filled with cards and card angled in dedicated groove."
               />
            </motion.div>
          </div>
        </div>
      </div>
    )
  }
  