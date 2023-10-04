"use client"
import { FaLock, FaUser, FaHandshake, FaFlag, FaHeart, FaCheck, FaBalanceScale } from 'react-icons/fa';
import {BiRightArrow} from 'react-icons/bi'
import {LuBrainCircuit , LuHardHat} from 'react-icons/lu'
import { Carousel } from "react-responsive-carousel";
import { motion, useInView } from "framer-motion";
import TimeLine from "../component/timeline";
import { useContext, useRef, useState , useEffect } from "react";
import { ServicesCard } from "../page";
import {Slide} from "../component/slide";
import { MyContext } from '../context';
import { usePathname } from 'next/navigation';

const slidesData = [
  {
    text: "Our Vision",
    parag: "To Become the World Class Strategic and Innovative Engineering Solutions/Services Provider in the Middle East.",
    imgSrc: "/images/about/slide-1.jpg" 
  },
  {
    text: "Our Mission",
    parag: `El-Sewedy Automation Company exists to ensure customer satisfaction through innovative, high-quality, and on-time delivery of its solutions/services supported by its talented team and suppliers’ excellency`,
    imgSrc: "/images/about/slide-2.jpg" 
  },
  {
    text: "Our Team",
    parag: `El-Sewedy Automation Team Members are “Ph.D. Engineers” with vast experience and skills in automation field practices supported by a strong academic background knowledge base.`,
    imgSrc: "/images/about/slide-3.jpg" 
  }
];
const values =[
  {
    name: 'Our Vision',
    description:
      'To Become the World Class Strategic and Innovative Engineering Solutions/Services Provider in the Middle East. ',
    icon: LuBrainCircuit, 
  },
  {
    name: 'Our Mission',
    description:
      'El-Sewedy Automation Company exists to ensure customer satisfaction through innovative, high-quality, and on-time delivery of its solutions/services supported by its talented team and suppliers.',
    icon: LuHardHat, 
  }
];
const coreValuesFirst = [
  {
    title: 'Integrity',
    description: 'Interact with integrity and high ethical standards.',
    icon: FaLock ,
  },
  {
    title: 'Customer Focus',
    description: 'Focus on customer insights through significant CRM to provide adequate solutions that are efficient and cost-effective.',
    icon: FaUser
  },
  {
    title: 'People',
    description: 'Our primary focus is our team; we are creating an outstanding work model that pushes our team members beyond their limits to ensure their growth and prosperity.',
    icon: FaHandshake 
  },
]
const coreValuesSeconed = [
  {
    title: 'Quality',
    description: 'We always strive for improvement and perfect quality; therefore, we challenge ourselves toward a high standard benchmark in providing our services.',
    icon: FaFlag 
  },
  {
    title: 'Health and Safety Policy',
    description: 'We are focused on creating an environment with zero harm to people, property, and the environment.',
    icon: FaHeart 
  },
  {
    title: 'Commitment',
    description: 'We embrace our personal duty to fulfill our obligations and promises for our clients, colleagues, partners, and the communities in which we operate while accepting the consequences of our actions.',
    icon: FaCheck 
  }
];
const valuesInfo = [...coreValuesFirst   , ...coreValuesSeconed]

