"use client"

import ProjectCard from "../component/projectsCard"
import { generateUniqueKey } from "../component/table"
import { projectsData } from "../data/clients"
import { categoriesClients } from "../data/images"
import { Clients } from "../page"

export default function ClientsPage(){
    return(
        <main className="pt-20">
              <div style={{borderRadius:`0 20px`}} className=" redBg w-11/12 sm:w-1/2 mx-auto my-10">
                <h1 className="text-5xl font-semibold text-center text-white p-10">
                preferences
                </h1>
                </div>
                <div>
                    {categoriesClients.map((category , i) =>(
                        <div key={generateUniqueKey() + i} className="">
                            <h1 className="text-4xl py-12 text-center">{category.title}</h1>
                            <ul className={`overflow-hidden w-11/12 mx-auto grid grid-cols-10`}>
                                {category.imagesUrl.map((url , i)=>(
                                    <img
                                    key={generateUniqueKey() + i} 
                                    className="h-32 col-span-2  object-contain mx-4 w-28"
                                    src={url}
                                    alt={`Client Logo ${i + 1}`}/>
                                
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <section>
                    <div className="grid sm:grid-cols-1 gap-8 w-11/12 mx-auto my-12">
                       {projectsData.map((project , i)=>(
                        <ProjectCard key={i / projectsData.length}  project={project} i={i}/>
                       ))}
                    </div>
                </section>
        </main>
    )
}