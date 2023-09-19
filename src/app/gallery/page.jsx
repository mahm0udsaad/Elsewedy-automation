"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import {GalleryGrid} from "../component/gallery";
import { GalleryTap, GalleryContent } from "../component/productTaps";
import { events, projects, services, training, All, Products } from '../data/gallery'
import { generateUniqueKey } from "../component/table";
export default  function Gallery()  {
    const [openTab , setOpenTab] = useState(1)
    const orderedProducts = {
      siemens: Products.siemens,
      rockwell: Products.rockwell,
      GHM: Products.GHM,
      deutschmann: Products.deutschmann
    };
    const productsTitles = Object.keys(orderedProducts)
    return (
      <main className="">
        <motion.h1
         initial={{opacity: 0}}
         animate={{opacity: 1}}
         transition={{ duration : .8}}
         className="text-center font-semibold text-5xl text-gray-800 py-20 italic">
           <div style={{borderRadius:`0 20px`}} className=" redBg sm:w-1/2 mx-auto my-10">
        <h1 className="text-5xl font-semibold text-center text-white p-10">
          Our Gallery
        </h1>
        </div>
         </motion.h1>
        <div className="taps w-11/12  sm:h-[5rem] h-[5rem] overflow-x-scroll sm:overflow-hidden flex container mx-auto px-5 py-2 lg:px-32 ">
            <GalleryTap i={0} title={'events'} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={1} title={'projects'} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={2} title={'Products '} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={3} title={'Services'} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={4} title={'training'} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={5} title={'All'} openTab={openTab} setOpenTab={setOpenTab}/>
        </div>
        <div className="gallery overflow-y-scroll h-screen">
        <GalleryContent openTab={openTab} i={0}>
        { events.map((coll , i)=>(
        <GalleryGrid center={true} key={generateUniqueKey()+i+'events'} arr={coll} />
       ))}
       
        </GalleryContent>
        <GalleryContent openTab={openTab} i={1}>
        { projects.map((coll , i)=>(
        <GalleryGrid key={generateUniqueKey()+i+'projects'} arr={coll} />
       ))}
        </GalleryContent>

        <GalleryContent openTab={openTab} i={2}>
        { Products.map((grid , i)=>(
        <>
        <h1 className="text-center pt-10 text-4xl font-semibold">{productsTitles[i]}</h1>
        <GalleryGrid key={generateUniqueKey()+i+'products'} arr={grid} />
        </>
       ))}
        </GalleryContent>

        <GalleryContent openTab={openTab} i={3}>
        { services.map((coll , i)=>(
        <GalleryGrid key={generateUniqueKey()+i+'services'} arr={coll} />
       ))}
        </GalleryContent>
        <GalleryContent openTab={openTab} i={4}>
        { training.map((coll , i)=>(
        <GalleryGrid key={generateUniqueKey()+i+'training'} arr={coll} />
       ))}
        </GalleryContent>
        <GalleryContent openTab={openTab} i={5}>
        { All.map((coll , i)=>(
        <GalleryGrid key={generateUniqueKey()+i+'all'} arr={coll} />
       ))}
        </GalleryContent>
        </div>
      </main>
    );
  };
  
  