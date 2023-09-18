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
    <main className="pt-24">
       <div className="rounded-xl text-black flex flex-col space-y-8 mx-4 p-10">
            <img src={project.image} alt="logo" width={150}/>
            <h1>{project.clientName}</h1>
            <p>{project.description}</p>

             {project.project&& project.project.map((el)=>(
            <div> 
                <h1>{el.title}</h1>
                <ul className='pt-4'>
                {el.list.map(li => <li className='py-2'>{li}</li>)}
              </ul>
            </div>
             ))}
            <div className="grid grid-cols-2 gap-8">
            {project.projectImages && project.projectImages.map((img)=>(
               img && <img src={img} alt="image" className="w-11/12 mx-auto h-[25rem]"/>
            ))}
            </div>
    </div>
    </main>
  );
};

