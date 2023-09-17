import * as React from 'react';
import { events } from '../data/events';

const TimeLine = () => {
   return (
     <ol className="items-start flex sm:flex-row flex-col items-center justify-center sm:justify-around mx-4 w-11/12">
       {events.map((li, i) => (
         <div key={i}
         style={{  paddingTop: `${i*5}%`}}
         className='sm:w-[30%]'
         >
           <time className="block mb-2 text-sm font-normal leading-none text-gray-400 text-start px-4">{li.subtitle}</time>
           <li
             style={{ borderColor:`${li.color}`}}
             className={` sm:h-[27rem] rounded-lg border-t-2 border-l-2 border-l-0 border-${li.color} sm:mx-3 sm:p-4 relative sm:mb-6 sm:mb-0`}
           >
             <div className="flex items-center">
             </div>
             <div className="mt-3 pt-4 text-start grid gap-3 sm:gap-5 lg:grid-cols-1">
               <div className="flex justify-start items-center w-full sm:h-10">
                 <img src={li.images[0].src} alt={li.images[1]} width={100} className={`w-[80px] ${i > 4 ? "lg:w-[150px] w-[100px] lg:h-[70px]" : ''}`} />
               </div>
               <h3 className="flex items-center text-sm lg:text-lg text-gray-900 pt-8">{li.title}</h3>
             </div>
           </li>
         </div>
       ))}
     </ol>
   );
};

export default TimeLine;
