"use client"

import { AnimatePresence ,motion} from "framer-motion"
import { Tap , ServicesTap} from "../component/productTaps";
import { useState } from "react";
import { Projects , technicalSuport} from "../data/services";
import Accordioncmp from "../component/accordion";
import AccordionCmp from "../component/accordion";

export default function Services() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <>
    <main className="flex min-h-screen flex-col space-y-8">
     <div className="relative w-full h-[70vh]">
        <img src="/images/services/top.jpg" className="h-full w-full" alt="" />
      </div>
    <section className="flex flex-col space-y-10">
    <div className="flex list-none">
    <Tap title={'Projects'} openTab={openTab} setOpenTab={setOpenTab} i={1}/>
    <Tap title={'Technical Support'} openTab={openTab} setOpenTab={setOpenTab} i={2}/>
    </div>
    <div className="content w-11/12 mx-auto">
    <ServicesTap openTab={openTab} i={1}>
    {Projects.map((project, index) => (
        <AccordionCmp
          key={index}
          title={project.title}
          content={project.content}
        />
      ))}
    </ServicesTap>
    <ServicesTap openTab={openTab} i={2}>
    {technicalSuport.map((project, index) => (
        <AccordionCmp
          key={index}
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