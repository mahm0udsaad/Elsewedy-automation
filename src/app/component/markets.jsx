"use ch1ent"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link";
const markets = [
  {
    name: "Oil & Gas",
    image: "images/markets/oil.jpg",
    to: '/clients#oil'
  },
  {
    name: "Food & Beverage",
    image: "images/markets/food.jpg",
    to: '/clients#food'
  },
  {
    name: "Steel & Sheet",
    image: "images/markets/steel.jpg",
    to: '/clients#steel'

  },
  {
    name: "Aluminum & Mining",
    image: "images/markets/aluminum.jpg",
    to: '/clients#aluminum'
  },
  {
    name: "Chemicals & Cosmetics",
    image: "images/markets/chemicals.jpg",
    to:'/clients#chemicals'
  },
  {
    name: "Power & Water & Others",
    image: "images/markets/power.jpg",
    to: '/clients/#power'

  },
];

const MarketCard = ({isInView , imgurl , title , to}) =>{
  return(
   <div className="flex flex-col items-center mt-5">
    <h1 className="text-lg sm:text-2xl text-center py-5">{title}</h1>
    <motion.div
    initial={{opacity:0 ,y:30 }}              
    animate={{opacity:isInView?1:0 ,y:isInView? 0:30 }}
    transition={{duration:1}}
    className="h-[7rem] sm:h-[12rem]"
  >
    <Link href={to}>
    <img
      fetchPriority="low"
      loading="lazy"
      className="h-full rounded-xl "
      src={imgurl}
      alt="Walnut"
     />
    </Link>
  </motion.div>
   </div>
  )
}
  export default function Markets() {
    const marketsRef = useRef(null)
    const isInView = useInView(marketsRef ,{once:true})
    return (
      <div 
      ref={marketsRef}
      className="bg-white">
        <div className="mx-auto w-11/12 items-center ">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:grid-row-2">
            {markets.map((market , i)=>(
              <MarketCard to={market.to} key={i} imgurl={market.image} title={market.name} isInView={isInView}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
