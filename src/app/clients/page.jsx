"use client"
import Lable from "../component/lable"
import ProjectCard from "../component/projectsCard"
import { PageSlide } from "../component/slide"
import { generateUniqueKey } from "../component/table"
import { projectsData } from "../data/clients"
import { categoriesClients } from "../data/images"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

export default function ClientsPage(){


    return(
        <main className="">
                <PageSlide text={"Our Clients"} imgSrc={'/images/clients/head.jpg'}/>
                <h1 className="text-center text-lg py-6 redColor">Thank you ,, <br />
                Successful Companies put their trust in our Company</h1>
                <div>
                    {categoriesClients.map((category , i) =>(
                        <div id={category.title.split(" ")[0].toLocaleLowerCase()} key={category.title.split(" ")[0]} className="h-full">
                            <h1 className="text-4xl font-semibold py-4 text-center">{category.title}</h1>
                            <ul className={`w-11/12 lg:w-5/6 p-4 mx-auto grid ${category.imagesUrl.length < 6 ? `grid-cols-5`:'grid-cols-6'} shadow-lg`}>
                                {category.imagesUrl.map((url , i)=>(
                                <div>
                                    <img
                                    key={url.split("/")[4]} 
                                    className="h-28 px-2  object-contain mx-4 w-28"
                                    src={url}
                                    alt={`Client Logo ${i + 1}`}/>
                                </div>
                                
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <section>
                    <div className=" pt-12">
                    <Lable text={"References"}/>
                    </div>
                    <div className="grid refrences grid-cols-1 sm:gap-8 sm:w-11/12 mx-auto sm:my-12">
                       {projectsData.map((project , i)=>(
                        <ProjectCard key={project.clientName.split(" ")[2]}  project={project} i={i}/>
                       ))}
                    </div>
                </section>
        </main>
    )
}