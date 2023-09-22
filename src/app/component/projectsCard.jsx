import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel"


const ProjectCard = ({project , i}) =>{
  const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <div className="shadow-lg rounded-xl p-10"> 
         {project && <div className="flex justify-between mx-4 text-justify">
            <div className="sm:w-[40%]">
            <img src={project.image} alt="logo" width={150}/>
            <h1 className="py-8">{project.clientName}</h1>
            <p>{project.description}</p>
            </div>
            <Carousel
            onChange={(index) => setCurrentSlide(index)}
            className="sm:w-1/2"
            infiniteLoop={true}
            showArrows={false} 
            showThumbs={false} 
            autoPlay={true}> 
            {project.projectImages && project.projectImages.map((img)=>(
                img && <img src={img} alt="image" className="sm:w-[11rem] h-[26rem]"/>
            ))}
            </Carousel>
            </div>}
          <Link href={`/clients/${i}`} className="hover:opacity-75 rounded redBg text-white p-5">Read More</Link>
            </div>
            )
        }

export default ProjectCard ;