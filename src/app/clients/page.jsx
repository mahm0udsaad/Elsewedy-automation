"use client"
import ProjectCard from "../component/projectsCard"
import { generateUniqueKey } from "../component/table"
import { projectsData } from "../data/clients"
import { categoriesClients } from "../data/images"

export default function ClientsPage(){


    return(
        <main className="pt-20">
                <h1 className="text-center text-lg py-6 redColor">Thank you ,, <br />
                Successful Companies put their trust in our Company</h1>
                <div>
                    {categoriesClients.map((category , i) =>(
                        <div id={category.title.split(" ")[0].toLocaleLowerCase()} key={category.title.split(" ")[0]} className="h-full">
                            <h1 className="text-4xl font-semibold py-4 text-center">{category.title}</h1>
                            <ul className={`w-11/12 lg:w-1/2 p-4 mx-auto grid ${category.imagesUrl.length < 6 ? `grid-cols-5`:'grid-cols-6'} shadow-lg`}>
                                {category.imagesUrl.map((url , i)=>(
                                <div>
                                    <img
                                    key={url.split("/")[4]} 
                                    className="h-28 px-2  object-contain mx-4 w-20"
                                    src={url}
                                    alt={`Client Logo ${i + 1}`}/>
                                </div>
                                
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <section>
                    <div className="w-11/12 mx-auto pt-12">
                    <h1 className="text-3xl font-semibold text-black p-10">
                    References
                    </h1>
                    </div>
                    <div className="grid refrences grid-cols-1 gap-8 w-11/12 mx-auto my-12">
                       {projectsData.map((project , i)=>(
                        <ProjectCard key={project.clientName.split(" ")[2]}  project={project} i={i}/>
                       ))}
                    </div>
                </section>
        </main>
    )
}