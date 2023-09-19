import slide from "@/utils/navigation";
import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel"


const ProjectCard = ({project , i}) =>{
  const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <Link href={`/clients/${i}`}>
         {project && <div className="redBg rounded-xl text-white flex justify-between space-y-8 mx-4 p-10 text-justify">
            <div className="w-[40%]">
            <img src={project.image} alt="logo" width={150}/>
            <h1 className="py-8">{project.clientName}</h1>
            <p>{project.description}</p>
            </div>
            <Carousel
            onChange={(index) => setCurrentSlide(index)}
            className="w-1/2"
            infiniteLoop={true}
            showArrows={false} 
            showThumbs={false} 
            autoPlay={true}> 
            {project.projectImages && project.projectImages.map((img)=>(
                img && <img src={img} alt="image" className="w-[11rem] h-[20rem]"/>
            ))}
        </Carousel>
         </div>}
        </Link>
    )
}

export default slide(ProjectCard) ;