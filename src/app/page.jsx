"use client"

import { useEffect, useState ,useRef} from 'react';
import Slide from './component/slide'
import Link from 'next/link';
import NavBar from "./component/navBar"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import CountUp from 'react-countup';
import { Carousel } from 'react-responsive-carousel';
import { AnimatePresence, motion, invariant, useAnimation , useInView} from 'framer-motion';
import { ChartBarSquareIcon,CogIcon,CubeIcon,PresentationChartBarIcon,UserIcon, BriefcaseIcon, ChartBarIcon, BookOpenIcon } from '@heroicons/react/24/outline'; 
import Markets from './component/markets';

const slidesData = [
  {
    imgSrc: '/images/hardware.jpg',
    text: 'El Sewedy Automation for Industrial Automation Services',
    parag:
      'El Sewedy Automation Founders have over 25 years of proven technical expertise, they established the Legal Form of El Sewedy Automation Company as S.A.E for Industrial Automation Solutions/Services Provider since 2009',
  },
  {
    imgSrc: '/images/machine.jpg',
    text: '⦁ Industrial Automation Solutions/Services Provider',
    parag:
      'El Sewedy Automation Founders have over 25 years of proven technical expertise, they established the Legal Form of El Sewedy Automation Company as S.A.E for Industrial Automation Solutions/Services Provider since 2009',
  },
  {
    imgSrc: '/images/planing.jpg',
    text: 'El Sewedy Automation for Industrial Automation Services',
    parag:
      'El Sewedy Automation Founders have over 25 years of proven technical expertise, they established the Legal Form of El Sewedy Automation Company as S.A.E for Industrial Automation Solutions/Services Provider since 2009',
  },
  {
    imgSrc: '/images/training.jpg',
    text: <>
    ⦁ El Sewedy Automation Has Privileging to Own the
    <br />
    Top Talented Automation Engineers" in the industrial Markets
  </>
  },
];
const progressData = [
  {
    title: 'Years of Experience',
    number: '26',
    icon: <BriefcaseIcon className="h-6 w-6 text-blue-500" />,
    widthClass: 'w-[60%]',
  },
  {
    title: 'Happy Clients',
    number: '1000',
    icon: <UserIcon className="h-6 w-6 text-blue-500" />,
    widthClass: 'w-[90%]',
  },
  {
    title: 'Successful Projects',
    number: '200',
    icon: <ChartBarIcon className="h-6 w-6 text-blue-500" />,
    widthClass: 'w-3/4',
  },
  {
    title: 'Trainings',
    number: '400',
    icon: <BookOpenIcon className="h-6 w-6 text-blue-500" />,
    widthClass: 'w-1/3',
  },
];
const clientsLogos = [
  '/images/clients/1-removebg-preview.png',
  '/images/clients/2-removebg-preview.png',
  '/images/clients/3-removebg-preview.png',
  '/images/clients/4-removebg-preview.png',
  '/images/clients/5-removebg-preview.png',
  '/images/clients/6-removebg-preview.png',
];
const services =[
  {
    name: 'Offering High Standard Industrial Automation Products',
    description:
      'through different Industrial Automation brands. ',
    icon: PresentationChartBarIcon, // Replace HeroIcon1 with the appropriate HeroIcons icon component
  },
  {
    name: 'Turn-Key Projects for Automated Process Solutions',
    description:
      'for major clients across a variety of industry sectors.',
    icon: CubeIcon, // Replace HeroIcon2 with the appropriate HeroIcons icon component
  },
  {
    name: 'Providing Technical Support Services',
    description:
      'Enhance our client’s business performance by providing great that add value and enhance their return on investments.',
    icon: CogIcon, // Replace HeroIcon3 with the appropriate HeroIcons icon component
  },
  {
    name: 'Conducting Outstanding Progressive Training Courses',
    description:
      'customized to different industrial automation fields using the most advanced Rockwell-Automation Workstations. ',
    icon: ChartBarSquareIcon, // Replace HeroIcon4 with the appropriate HeroIcons icon component
  },
];

