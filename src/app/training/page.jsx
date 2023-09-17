"use client"

import Slide from "../component/slide"
import { CourseTap , ServicesTap} from "../component/productTaps"
import CourseTaple, { CondensedCourseTable } from "../component/table"
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
      <section>
        <h1 className="text-4xl text-center font-semibold py-8">
        Our Training Courses
        </h1>
        <ul
            className="w-11/12 flex mx-auto items-center mb-0 list-none pt-3 pb-4 flex-row  overflow-x-scroll"
            role="tablist"
          >
        {data.map((title,i)=>(
            <CourseTap key={i} title={title.name} color={title.color}  openTab={openTab} setOpenTap={setOpenTap} i={i + 1} />
        ))}
        </ul>

        <ServicesTap i={1} openTab={openTab}>
        <CourseTable courseData={allenBradleyCourses} title={"Allen Bradley"}/>
        </ServicesTap>
        <ServicesTap i={2} openTab={openTab}>
        <CondensedCourseTable name='Rockwell' courseData={condensedTrainingPackages} title={"Allen Bradley"}/>
        </ServicesTap>
        <ServicesTap i={3} openTab={openTab}>
        <CourseTable name='Rockwell' courseData={allenBradleyLegacyCourses} title={"Allen Bradley"}/>
        </ServicesTap>
        <ServicesTap i={4} openTab={openTab}>
        <CourseTable courseData={siemensCourses} title={"siemens"}/>
        </ServicesTap>
        <ServicesTap i={5} openTab={openTab}>
        <CourseTable courseData={electricalPowerCourses} title={"Electrical Power"}/>
        </ServicesTap>
        <ServicesTap i={6} openTab={openTab}>
        <CourseTable courseData={mechanicalCourses} title={"Mechanical"}/>
        </ServicesTap>
        <ServicesTap i={7} openTab={openTab}>
        <CourseTable courseData={instrumentationControlCourses} title={"Instrumentaion Control"}/>
        </ServicesTap>
        <ServicesTap i={8} openTab={openTab}>
        <CourseTable courseData={softSkillsCourses} title={'Soft Skills'} />
        </ServicesTap>
      </section>
    </main>
    </>
  )
}