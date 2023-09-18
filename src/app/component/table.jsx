import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { Table, TableContainer, Th, Td ,Thead, Tr , Tbody} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export  function TableRow({course , i}) {
  const tr = useRef(null)
  const isTrViwed = useInView(tr)
  return (
    <motion.tr 
       ref={tr}
       initial={{ opacity:0 }}
       animate={{ opacity:isTrViwed? 1 : 0 }}
       transition={{ duration:.5 }}
       className={`border-b text-center sm:h-20 border-b-2 ${i % 2 !== 0 ? 'bg-gray-200': 'bg-white'}`}
    >
      <Td className="lg:whitespace-nowrap sm:px-6 py-4">{course.code}</Td>
      <Td className="lg:whitespace-nowrap sm:px-6 py-4 w-[60%] sm:w-[50%] text-lg text-start">{course.title}</Td>
      <Td className="lg:whitespace-nowrap sm:px-6 py-4">{course.days}</Td>
      <Td className="lg:whitespace-nowrap sm:px-6 py-4">{course.hours}</Td>
    </motion.tr>
  );
}
export function CourseTable({ courseData , title }){
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
          style={{backgroundColor:`${courseData.color}`}}
          className="h-16 text-white py-3">
          <Th className="sm:px-5">code</Th>
          <Th >{title}</Th>
          <Th className="sm:px-5">Days</Th>
          <Th>Hours</Th>
          </motion.tr>
      </Thead>
      {courseData.data.map((course , i)=>(
        <Tbody>
        <TableRow course={course} key={i} i={i}/>
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
       className={`border-b text-center sm:h-20 border-b-2 ${i % 2 !== 0 ? 'bg-gray-200': 'bg-white'}`}
    >
      <Td className="lg:whitespace-nowrap sm:px-6 py-4">{course.code}</Td>
      <Td className='flex items-center justify-between'>
        <h1 className='w-1/2 text-start'>
      {course.title}
        </h1> 
      <ul className='w-1/2 text-start'>
      {course.content.map((el , i)=>(
        <li key={course.code} className='border border-gray py-4'>{el}</li>
        ))}
      </ul>
        </Td>
      <Td className="lg:whitespace-nowrap sm:px-6 py-4">{course.days}</Td>
      <Td className="whitespace-nowrap sm:px-6 py-4">{course.hours}</Td>
      
    </motion.tr>
  );
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
          <Th className="sm:px-5">code</Th>
          <Th >{title}</Th>
          <Th className="sm:px-5">Days</Th>
          <Th>Hours</Th>
          </motion.tr>
      </Thead>
      {courseData.data.map((course , i)=>(
       <Tbody>
       <CondensedTableRow key={`${course.code}-${title}`} course={course} i={i}/>
       </Tbody>
      ))}
       </Table>
      </TableContainer>
  )
}