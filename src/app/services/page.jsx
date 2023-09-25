"use client"

import { AnimatePresence ,motion} from "framer-motion"
import { ServicesTap, FlexTap} from "../component/productTaps";
import { useState } from "react";
import { Projects , technicalSuport} from "../data/services";
import Accordioncmp from "../component/accordion";
import AccordionCmp from "../component/accordion";
import { PagesNav } from "../component/navBar";

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
    <PagesNav />
    <main className="flex min-h-screen flex-col pt-20">
    <section className="flex w-full">
    <div className="flex flex-col w-[25rem] list-none mr-4">
    <FlexTap bg={'#991b1b'} color={'white'} title={'Projects'} openTab={openTab} setOpenTab={setOpenTab} i={1}/>
    <FlexTap bg={"black"} color={"#991b1b"} title={'Technical Support'} openTab={openTab} setOpenTab={setOpenTab} i={2}/>
    </div>
    <div className="content w-11/12 mx-auto">
    <ServicesTap openTab={openTab} i={1}>
    <div className="controler flex justify-end ">
    <button className="rounded-full bg-black text-white px-4 py-1 mx-4" onClick={expandAll}>Expand All</button>
    <button className="rounded-full bg-black text-white px-4 py-1 mx-4" onClick={collapse}>Collapse</button>
    </div>
    {Projects.map((project, index) => (
        <AccordionCmp
          i={index}
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