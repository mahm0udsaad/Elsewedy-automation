"use client"
import { useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { motion, useInView } from "framer-motion";
import Slide from "../component/slide";
import Link from "next/link";
import {LuBrainCircuit , LuHardHat} from 'react-icons/lu'
import { FaLock, FaUser, FaHandshake, FaFlag, FaHeart, FaCheck, FaBalanceScale } from 'react-icons/fa';
import { ServicesCard } from "../page";
import TimeLine from "../component/timeline";

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
const coreValues = [
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
  },
  {
    title: 'Compliance',
    description: 'Comply with all Internal/External Rules and Regulations through strict company policy and responsible business practices. Ensure confidential information protection and privacy while avoiding any potential conflict of interest.',
    icon: FaBalanceScale
  }
];

function ValuesCards({value}){
  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});
  const shadow = useRef(null);
  const shadowInview = useInView(shadow);

  return (
   <div ref={ref} className="flex w-full justify-center">
     <motion.div
    initial={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }}
    animate={{ boxShadow: shadowInview?'0px 5px 15px rgba(0, 0, 0, 0.2)':'0px 0px 0px rgba(0, 0, 0, 0)' }}
    transition={{duration:.5}}
    className={`relative  max-w-sm rounded overflow-hidden p-5`}>

    <div className="flex flex-col items-center justify-center">
       <motion.div
         initial={{ boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)' }}
         animate={{ boxShadow: isInView?'0px 5px 20px rgba(0, 0, 0, 0.2)':'0px 0px 0px rgba(0, 0, 0, 0)' }}
         className={`icon  left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[#DAD4B5]  shadow-2xl`}>
          {value.icon && (
            <value.icon className="shadow-2xl h-6 w-6 text-white" aria-hidden="true" />
          )}
        </motion.div>

        <div className="py-4 text-center">
          <div ref={shadow} className="font-bold text-xl mb-2">{value.title}</div>
          <p class="text-gray-700 text-base">
            {value.description}
          </p>
        </div>
    </div>
    
    </motion.div>
   </div>
  )
}
export default function About() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const aboutRef = useRef(null)
  const valuesRef = useRef(null)
  const wIsInView = useInView(aboutRef , {once:true})
  const visInView = useInView(valuesRef , {once:true})

  return (
    <>
    <main className="w-full overflow-x-hidden">
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
      <section className="w-11/12 mx-auto">
      <motion.div 
       className="welcome">
       <h1 
        className='text-center text-3xl sm:text-5xl py-10 leading-10'>About <br /> El-Sewedy Automation</h1>
        <div
        ref={aboutRef} 
        className=''>
          <motion.p
           initial={{opacity:0 , x:-50}}        
           animate={{ opacity: wIsInView ? 1 : 0, x: wIsInView ? 0 : -50 }}
           transition={{duration:.5}}
          className="text-lg font-semibold leading-9">El Sewedy Automation is a leading Egyptian company in designing, supplying, installing, and commissioning of industrial automation systems for a wide range of industrial markets. The company Founders have over 25 years of proven technical expertise, they established the Legal Form of El Sewedy Automation Company as S.A.E for Industrial Automation Solutions/Services Provider since 2009. 
          Over the years, “El Sewedy Automation" has gained its Goodwell and Reputation for its quality products & services through its talented team who brings their extensive knowledge in industrial automation technology and practices to provide the company customers with innovative, reliable, and cost-effective automation solutions/services “On-time and within Budget”. 
          El Sewedy Automaton offers the lowest market price while maintaining the high quality of its
          solution/service to help its customers to improve business efficiency and maximize their
          organization’s profitability.
          El-Sewedy Automation, one of the top-ranked companies in Egypt for providing outstanding, remarkable, and professional training courses such as (PAC programming, SCADA systems, HMI...etc.) through its training center as well as delivering onsite training services using its own workstations kits with the guidance of company's top talented “PhDs Engineers”. 
          El-Sewedy Automation policy is highly considering customer retention and loyalty prospects through promoting the best-in-class products/services for its clients. El-Sewedy Automation has been recognized by its clients as "The Best After-Sale Service</motion.p>
          </div>
       </motion.div>
      </section>
      <section className="w-11/12 mx-auto mt-10">
      <div 
      ref={valuesRef} 
      className="py-10 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
      {values.map((feature, index) => (
        <ServicesCard isInView={visInView} feature={feature} key={index} to={feature.to} />
        ))}
      </div>
      </section>
      <section className="timeline my-20">
        <h1 className="text-4xl font-bold text-center">Company Historical Evolution</h1>
       <TimeLine />
      </section>
      <section className="w-6/5 mx-auto my-5">
      <div className="core-values grid sm:grid-cols-3 sm:grid-cols-2 gap-5 w-3/4 mx-auto">
        <h1 className="flex items-center text-5xl font-semibold text-center">
          Core Values
        </h1>
      {coreValues.map((value, index) => (
        <ValuesCards key={index} value={value}  />
      ))}
      </div>
      </section>
    </main>
    </>
  )
}