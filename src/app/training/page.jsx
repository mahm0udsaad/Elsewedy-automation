"use client"

import Slide from "../component/slide"
import { CourseTap , ServicesTap} from "../component/productTaps"
import CourseTaple, { CondensedCourseTable, generateUniqueKey } from "../component/table"
import { motion, useInView } from "framer-motion"
import { Table, TableContainer, Th, Td ,Thead, Tr , Tbody} from '@chakra-ui/react';
import {data ,allenBradleyLegacyCourses,allenBradleyCourses,siemensCourses,electricalPowerCourses,mechanicalCourses,instrumentationControlCourses,softSkillsCourses, condensedTrainingPackages, coursesCategory} from '../data/courses'
import { useRef, useState } from "react"
import { CourseTable} from "../component/table"

export default function Training() {
  const [openTab, setOpenTap] = useState(1);
  return (
    <>
    <main className="flex flex-col min-h-screen pt-20">
    <section className=" w-11/12 mx-auto my-5">
        <div style={{borderRadius:`0 20px`}} className=" redBg lg:w-1/2 mx-auto my-10">
        <h1 className="text-5xl font-semibold text-center text-white p-10">
          Our Training Center
        </h1>
        </div>
        <div className="intro sm:text-justify">
          <div className="lg:flex justify-around">
            <div className="flex items-center justify-center lg:w-1/2">
            <img src="images\training\training1.jpg" alt="image" />
            </div>
          <div className="py-10 px-4 grid content-center  lg:w-1/2 grid-cols-1 gap-x-8 gap-y-24">
          <div>
          <h1 className="text-4xl font-semibold text-start lg:text-justify  pb-3">Who Are Your Instructors? </h1>
            <p>El-Sewedy Automation has a team of professionals “Group of Ph.D. Engineers” in Allen Bradly, SIMATIC, SCADA, HMI, and Drives. The training team is using training kits dedicated to training courses to let trainees test and check their automation exercises practically.</p>
          </div>
          <div>
            <h1 className="text-4xl font-semibold text-start lg:text-justify  pb-3">Where Training Courses Can Be Conducted?</h1>
            <p>El-Sewedy Automation has its own training class in the company location. Also, El-Sewedy Automation offers onsite training for its customers' convenience or even in any suitable training places (Hotels, Other Training Centers... etc.).</p>
          </div>
          </div>
          </div>
          <div className="lg:flex justify-around flex-row-reverse">
            <div className="flex items-center justify-center lg:w-1/2">
            <img src="images\training\training2.jpg" alt="image" />
            </div>
          <div className="py-10 grid content-center  lg:w-1/2 grid-cols-1 gap-x-8 gap-y-24">
          <div className=" px-4 my-8">
          <div className="">
            <h1 className=" text-start lg:text-justify text-4xl font-semibold py-4">Why Should You Join El-Sewedy Automation Training Courses? </h1>
            <p>If you would like to benefit from long working experience and talented experts and to learn how to operate and solve sophisticated automation control problems in a short time with minimal effort, you have to register with El-Sewedy Automation since it owns worldwide experts in Programming of PLC, SCADA, Drives...etc.</p>
          </div>
          <div className="">
            <h1 className=" text-start lg:text-justify text-4xl font-semibold py-4"> Who Can Join ? </h1>
            <p>Maintenance Engineers, Programmers, and there are special training programs for students.</p>
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
            className="w-11/12 flex mx-auto items-center mb-0 list-none pt-3 pb-4 flex-row  overflow-x-scroll"
            role="tablist"
          >
        {data.map((title,i)=>(
            <CourseTap key={i + generateUniqueKey()} title={title.name} color={title.color}  openTab={openTab} setOpenTap={setOpenTap} i={i + 1} />
        ))}
        </ul>

        <ServicesTap i={1} openTab={openTab}>
        <CourseTable isRockWell={true} courseData={allenBradleyCourses} title={"Allen Bradley"}/>
        <CourseTable isRockWell={true} name='Rockwell' courseData={allenBradleyLegacyCourses} title={"Allen Bradley (Legacy Courses)"}/>
        <CondensedCourseTable isRockWell={true} name='Rockwell' courseData={condensedTrainingPackages} title={"Allen Bradley (Condensed Training Packages)"}/>
        </ServicesTap>
        <ServicesTap i={2} openTab={openTab}>
        <CourseTable courseData={siemensCourses} title={"siemens"}/>
        </ServicesTap>
        <ServicesTap i={3} openTab={openTab}>
        <CourseTable courseData={electricalPowerCourses} title={"Electrical Power"}/>
        </ServicesTap>
        <ServicesTap i={4} openTab={openTab}>
        <CourseTable courseData={mechanicalCourses} title={"Mechanical"}/>
        </ServicesTap>
        <ServicesTap i={5} openTab={openTab}>
        <CourseTable courseData={instrumentationControlCourses} title={"Instrumentaion Control"}/>
        </ServicesTap>
        <ServicesTap i={6} openTab={openTab}>
        <CourseTable courseData={softSkillsCourses} title={'Soft Skills'} />
        </ServicesTap>
      </section>
      <section>
      <div style={{borderRadius:`0 20px`}} className=" redBg sm:w-1/2 mx-auto my-10">
        <h1 className="text-5xl font-semibold text-center text-white p-10">
        Training Service Level Agreement
        </h1>
        </div>
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
      {/* Add more sections for other terms */}
      {/* You can use similar structures for each section */}
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