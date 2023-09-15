"use client"
import React, { useState } from "react";
import GalleryGrid from "../component/gallery";
import { GalleryTap, Tap } from "../component/productTaps";

export default  function Gallery()  {
    const [openTab , setOpenTab] = useState(0)
    return (
      <main className="">
        <h1 className="text-center font-semibold text-5xl text-gray-800 pt-20 italic">OUR GALLERY</h1>
        <div className="taps flex container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
            <GalleryTap i={1} title={'All'} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={2} title={'projects'} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={3} title={'Products '} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={4} title={'Services'} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={5} title={'training'} openTab={openTab} setOpenTab={setOpenTab}/>
            <GalleryTap i={6} title={'events / Exhibitions'} openTab={openTab} setOpenTab={setOpenTab}/>
        </div>
       <GalleryGrid />
      </main>
    );
  };
  
  