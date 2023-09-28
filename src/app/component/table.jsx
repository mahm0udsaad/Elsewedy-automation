import { useInView } from 'framer-motion';
import React, { useContext, useRef, useState } from 'react';
import { Table, TableContainer, Th, Td ,Thead, Tr , Tbody} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { MyContext } from '../context';
import {FaFilePdf} from 'react-icons/fa'

export  function TableRow({course , i , booked}) {
  const tr = useRef(null)
  const isTrViwed = useInView(tr)
  return (
    <motion.tr 
       ref={tr}
       initial={{ opacity:0 }}
       animate={{ opacity:isTrViwed? 1 : 0 }}
       transition={{ duration:.5 }}
       className={`border-b text-center border-b-2 ${i % 2 !== 0 ? 'bg-gray-200': 'bg-white'}`}
    >
      <Td className="lg:whitespace-nowrap">
        {course.code}
        </Td>
      <Td className="lg:whitespace-nowrap sm:px-6  w-[60%] sm:w-1/2 text-lg text-start">{course.title}</Td>
      <Td className="lg:whitespace-nowrap sm:px-6 ">{course.days}</Td>
      <Td className="lg:whitespace-nowrap sm:px-6 ">{course.hours}</Td>
      <Td> 
        <a href={course.link} target="_blank" className='flex justify-center cursor-pointer'>
       {course.link &&  <FaFilePdf className="text-red-800 text-xl mr-4"/>}
        </a>
        </Td>
    </motion.tr>
  );
}
export function CourseTable({ courseData , title  , isRockWell , bookCourse}){
  const tr = useRef(null)

  const isTrViwed = useInView(tr)
  return(
    <TableContainer className='w-11/12 mx-auto'>
        <Table size={'sm'} variant='striped' colorScheme='teal' className='w-full'>
        <Thead>
          <motion.tr 
          ref={tr}
          initial={{ opacity:0 }}
          animate={{ opacity:isTrViwed? 1 : 0 }}
          transition={{ duration:.5 }}
          style={{backgroundColor:`${courseData.color}`}}
          className="h-16 text-white py-3">
          <Th className=""> 
           code
          </Th>
          <Th >{title}</Th>
          <Th className={`sm:px-5 ${isRockWell ? 'redBg':''}`}>Days</Th>
          <Th className={`${isRockWell ? 'redBg':'' }`}>Hours</Th>
          <Th className='redBg sm:px-5'>Course Content</Th>
          </motion.tr>
      </Thead>
      {courseData.data.map((course , i)=>(
        <Tbody>
        
        {course.type && 
            <h1 className='text-xl text-center sm:w-40 py-4 flex'>Packages</h1>
        }
        {course.type ? (
               course.packages.map((course ,i)=>(
                <TableRow course={course} key={generateUniqueKey()} i={i}/>
               ))
        ):(<TableRow course={course} key={generateUniqueKey()} i={i}/>)}
        </Tbody>
      ))}
        </Table>
      </TableContainer>
  )
}
export  function CondensedTableRow({course , i}) {
  const tr = useRef(null)
  const isTrViwed = useInView(tr)
  return (
    <motion.tr 
       ref={tr}
       initial={{ opacity:0 }}
       animate={{ opacity:isTrViwed? 1 : 0 }}
       transition={{ duration:.5 }}
       className={`border-b text-center border-b-2 ${i % 2 !== 0 ? 'bg-gray-200': 'bg-white'}`}
    >
      <Td className="lg:whitespace-nowrap"> {course.code}</Td>
      <Td className='flex flex-col sm:flex-row items-center sm:justify-between'>
        <h1 className='sm:w-1/2 md:w-[46%] w-full text-start'>
      {course.title.split(" ").map((word, i) => (
      <span key={i}>
        {i > 0 && i % 4 === 0 ? <br /> : null}
        {word}{' '}
      </span>
    ))}
        :
        </h1> 
     <ul className='sm:w-1/2 w-full text-start'>
      {course.content.map((el , i)=>(
        <li key={generateUniqueKey() + i} className='border-b-[1px] border-black py-2'>{el}</li>
        ))}
      </ul>
        </Td>
      <Td className="lg:whitespace-nowrap sm:px-6 ">{course.days}</Td>
      <Td className="whitespace-nowrap sm:px-6 ">{course.hours}</Td>
      <Td> 
        <a href={course.link} target="_blank" className='flex justify-center cursor-pointer'>
        <FaFilePdf className="text-red-800 text-xl mr-4"/>
        </a>
        </Td>
    </motion.tr>
  );
}
export function generateUniqueKey() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2);
}
export function CondensedCourseTable({ courseData , title}){
  const tr = useRef(null)
  const isTrViwed = useInView(tr)
  return(
    <TableContainer className='sm:w-11/12 w-5/6 mx-auto'>
        <Table size={'sm'} variant='striped' colorScheme='teal' className='w-full'>
       <Thead>
          <motion.tr 
          ref={tr}
          initial={{ opacity:0 }}
          animate={{ opacity:isTrViwed? 1 : 0 }}
          transition={{ duration:.5 }}
          className="h-16 bg-red-400 text-white py-3"
          style={{backgroundColor:`${courseData.color}`}}
          >
          <Th className="">code</Th>
          <Th >{title}</Th>
          <Th className="redBg">Days</Th>
          <Th className='redBg'>Hours</Th>
          <Th className='redBg sm:px-5'>Course <br /> Content</Th>
          </motion.tr>
      </Thead>
      {courseData.data.map((course , i)=>(
       <Tbody>
       <CondensedTableRow key={course.code+'condensed'} course={course} i={i}/>
       </Tbody>
      ))}
       </Table>
      </TableContainer>
  )
}