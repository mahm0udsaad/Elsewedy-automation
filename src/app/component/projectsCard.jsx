import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel"


const ProjectCard = ({project , i}) =>{
  const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <div className="lg:h-[45vh] shadow-lg rounded-xl flex flex-col justify-around p-4"> 
         {project && <div className="sm:flex justify-between text-justify">
            <div className="sm:w-1/2 h-full">
            <img src={project.image} alt="logo" width={150}/>
            <h1 className="py-8">{project.clientName}</h1>
            <p>{project.description}</p>
            </div>
            {/* <Carousel
            onChange={(index) => setCurrentSlide(index)}
            infiniteLoop={true}
            showArrows={false} 
            showThumbs={false} 
            className="w-1/2"
            autoPlay={true}> 
            {project.projectImages && project.projectImages.map((img)=>(
                img && <img src={img} alt="image" className="sm:w-[11rem] h-[26rem]"/>
            ))}
            </Carousel> */}
            </div>}
            <div className="flex mx-4 ">
          <Link href={`/clients/${i}`} className="flex justify-center items-center px-3 h-12 w-36 hover:opacity-75 rounded redBg text-white ">Read More</Link>
            </div>
            </div>
            )
        }

export default ProjectCard ;