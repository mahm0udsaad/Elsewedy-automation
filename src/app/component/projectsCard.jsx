import Link from "next/link";
import { useState } from "react";
import { Carousel } from "react-responsive-carousel"


const ProjectCard = ({project , i}) =>{
  const [currentSlide, setCurrentSlide] = useState(0);

    return(
        <Link href={`/clients/${i}`}>
        <div className="redBg rounded-xl text-white flex flex-col space-y-8 mx-4 p-10">
            <img src={project.image} alt="logo" width={150}/>
            <h1>{project.clientName}</h1>
            <p>{project.description}</p>
            <Carousel
            onChange={(index) => setCurrentSlide(index)}
            infiniteLoop={true}
            showArrows={false} 
            showThumbs={false} 
            autoPlay={true}> 
            {project.projectImages && project.projectImages.map((img)=>(
                <img src={img} alt="image" className="lg:w-[11rem] lg:h-[20rem]"/>
            ))}
        </Carousel>
         </div>
        </Link>
    )
}

export default ProjectCard ;