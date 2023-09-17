import * as React from 'react';
import { events } from '../data/events';

const TimeLine = () => {
   return (
     <ol className="items-start sm:flex justify-around mx-4 ">
       {events.map((li, i) => (
         <div key={i}
         style={{  paddingTop: `${i*5}%`}}
         >
           <time className="block mb-2 text-sm font-normal leading-none text-gray-400 text-start px-4">{li.subtitle}</time>
           <li
             style={{ borderColor:`${li.color}`}}
             className={`w-[12rem] h-[27rem] rounded-lg border-t-2 border-l-2 border-l-0 border-${li.color} mx-3 p-4 relative mb-6 sm:mb-0`}
           >
             <div className="flex items-center">
             </div>
             <div className="mt-3 pt-4 text-start grid gap-3 sm:gap-5 lg:grid-cols-1">
               <div className="flex justify-start items-center w-full sm:h-10">
                 <img src={li.images[0].src} alt={li.images[1]} width={100} className={`${i > 4 ? "w-[150px] h-[70px]" : ''}`} />
               </div>
               <h3 className="flex items-center text-lg text-gray-900 pt-8">{li.title}</h3>
             </div>
           </li>
         </div>
       ))}
     </ol>
   );
};

export default TimeLine;
