"use client"
import ProjectCard from "../component/projectsCard"
import { projectsData } from "../data/clients"
import { Clients } from "../page"
import { useState } from "react"
export default function ClientsPage(){

    return(
        <main className="pt-20">
              <div style={{borderRadius:`0 20px`}} className=" redBg w-11/12 sm:w-1/2 mx-auto my-10">
                <h1 className="text-5xl font-semibold text-center text-white p-10">
                Our Clients
                </h1>
                </div>
                <Clients />
                <section>
                    <div className="grid lg:grid-cols-2 gap-8 w-11/12 mx-auto">
                       {projectsData.map((project , i)=>(
                        <ProjectCard key={i}  project={project} i={i}/>
                       ))}
                    </div>
                </section>
        </main>
    )
}