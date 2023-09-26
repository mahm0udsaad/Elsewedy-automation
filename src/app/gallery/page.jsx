"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import {GalleryGrid} from "../component/gallery";
import { GalleryTap, GalleryContent } from "../component/productTaps";
import { events, projects, services, training, All, Products } from '../data/gallery'
import { generateUniqueKey } from "../component/table";
import { PagesNav } from "../component/navBar";
import Lable from "../component/lable";
export default  function Gallery()  {
    const [openTab , setOpenTab] = useState(1)
    const orderedProducts = {
      Siemens: Products.Siemens,
      Rockwell: Products.Rockwell,
      GHM: Products.GHM,
      Deutschmann: Products.Deutschmann
    };
    const productsTitles = Object.keys(orderedProducts)
    return (
      <>
      <PagesNav />
      <main className="pt-16 ">
        <div className="relative gallery overflow-y-scroll h-screen mx-auto">
        <Lable text={"Our Gallery"} />
        <div className="sticky sm:overflow-hidden overflow-x-scroll w-full sm:w-full top-0 bg-white taps sm:h-[5rem] flex sm:justify-center container py-2">
            <GalleryTap i={0} title={'events'} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={1} title={'projects'} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={2} title={'Products '} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={3} title={'Services'} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={4} title={'training'} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={5} title={'All'} openTab={openTab} setOpenTab={setOpenTab}/>
        </div>
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
        <h1 className="text-center py-10 text-4xl font-semibold">{productsTitles[i]}</h1>
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
      </>
    );
  };
  
  