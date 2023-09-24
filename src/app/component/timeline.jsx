import * as React from 'react';
import { events } from '../data/events';
import { motion, useInView } from 'framer-motion';

const TimeLine = () => {
  const ref = React.useRef(null)
  const isInview = useInView(ref)
   return (
     <ol ref={ref} className="items-start flex sm:flex-row flex-col justify-center sm:justify-around mx-auto w-11/12">
       {events.map((li, i) => (
         <motion.div
         initial={{ y:100 }}
         animate={{ y:isInview ? 0 : 20 }}
         transition={{ duration: i / 5}}
         key={i}
         style={{  paddingTop: `${i*3}%`}}
         className='sm:w-[30%]'
         >
           <time style={{color:`${li.color}`}} className="block mb-2 text-xl font-semibold leading-none  text-start px-4">{li.subtitle}</time>
           <li
             style={{ borderColor:`${li.color}`}}
             className={` sm:h-[27rem] rounded-lg border-t-4 border-l-4 border-l-0 border-${li.color} sm:mx-3 sm:p-4 relative sm:mb-6 sm:mb-0`}
           >
             <div className="flex items-center">
             </div>
             <div className="mt-3  text-start grid gap-3 sm:gap-5 lg:grid-cols-1">
               <div className="flex justify-start items-center w-full sm:h-10">
                 <img src={li.images[0].src} alt={li.images[1]} width={100} className={`w-[80px] ${i > 4 ? "lg:w-[150px] w-[100px] lg:h-[70px]" : ''}`} />
               </div>
               <h3 className="flex items-center text-sm text-gray-900">{li.title}</h3>
             </div>
           </li>
         </motion.div>
       ))}
     </ol>
   );
};

export default TimeLine;
