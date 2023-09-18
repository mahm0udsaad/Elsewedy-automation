"use client"

import { AnimatePresence ,motion} from "framer-motion"
import { Tap , ServicesTap} from "../component/productTaps";
import { useState } from "react";
import { Projects , technicalSuport} from "../data/services";
import Accordioncmp from "../component/accordion";
import AccordionCmp from "../component/accordion";

export default function Services() {
  const [openTab, setOpenTab] = useState(1);
  const [expand , setExpand] = useState(false)

    const collapse = () =>{
      const panal = document.querySelectorAll('.chakra-collapse')
      panal.forEach((el)=>{
        el.style.opacity=  `0` 
        el.style.height=  `0` 
        el.style.display=  `none` 
      })
      }
  const expandAll = () =>{
  const panal = document.querySelectorAll('.chakra-collapse')
  panal.forEach((el)=>{
    el.style.opacity=  `1` 
    el.style.height=  `auto` 
    el.style.display=  `block` 
  })
  }
  return (
    <>
    <main className="flex min-h-screen flex-col space-y-8 pt-20">
     <div className="relative w-full h-[60vh]">
        <img src="/images/services/173.jpg" className="h-full w-full" alt="" />
      </div>
    <section className="flex flex-col space-y-10">
    <div className="flex justify-center list-none w-5/6 mx-auto">
    <Tap title={'Projects'} openTab={openTab} setOpenTab={setOpenTab} i={1}/>
    <Tap title={'Technical Support'} openTab={openTab} setOpenTab={setOpenTab} i={2}/>
    </div>
    <div className="content w-11/12 mx-auto">
    <ServicesTap openTab={openTab} i={1}>
    <div className="controler flex justify-end ">
    <button className="rounded-full bg-black text-white px-4 py-1 mx-4" onClick={expandAll}>Expand All</button>
    <button className="rounded-full bg-black text-white px-4 py-1 mx-4" onClick={collapse}>Collapse</button>
    </div>
    {Projects.map((project, index) => (
        <AccordionCmp
          key={index}
          toggle={expandAll}
          title={project.title}
          content={project.content}
        />
      ))}
    </ServicesTap>
    <ServicesTap openTab={openTab} i={2}>
    <div className="controler flex justify-end ">
    <button className="rounded-full bg-black text-white px-4 py-1 mx-4" onClick={expandAll}>Expand All</button>
    <button className="rounded-full bg-black text-white px-4 py-1 mx-4" onClick={collapse}>Collapse</button>
    </div>
    {technicalSuport.map((project, index) => (
        <AccordionCmp
          key={index}
          toggle={expandAll}
          title={project.title}
          content={project.content}
        />
      ))}
    </ServicesTap>
    </div>
    </section>
    </main>
    </>
  )
}