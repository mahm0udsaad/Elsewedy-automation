import React from "react";
import { motion ,AnimatePresence } from "framer-motion";

function GalleryGrid({ arr , center}){
  
    return(
          <div className="container mx-auto px-5 py-2 lg:px-32">
        <div className={`-m-1 flex flex-wrap md:-m-2 ${center ? 'justify-center':null}`}>
          <div className="flex w-1/2 flex-wrap">
              {arr[0]&& (
            <div className="w-1/2 p-1 md:p-2 overflow-hidden">
                <motion.img
                initial={{scale : 0}}                
                animate={{scale : 1}}
                transition={{ duration:.5}}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transtion duration-300"
                src={arr[0]} />
            </div>
              )}
              {arr[1]&& (
            <div className="w-1/2 p-1 md:p-2 overflow-hidden">
                <motion.img
                initial={{scale : 0}}                
                animate={{scale : 1}}
                transition={{ duration:1}}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transtion duration-300"
                src={arr[1]} />
            </div>
              )}
              {arr[2]&& (
            <div className="w-full p-1 md:p- overflow-hidden">
                <motion.img
                initial={{scale : 0}}                
                animate={{scale : 1}}
                transition={{ duration:1}}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transtion duration-300"
                src={arr[2]} />
            </div>
              )}
          </div>
          {arr.length == 3 ?(null):(<div className={`flex w-1/2 flex-wrap`}>
              {arr[3]&& (
            <div className="w-full p-1 md:p- overflow-hidden">
                <motion.img
                initial={{scale : 0}}                
                animate={{scale : 1}}
                transition={{ duration:1}}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transtion duration-300"
                src={arr[3]} />
            </div>
              )}
              {arr[4]&& (
            <div className="w-1/2 p-1 md:p-2 overflow-hidden">
                <motion.img
                initial={{scale : 0}}                
                animate={{scale : 1}}
                transition={{ duration:1}}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transtion duration-300"
                src={arr[4]} />
            </div>
              )}
              {arr[5]&& (
            <div className="w-1/2 p-1 md:p-2 overflow-hidden">
                <motion.img
                initial={{scale : 0}}                
                animate={{scale : 1}}
                transition={{ duration:1}}
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center hover:scale-105 transtion duration-300"
                src={arr[5]} />
            </div>
              )}
          </div>)}
        </div>
        </div>
    )
}
const GallerySlide = ({ children }) => {

    return (
      <div className="relative w-full h-[60vh] md:h-[75vh] sm:h-[60vh]">
        {children}
      </div>
    );
  };

export {GalleryGrid , GallerySlide}