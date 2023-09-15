"use client"

import Slide from "../component/slide"
import { Tap } from "../component/productTaps"
import CourseTaple from "../component/table"
import { motion, useInView } from "framer-motion"
import { Table, TableContainer, Th, Td ,Thead, Tr , Tbody} from '@chakra-ui/react';
import {siemensCourses,electricalPowerCourses,mechanicalCourses,instrumentationControlCourses,softSkillsCourses} from '../data/courses'
import { useRef } from "react"
import TableRow from "../component/table"
export default function Training() {
  const tr = useRef(null)
  const isTrViwed = useInView(tr)
  return (
    <>
    <main className="flex flex-col min-h-screen">
      <Slide imgSrc={'/images/services/173.jpg'} text={<h1 className="text-red text-center">Welcome to Our Training Center! Let's Achieve Your Goals Together with Our Experienced Instructors Through a Wide Range of Courses</h1>} isActive={true}/>
      <section>
        <h1 className="text-4xl text-center font-semibold py-8">
        Our Training Courses
        </h1>
        <TableContainer className='sm:w-11/12 w-5/6 mx-auto'>
        <Table size={'sm'} variant='striped' colorScheme='teal' className='w-full'>
      <Thead>
          <motion.tr 
          ref={tr}
          initial={{ opacity:0 }}
          animate={{ opacity:isTrViwed? 1 : 0 }}
          transition={{ duration:.5 }}
          className="h-16 bg-red-400 text-white py-3">
          <Th className="px-5">code</Th>
          <Th >Siemens</Th>
          <Th className="px-5">Days</Th>
          <Th>Hours</Th>
          </motion.tr>
      </Thead>
      {siemensCourses.map((course , i)=>(
       <Tbody>
       <TableRow course={course} key={i} i={i}/>
     </Tbody>
      ))}
      </Table>
  </TableContainer>
      </section>
    </main>
    </>
  )
}