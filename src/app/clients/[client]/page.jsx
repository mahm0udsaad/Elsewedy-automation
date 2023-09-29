import { PagesNav } from '@/app/component/navBar'
import { projectsData} from '../../data/clients'

export const dynamicParams = 'false'
export async function generateStaticParams() {
    const projectKeys = []
    for (let i = 0 ; i < projectsData.length ; i ++){
        projectKeys.push({client:`${i}`})
  }
  return projectKeys
}

export default async function projectDetails({params})  {
    const project = projectsData[params.client];
    
  return (
    <>
    <PagesNav />
    <main className="pt-24">
     <div className="sm:flex">
     <div className="rounded-xl text-black flex flex-col space-y-8 mx-4 p-10 text-justify w-11/12">
            <img src={project.image && project.image} alt="logo" width={150}/>
            <h1 className='text-3xl text-start'>{project.clientName}</h1>
            <p>{project.description}</p>
             {project.project && project.project.map((el)=>(
            <div> 
                <h1 className='text-2xl font-semibold text-start'>{el.title}</h1>
                <ul className='pt-4'>
                {el.list.map(li => <li className='py-2'>{li}</li>)}
              </ul>
            </div>
             ))}
            </div>
            <div className="grid grid-cols-2 gap-y-8 mx-auto w-11/12 h-auto justify-center content-center items-center lg:pt-24">
            {project.projectImages && project.projectImages.map((img , i)=>(
              i < 4 ?  <img src={img} alt="image" className="rounded-lg w-11/12  mx-auto h-[15rem]"/> : null
            ))}
            </div>
     </div>
             <div className="flex justify-between w-11/12 py-20">
             {project.projectImages.map((img , i)=>(
               project.projectImages.length > 4 && i > 3 && i < 4 ? <img src={img} alt="image" className="rounded-lg w-[25%]  mx-auto"/> : null
              ))}
             </div>
    </main>
    </>
  );
};

