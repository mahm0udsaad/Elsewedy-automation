"use client"

import { ServicesTap, FlexTap} from "../component/productTaps";
import { useState } from "react";
import { Projects , technicalSuport} from "../data/services";
import { PageSlide } from "../component/slide";
import AccordionCmp from "../component/accordion";

export default function Services() {
  const [openTab, setOpenTab] = useState(1);
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
    <head>
    <title>El Sewedy Automation Automation Services</title>
    <meta name="description" content="Experience excellence with El Sewedy Automation's comprehensive range of automation services. From consultancy to implementation, we provide tailored solutions utilizing cutting-edge technology for enhanced efficiency and productivity." />
  </head>
     <PageSlide text={"Solution & Services"} imgSrc={'/images/services/head.jpg'}/>
    <main className="flex min-h-screen flex-col pt-20">
    <section className="sm:flex w-full">
    <div className="flex flex-col mx-auto w-11/12 sm:w-[25rem] list-none sm:py-0 py-4 mr-4">
    <FlexTap bg={'#991b1b'} color={'white'} title={'Projects'} openTab={openTab} setOpenTab={setOpenTab} i={1}/>
    <FlexTap bg={"#991b1b"} color={"white"} title={'Technical Support'} openTab={openTab} setOpenTab={setOpenTab} i={2}/>
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
          text={project.text}
          imgUrl={project.imgUrl}
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
          text={project.text}
          imgUrl={project.imgUrl}
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