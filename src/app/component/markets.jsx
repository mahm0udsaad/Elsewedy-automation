"use ch1ent"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const markets = [
  {
    name: "Oil & Gas",
    image: "images/markets/oil.jpg"
  },
  {
    name: "Food & Beverage",
    image: "images/markets/food.jpg"
  },
  {
    name: "Steel & Sheet",
    image: "images/markets/steel.jpg"
  },
  {
    name: "Aluminum & Mining",
    image: "images/markets/aluminum.jpg"
  },
  {
    name: "Chemicals & Cosmetics",
    image: "images/markets/chemicals.jpg"
  },
  {
    name: "Power & Water & Others",
    image: "images/markets/power.jpg"
  },
];

const MarketCard = ({isInView , imgurl , title}) =>{
  return(
   <div className="flex flex-col items-center mt-5">
    <h1 className="text-xl sm:text-2xl text-center py-5">{title}</h1>
    <motion.div
    initial={{opacity:0}}              
    animate={{opacity:isInView?1:0}}
    transition={{duration:1}}
    className="h-[7rem] sm:h-[12rem]"
  >

    <img
      loading="lazy"
      className="h-full rounded-xl "
      src={imgurl}
      alt="Walnut"
     />
  </motion.div>
   </div>
  )
}
  export default function Markets() {
    const marketsRef = useRef(null)
    const isInView = useInView(marketsRef)
    return (
      <div 
      ref={marketsRef}
      className="bg-white">
        <div className="mx-auto w-11/12 items-center py-12 ">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:grid-row-2">
            {markets.map((market , i)=>(
              <MarketCard key={i} imgurl={market.image} title={market.name} isInView={isInView}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