function ValuesCards({value }){
  const ref = useRef(null);
  const isInView = useInView(ref , {once:true});
  const shadow = useRef(null);
  const shadowInview = useInView(shadow);
  return (
    <motion.div
    initial={{y:30}}
    ref={ref}
    animate={{y:isInView? 0: 30}}
    transition={{duration:.7}}
    className="relative pl-12 lg:pl-16 mb-2">
      <dt className="text-lg font-semibold text-white text-justify">
        <motion.div
         initial={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }}
         animate={{ boxShadow: isInView?'0px 5px 20px rgba(255, 0, 0, 0.2)':'0px 0px 0px rgba(0, 0, 0, 0)' }}
        className="redBg icon absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-800 shadow-2xl">
          {value.icon && (
            <value.icon  className="shadow-2xl h-6 w-6 text-white" aria-hidden="true" />
          )}
        </motion.div>
        <h1 className="text-lg font-semibold leading-6 text-white">
          {value.title}
        </h1>
        <p className="text-sm  font-light pt-2">{value.description}</p>
      </dt>
    </motion.div>
  )
}
export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const path = usePathname()
  const aboutRef = useRef(null)
  const valuesRef = useRef(null)
  const wIsInView = useInView(aboutRef , {once:true})
  const visInView = useInView(valuesRef , {once:true})
  const lastRef = useRef(null)
  const isValuesInview = useInView(lastRef )


  return (
    <>
    <main className="w-full">
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
      <section className="pt-12">
      <motion.div 
       className="welcome">
       <h1 
        className='text-center text-2xl font-semibold redColor sm:text-5xl py-10 leading-10'>About us</h1>
          <div
        ref={aboutRef} 
        className=''>
          <div className="sm:flex  lg:mx-8">
          <motion.div
           initial={{x:-50}}        
           animate={{  x: wIsInView ? 0 : -50 }}
           transition={{duration:.5}}
          className="about-paragraph leading-6 sm:w-1/2 text-justify flex justify-around flex-col text-sm redBg p-3 text-white">El Sewedy Automation is a leading Egyptian Company in designing, supplying, installing, and
          commissioning of industrial automation systems for a wide range of industrial markets. Company
          Founders have over 25 years of proven technical expertise, they established the Legal Form of El
          Sewedy Automation Company as S.A.E for Industrial Automation Solutions/Services Provider since
          2009.
          <ul className="pt-2 space-y-2 flex flex-col">
          <li className='flex'>
          <span><BiRightArrow /></span>
          Over the years, "El Sewedy Automation" has gained its Goodwell and Reputation for its quality
          products & services through its talented team who brings their extensive knowledge in industrial
          automation technology and practices to provide the company customers with innovative, reliable,
          and cost-effective automation solutions/services "On-time and within Budget".
          </li>
          <li className='flex '>
          <span><BiRightArrow /></span>
           El Sewedy Automation offers the lowest market price while maintaining the high quality of its
          solution/service to help its customers to improve business efficiency and maximize their
          organization's profitability.
          </li>
          <li className='flex '>
          <span><BiRightArrow /></span>
           El-Sewedy Automation, one of the top ranked companies in Egypt for providing outstanding,
          remarkable, and professional training courses such as (PLC programming, SCADA systems and
          HMI...etc.) through its training centre using its own original working stations with the guidance
          of company's top talented "PhDs Engineers"..
          </li>
          </ul>
          </motion.div>
          <div className="sm:flex items-center justify-center sm:w-1/2">
            <motion.img 
            initial={{x : 50}}  
            animate={{x:wIsInView ? 0 : 50}}
           transition={{duration:.5}}
            src="images\about\carol-jeng.jpg" alt="image" />
          </div>
          </div>
          </div>
       </motion.div>
      </section>
      <section className="w-11/12 mx-auto mt-10">
      <div 
      ref={valuesRef} 
      className="py-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
      {values.map((value, index) => (
        <ServicesCard isInView={visInView} feature={value} key={index} to={value.to} />
        ))}
      </div>
      </section>
      <section className="timeline pt-12">
        <h1 className="text-4xl font-semibold redColor text-center">Company Historical Evolution</h1>
       <TimeLine />
      </section>
      <section className=" w-11/12 mx-auto my-5">
        <h1 className="text-4xl py-12 font-semibold redColor font-semibold text-center">
          Core Values
        </h1>
        <div ref={lastRef} className="sm:flex items-stretch justify-around md:h-full">
        <motion.div
          initial={{ x: -40 }}
          animate={{ x: isValuesInview ? 0 : -40 }}
          transition={{ duration: 0.2 }}
          className="md:w-1/2 redBg pl-2 lg:pl-4 p-3 flex flex-col justify-between"
        >
          {valuesInfo.map((value, index) => (
            <ValuesCards key={index} value={value} />
          ))}
        </motion.div>
        <div className="sm:flex items-center justify-center sm:w-1/2">
          <motion.img
            initial={{ x: 40 }}
            animate={{ x: isValuesInview ? 0 : 40 }}
            transition={{ duration: 0.2 }}
            src="images\about\headway.jpg"
            alt="image"
          />
        </div>
        </div>
      </section>
    </main>
    </>
  )
}