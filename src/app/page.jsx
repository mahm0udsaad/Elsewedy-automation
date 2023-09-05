"use client"
import { useEffect, useState } from 'react';
import Slide from './component/slide'
import Link from 'next/link';
import NavBar from "./component/navBar"
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { AnimatePresence } from 'framer-motion';
import { UserIcon, BriefcaseIcon, ChartBarIcon, BookOpenIcon } from '@heroicons/react/24/outline'; 

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
    widthClass: 'w-1/2',
  },
  {
    title: 'Happy Clients',
    number: '1000',
    icon: <UserIcon className="h-6 w-6 text-blue-500" />,
    widthClass: 'w-2/3',
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
import React from 'react';


const ProgressBar = ({ title, number, icon, widthClass }) => {
  return (
    <div class="p-4 bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800 my-5">
    <div class="flex flex-col items-center">
        <svg className='w-1/2 red'>
        {icon}
        </svg>
        <p class="ml-2 text-gray-700 text-md dark:text-gray-50">
        {title}
        </p>
    </div>
    <div class="flex flex-col justify-start">
        <p class="my-4 text-4xl font-bold text-center text-gray-800 dark:text-white">
        + {number}
        </p>
        <div class={`relative h-2 bg-gray-200 rounded w-[${widthClass}%]`}>
            <div class="absolute top-0 left-0 w-2/3 h-2 bg-[#9c1c27] rounded">
            </div>
        </div>
    </div>
</div>

  );
};


export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
    <div className="flex w-full mx-auto">      
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
     <div className="welcome">
     <h1 className='text-center text-5xl py-10'>Welcome to Elsewedy Automation</h1>
      <div className="flex sm:flex-row flex-col w-full justify-between">
        <div className='sm:w-[45%]'>
      <p className="text-lg">El-Sewedy Automation Company S.A.E. offers a comprehensive range of products and services, starting from control system Design, Integration, Retrofitting, and Development. The company delivers its services through the assembly of control and distribution panels. The company also offers system testing, field Installation, and commissioning as well as providing capacity-building services through its training center or even onsite based on customer needs. Finally, the company offers outstanding technical support and consultancy services for its customers.</p>
        </div>
        <br />
        <div className='sm:w-[45%]'>
    <p className='text-lg'>The co-founders of El-Sewedy Automation Company are “Ph.D. Engineers” with vast experience and skills in automation field practices supported by a strong academic background knowledge basis, in addition to other talented and skilled workforce in different fields of automation business. El-Sewedy Automation has shown continued strength and success in fulfilling its esteemed clients’ needs through a highly qualified technical team that provides different successful automation solutions. <Link className='text-blue-500' href={'/about'}>more info..</Link></p>
        </div>
      </div>
     </div>
    </section>
    </main>
    </>
  )
}
