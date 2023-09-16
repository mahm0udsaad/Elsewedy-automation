"use client"

import Slide from "../component/slide"
import { Tap } from "../component/productTaps"
import CourseTaple from "../component/table"
import { motion, useInView } from "framer-motion"
import { Table, TableContainer, Th, Td ,Thead, Tr , Tbody} from '@chakra-ui/react';
import {allenBradleyCourses,siemensCourses,electricalPowerCourses,mechanicalCourses,instrumentationControlCourses,softSkillsCourses} from '../data/courses'
import { useRef } from "react"
import { CourseTable} from "../component/table"
export default function Training() {

  return (
    <>
    <main className="flex flex-col min-h-screen">
      <Slide imgSrc={'/images/services/173.jpg'} text={<h1 className="text-red text-center">Welcome to Our Training Center! Let's Achieve Your Goals Together with Our Experienced Instructors Through a Wide Range of Courses</h1>} isActive={true}/>
      <section>
        <h1 className="text-4xl text-center font-semibold py-8">
        Our Training Courses
        </h1>
        <CourseTable courseData={allenBradleyCourses} title={"Allen Bradley"}/>
        
        <CourseTable courseData={allenBradleyCourses} title={"Allen Bradley"}/>
        
        <CourseTable courseData={siemensCourses} title={"siemens"}/>
        <CourseTable courseData={electricalPowerCourses} title={"Electrical Power"}/>
        <CourseTable courseData={mechanicalCourses} title={"Mechanical"}/>
        <CourseTable courseData={instrumentationControlCourses} title={"Instrumentaion Control"}/>
        <CourseTable courseData={softSkillsCourses} title={'Soft Skills'} />
      </section>
    </main>
    </>
  )
}