const ProgressBar = ({ title, number, icon, widthClass }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="p-4 rounded-2xl w-full my-5">
    <div className="flex flex-col items-center">
       <svg
        style={{opacity:isInView? '1':' 0'}}
        className='w-1/2 red transtion duration-300'>
        {icon}
        </svg>
        <p className="ml-2 text-gray-700 text-md dark:text-gray-50">
        {title}
        </p>
    </div>
    <div
    ref={ref}
    className="flex flex-col justify-start">
        <div className="w-full flex justify-center my-5 text-center text-gray-800 dark:text-white">
         <p className='text-4xl'>+</p>
         {isInView?(
         <CountUp className='text-4xl font-bold' end={number} duration={1} />
         ):null}
        </div>
        <div className={`relative h-2 rounded w-[${widthClass}%]`}>
            <div className="absolute top-0 left-0 w-2/3 h-2 bg-[#9c1c27] rounded">
            </div>
        </div>
    </div>
</div>

  );
};
function ServicesCard({ isInView,feature }) {
  return (
    <motion.div
    initial={{y:-20}}
    animate={{y:isInView?0:-30}}
    transition={{duration:.7}}
    className="relative pl-16">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-800">
          {feature.icon && (
            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
          )}
        </div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          {feature.name}
        </h1>
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">
        {feature.description}
      </dd>
    </motion.div>
  );
}

function Clients() {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold  text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="flex items-center space-x-8 pt-5 ">
          {clientsLogos.map((logoUrl, index) => (
            <img
              key={index} 
              className="grayscale h-32 col-span-2 w-full object-contain "
              src={logoUrl}
              alt={`Client Logo ${index + 1}`}
              width={170}
              height={60}
            />
          ))}
        </div>
      </div>
    </div>
  );}
export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const solutionRef = useRef(null);
  const welcomeRef = useRef(null)
  const isInView = useInView(solutionRef);
  const wIsInView = useInView(welcomeRef);
  return (
    <>
    <main className="w-full bg-white">
    <Carousel
    onChange={(index) => setCurrentSlide(index)}
    infiniteLoop={true}
    showArrows={false} 
    showThumbs={false} 
    autoPlay={true}> 
    {slidesData.map((slide, index) => (
      <Slide
        key={index}
        imgSrc={slide.imgSrc}
        text={slide.text}
        parag={slide.parag}
        isActive={index === currentSlide}
        />
    ))}
    </Carousel>
    <Clients />
    <div className="flex w-11/9 mx-auto">      
      {progressData.map((data, index) => (
        <ProgressBar
          key={index}
          title={data.title}
          number={data.number}
          icon={data.icon}
          widthClass={data.widthClass}
        />
      ))}
    </div>
    <section className='w-11/12 mx-auto'>
     <motion.div 
     className="welcome">
     <h1 
      ref={welcomeRef} 
     className='text-center text-5xl py-10'>Welcome to Elsewedy Automation</h1>
      <div className="flex sm:flex-row flex-col w-full justify-between">
      <div className='sm:w-[45%]'>
        <motion.p
         initial={{opacity:0 , x:-50}}        
         animate={{ opacity: wIsInView ? 1 : 0, x: wIsInView ? 0 : -50 }}
         transition={{duration:.5}}
        className="text-lg">El-Sewedy Automation Company S.A.E. offers a comprehensive range of products and services, starting from control system Design, Integration, Retrofitting, and Development. The company delivers its services through the assembly of control and distribution panels. The company also offers system testing, field Installation, and commissioning as well as providing capacity-building services through its training center or even onsite based on customer needs. Finally, the company offers outstanding technical support and consultancy services for its customers.</motion.p>
        </div>
        <br />
        <div className='sm:w-[45%]'>
        <motion.p
        initial={{opacity:0 , x:50}}       
        animate={{ opacity: wIsInView ? 1 : 0, x: wIsInView ? 0 : 50 }}
        transition={{duration:.5}}
        className='text-lg'>The co-founders of El-Sewedy Automation Company are “Ph.D. Engineers” with vast experience and skills in automation field practices supported by a strong academic background knowledge basis, in addition to other talented and skilled workforce in different fields of automation business. El-Sewedy Automation has shown continued strength and success in fulfilling its esteemed clients’ needs through a highly qualified technical team that provides different successful automation solutions. <Link className='text-blue-500' href={'/about'}>more info..</Link></motion.p>
        </div>
      </div>
     </motion.div>
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:isInView? 1:0}}
        ref={solutionRef} 
        className="solution-section w-11/12 mx-auto pt-10">
          <h1  className="text-5xl font-semibo text-center">
            Solution & Services
          </h1>
          <div className="py-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {services.map((feature, index) => (
            <ServicesCard isInView={isInView} feature={feature} key={index} />
            ))}
          </div>
        </motion.div>
    </section>
    <section>
      <div className="markets pt-10">
        <h1 className="text-4xl font-semibold text-center">
          Industrial Markets
        </h1>
        <Markets />
      </div>
      <div className="products">
        <h1 className="text-4xl font-semibold text-center">products Brands</h1>
        <div className="flex">

        </div>
      </div>
    </section>
    </main>
    </>
  )
}
  

