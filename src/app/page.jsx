"use client"

import { useEffect, useState ,useRef} from 'react';
import Slide from './component/slide'
import Link from 'next/link';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import CountUp from 'react-countup';
import { Carousel } from 'react-responsive-carousel';
import { AnimatePresence, motion , useInView} from 'framer-motion';
import { ChartBarSquareIcon,CogIcon,CubeIcon,PresentationChartBarIcon,UserIcon, BriefcaseIcon, ChartBarIcon, BookOpenIcon } from '@heroicons/react/24/outline'; 
import Markets from './component/markets';
import { clientsLogos , productsLogos } from './data/images';

const slidesData = [
  {
    imgSrc: '/images/hardware.jpg',
    text: 'El Sewedy Automation for Industrial Automation Services',
    parag:
      'El Sewedy Automation Founders have over 25 years of proven technical expertise, they established the Legal Form of El Sewedy Automation Company as S.A.E for Industrial Automation Solutions/Services Provider since 2009',
  },
  {
    imgSrc: '/images/machine.jpg',
    text: 'Provide Sustainability and Innovation Engineering and Services Technology.',
    
  }, {
    imgSrc: '/images/idea.jpg',
    text: 'Industrial Automation Solutions/Services Provider',
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
     El Sewedy Automation Has Privileging to Own the
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
    title: 'Successful Projects',
    number: '200',
    icon: <ChartBarIcon className="h-6 w-6 text-blue-500" />,
    widthClass: 'w-3/4',
  },
  {
    title: 'Happy Clients',
    number: '1000',
    icon: <UserIcon className="h-6 w-6 text-blue-500" />,
    widthClass: 'w-[90%]',
  },
  {
    title: 'Trainings',
    number: '400',
    icon: <BookOpenIcon className="h-6 w-6 text-blue-500" />,
    widthClass: 'w-1/3',
  },
];
const services =[
  {
    name: 'Offering High Standard Industrial Automation Products',
    description:
      'through different Industrial Automation brands. ',
    icon: PresentationChartBarIcon, 
    to :'/products'
  },
  {
    name: 'Turn-Key Projects for Automated Process Solutions',
    description:
      'for major clients across a variety of industry sectors.',
    icon: CubeIcon, 
    to :'/services'
  },
  {
    name: 'Providing Technical Support Services',
    description:
      'Enhance our client’s business performance by providing great that add value and enhance their return on investments.',
    icon: CogIcon, 
    to :'/services'

  },
  {
    name: 'Conducting Outstanding Progressive Training Courses',
    description:
      'customized to different industrial automation fields using the most advanced Rockwell-Automation Workstations. ',
    icon: ChartBarSquareIcon, 
    to:'/training'

  },
];
const ProgressBar = ({ title, number, icon, widthClass }) => {
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  const shadow = useRef(null);
  const shadowInview = useInView(shadow);
  return (
    <motion.div
    initial={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }}
    animate={{ boxShadow: shadowInview?'0px 5px 10px rgba(255, 0, 0, 0.2)':'0px 0px 0px rgba(0, 0, 0, 0)' }}
    transition={{duration:.5}}
    className="p-4 rounded-2xl my-5  w-11/12 sm:hover:-translate-y-5 transition duration-300 cursor-pointer">
    <div className="flex flex-col items-center">
       <svg
        style={{opacity:isInView? '1':'0'}}
        className='w-1/2 red transtion duration-300'>
        {icon}
        </svg>
        <p className="text-md text-center">
        {title}
        </p>
    </div>
    <div
    ref={ref}
    className="flex flex-col justify-start">
        <div className="w-full flex justify-center my-5 text-center text-gray-800">
         <p className='text-4xl'>+</p>
         {isInView?(
         <CountUp className='text-4xl font-bold' end={number} duration={1} />
         ):null}
        </div>
        <div className={`relative h-2 rounded w-[${widthClass}%] bg-[#ff00003d]`}>
            <div 
            ref={shadow}
            className="absolute top-0 left-0 w-2/3 h-2 bg-[#9c1c27] rounded">
            </div>
        </div>
    </div>
</motion.div>

  );
};
export function ServicesCard({isInView, feature , to}) {
  return (
    <motion.div
    initial={{y:50}}
    animate={{y:isInView?0:30}}
    transition={{duration:.7}}
    className="relative pl-16">
      <dt className="text-base font-semibold leading-7 text-gray-900">
        <motion.div
         initial={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }}
         animate={{ boxShadow: isInView?'0px 5px 20px rgba(255, 0, 0, 0.2)':'0px 0px 0px rgba(0, 0, 0, 0)' }}
        className="icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-800 shadow-2xl">
          {feature.icon && (
            <feature.icon className="shadow-2xl h-6 w-6 text-white" aria-hidden="true" />
          )}
        </motion.div>
        <h1 className="text-xl font-semibold leading-6 text-gray-900">
          {feature.name}
        </h1>
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">
        {feature.description} {to && <Link href={to} className='text-blue-500 hover:opacity-50'>More info...</Link>}
      </dd>
    </motion.div>
  );
}
export function Clients() {
  const logosContainer = useRef(null);
  const [stop , setStop ] = useState(false)
  const [x, setX] = useState(0);

  useEffect(() => {
    if (x === 7000) {
      setX(0);
    }

    const intervalId = setInterval(() => {
      stop ? setX(x) :setX((prevX) => prevX + 1);
      logosContainer.current.scrollLeft = x || 0; 
    }, 15);

    return () => clearInterval(intervalId);
  }, [x]);

  return (
      <div className="bg-white py-10 overflow-x-hidden">
      <div className="mx-auto lg:px-8">
        <div ref={logosContainer} className="overflow-x-hidden flex items-center pt-5 ">
          {clientsLogos.map((logoUrl, index) => (
            <img
              key={index} 
              className="h-32 col-span-2  object-contain mx-4 w-40"
              src={logoUrl}
              alt={`Client Logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
)}
export default function Home() {
  const [repeat, setRepeat] = useState(false);
  const [start , setStart] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0);
  const solutionRef = useRef(null);
  const welcomeRef = useRef(null)
  const productsRef = useRef(null)
  const productsisInView = useInView(productsRef,{once:true});
  const isInView = useInView(solutionRef , {once:true});
  const wIsInView = useInView(welcomeRef , {once:true});


  return (
    <>
    {start ? (
      <div className="h-screen bg-white flex flex-col justify-center">
        <h1 className='text-center text-6xl'></h1>
      </div>
    ):(
      <main className="w-full bg-white overflow-x-hidden pt-20">
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
      <div className="grid grid-cols-2 sm:grid-cols-4 w-11/12 mx-auto">      
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
        className='text-center text-5xl py-10'>Welcome to El Sewedy Automation</h1>
        <div 
        className="flex sm:flex-row flex-col w-full justify-between text-justify leading-10">
        <div
        ref={welcomeRef} 
        className='sm:w-[45%]'>
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
          className='text-lg'>The co-founders of El-Sewedy Automation Company are “Ph.D. Engineers” with vast experience and skills in automation field practices supported by a strong academic background knowledge basis, in addition to other talented and skilled workforce in different fields of automation business. El-Sewedy Automation has shown continued strength and success in fulfilling its esteemed clients’ needs through a highly qualified technical team that provides different successful automation solutions. <Link className='text-blue-500' href={'/about'}>Read more..</Link></motion.p>
          </div>
        </div>
       </motion.div>
          <motion.div
          initial={{opacity:0}}
          animate={{opacity:isInView? 1:0}}
          className="solution-section w-11/12 mx-auto pt-10">
            <h1  className="text-5xl font-semibo text-center">
              Solution & Services
            </h1>
            <div 
            ref={solutionRef} 
            className="py-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((feature, index) => (
              <ServicesCard isInView={isInView} feature={feature} key={index} to={feature.to} />
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
          <h1 className="text-4xl font-semibold text-center">Products Brands</h1>
          <div className="w-11/12 mx-auto grid sm:grid-cols-4 grid-cols-2">
          {productsLogos.map((imageUrl, index) => (
          <motion.div
            ref={productsRef}
            key={index}
            initial={{ y:-20,opacity: 0}}
            animate={{y:productsisInView?-20:0, opacity:productsisInView? 1:0}}
            transition={{duration:.7}}
            className='h-52 flex items-center justify-center'
          >
            <img
              src={imageUrl}
              alt={`Partner ${index + 1}`}
              className="rounded-lg sm:w-[200px] w-[150px]"
              width={200} 
              height={120} 
            />
          </motion.div>
        ))}
          </div>
        </div>
      <h2 className="text-center text-4xl font-semibold text-center">
        Our Clients
      </h2>
      <Clients />
      </section>
      </main>
    )}
    </>
  )
}