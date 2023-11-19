"use client"

import { CourseTap , ServicesTap} from "../component/productTaps"
import  { CondensedCourseTable} from "../component/table"
import {data ,allenBradleyLegacyCourses,allenBradleyCourses,siemensCourses,electricalPowerCourses,mechanicalCourses,instrumentationControlCourses,softSkillsCourses, condensedTrainingPackages, coursesCategory} from '../data/courses'
import {useState } from "react"
import { CourseTable} from "../component/table"
import { PagesNav } from "../component/navBar"
import Lable from "../component/lable"

export default function Training() {
  const [openTab, setOpenTap] = useState(1);
  return (
    <>
    <head>
    <title>El Sewedy Automation Training Center</title>
    <meta name="description" content="Empower your career in automation with El Sewedy Automation Training Center. Explore our cutting-edge courses, led by industry experts, designed to enhance your skills and drive success in the field of automation our courses includ Rockwell Automation Courses , semins courses , Dutchmann ." />
  </head>
    <PagesNav />
    <main className="flex flex-col min-h-screen pt-20">
    <section className="sm:w-5/6 mx-auto my-5">
        <div className="intro sm:text-justify">
          <div className="sm:flex sm:h-[22rem] justify-around py-4">
            <div className="flex justify-center sm:w-1/2">
            <img className="w-11/12" src="/images/gallery/training/IMG-20230513-WA0012.jpg" alt="image" />
            </div>
          <div className= "flex sm:w-1/2 justify-center">
          <div className="w-11/12 flex flex-col justify-around">
          <div
          className="redBg">
          <h1 className="lg:text-3xl md:text-xl font-semibold text-center text-white p-3">
           Our Training Center
          </h1>
        </div>
          <div className="">
            <h1 className=" text-start text-lg font-semibold"> Who Can Join ? </h1>
            <p className="">Maintenance Engineers, Programmers, and there are special training programs for students.</p>
          </div>
          <div className="">
            <h1 className=" text-start text-lg font-semibold">Why Should You Join El-Sewedy Automation Training Courses? </h1>
            <p className=" pt-1">If you would like to benefit from long working experience and talented experts and to learn how to operate and solve sophisticated automation control problems in a short time with minimal effort, you have to register with El-Sewedy Automation since it owns worldwide experts in Programming of PLC, SCADA, Drives...etc.</p>
          </div>
          </div>
          </div>
          </div>
          <div className="sm:flex sm:h-[22rem] justify-around flex-row-reverse pt-2">
            <div className="flex justify-center sm:w-1/2">
            <img className="w-11/12" src="/images/gallery/training/IMG_1105.JPG" alt="image" />
            </div>
          <div className="flex sm:w-1/2 justify-center">
          <div className="w-11/12 flex flex-col justify-around">
          <div>
          <h1 className="text-xl font-semibold text-star">Who Are Your Instructors? </h1>
            <p className="pt-3 md:pt-0">El-Sewedy Automation has a team of professionals “Group of Ph.D. Engineers” in Allen Bradly, SIMATIC, SCADA, HMI, and Drives. The training team is using training kits dedicated to training courses to let trainees test and check their automation exercises practically.</p>
          </div>
          <div>
            <h1 className="text-xl font-semibold text-start">Where Training Courses Can Be Conducted?</h1>
            <p className="pt-3 md:pt-0">El-Sewedy Automation has its own training class in the company location. Also, El-Sewedy Automation offers onsite training for its customers' convenience or even in any suitable training places (Hotels, Other Training Centers... etc.).</p>
          </div>
          </div>
          </div>
          </div>
       </div>
      </section>
      <section>
        <h1 className="text-4xl text-center font-semibold py-8">
        Our Courses
        </h1>
        <ul
            className="sm:w-11/12 flex justify-between sm:justify-around sm:mx-auto items-center mb-0 list-none pt-3 md:pt-0 pb-4"
            role="tablist"
          >
        {data.map((title,i)=>(
            <CourseTap key={title.color} logo={title.imgUrl} color={title.color}  openTab={openTab} setOpenTap={setOpenTap} i={i + 1} />
        ))}
        </ul>

        <ServicesTap i={1} openTab={openTab}>
        <CourseTable isRockWell={true} courseData={allenBradleyCourses} title={"Allen Bradley"}/>
        <CondensedCourseTable isRockWell={true} name='Rockwell' courseData={condensedTrainingPackages} title={"Allen Bradley (Condensed Training Packages)"}/>
        <CourseTable isRockWell={true} name='Rockwell' courseData={allenBradleyLegacyCourses} title={"Allen Bradley (Legacy Courses)"}/>
        </ServicesTap>
        <ServicesTap i={2} openTab={openTab}>
        <CourseTable courseData={siemensCourses} title={"Siemens"}/>
        </ServicesTap>
        <ServicesTap i={3} openTab={openTab}>
        <CourseTable courseData={electricalPowerCourses} title={"Electrical Power"}/>
        </ServicesTap>
        <ServicesTap i={4} openTab={openTab}>
        <CourseTable courseData={instrumentationControlCourses} title={"Instrumentaion Control"}/>
        </ServicesTap>
        <ServicesTap i={5} openTab={openTab}>
        <CourseTable courseData={mechanicalCourses} title={"Mechanical"}/>
        </ServicesTap>
       
        <ServicesTap i={6} openTab={openTab}>
        <CourseTable courseData={softSkillsCourses} title={'Soft Skills'} />
        </ServicesTap>
      </section>
      <section>
      <Lable text={"Service Agreement"}/>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <p className="text-lg font-semibold">Reservation:</p>
          <p>Before 2 weeks of the starting date</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Course Location:</p>
          <p>At our training center:</p>
          <p>27 Orabi St, El-Azbakia, Downtown, 11111 – Cairo, Egypt</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Course Transfer:</p>
          <p>The course can be transferred to the customer on-site in case of a complete group booking.</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Group Booking for Other Dates:</p>
          <p>In Case of Conducting the training course for the complete group (consisting of 5 persons as minimum) in other dates, please suggest the training programs dates and please inform us before two weeks of these dates to be able to manage the training requirements from our side.</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Training Lab:</p>
          <p>Fully equipped training lab for Allen Bradley and Siemens courses (Laptop and hardware training simulator for each two trainees).</p>
        </div>
        <div className="mb-4">
          <p className="text-lg font-semibold">Contact with Training Director:</p>
          <p>E-mail: noha.samir@elsewedy-automation.com</p>
          <p>Tel: (+202) 25763462</p>
          <p>FAX: (+202) 25763463</p>
          <p>Mobile: (+2010) 28833712</p>
          <p>WhatsApp: (+2010) 28833712</p>
        </div>
      </div>
      </section>
    </main>
    </>
  )
}