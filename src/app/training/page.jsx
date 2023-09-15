"use client"

import Slide from "../component/slide"
import { Tap } from "../component/productTaps"
import CourseTaple from "../component/table"
import { Table, TableContainer, Th, Td ,Thead, Tr , Tbody} from '@chakra-ui/react';
import {siemensCourses,electricalPowerCourses,mechanicalCourses,instrumentationControlCourses,softSkillsCourses} from '../data/courses'

export default function Training() {
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
        <Tr className="h-16 bg-red-400 text-white">
          <Th>code</Th>
          <Th >Siemens</Th>
          <Th>Days</Th>
          <Th>Hours</Th>
        </Tr>
      </Thead>
      {siemensCourses.map((course , i)=>(
      <Tbody key={i}>
        <Tr className='text-center h-20 border-b-2'>
          <Td className="sm:w-[10%]">{course.code}</Td>
          <Td className="w-[25%] text-sm text-start sm:w-1/2">{course.name}</Td>
          <Td className="sm:w-[7%]">{course.days}</Td>
          <Td className="sm:w-[7%]">{course.hours}</Td>
        </Tr>
      </Tbody>
      ))}
      </Table>
  </TableContainer>
      </section>
    </main>
    </>
  )
}