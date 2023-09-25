import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel"
import Slide from "./slide";


const ProjectCard = ({project , i}) =>{
  const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <div className="lg:h-[35rem]  shadow-lg rounded-xl flex flex-col justify-around p-4"> 
         {project && <div className="flex sm:flex-row flex-col justify-around h-full sm:justify-between text-justify">
            <div className="sm:w-1/2 w-5/6 sm:mx-0 mx-auto md:w-[40%] lg:h-1/2 sm:h-full">
            <img className="sm:w-[150px] w-[15%]" src={project.image} alt="logo"/>
            <h1 className="sm:py-8">{project.clientName}</h1>
            <p>{project.description}</p>
            </div>
            <Carousel
              onChange={(index) => setCurrentSlide(index)}
              infiniteLoop={true}
              showArrows={false} 
              showThumbs={false} 
              className="sm:w-1/2 w-5/6 mx-auto sm:py-0 py-4"
              autoPlay={true}> 
              {project.projectImages.map((slide, index) => (
                <img
                  key={index}
                  src={slide}
                  className="sm:h-[28rem] h-[20rem]"
                  alt="slide"
                  />
              ))}
              </Carousel>
            </div>}
            <div className="flex sm:mx-4 mx-11">
          <Link href={`/clients/${i}`} className="flex justify-center items-center px-3 h-12 w-36 hover:opacity-75 rounded redBg text-white ">Read More</Link>
            </div>
            </div>
            )
        }

export default ProjectCard ;