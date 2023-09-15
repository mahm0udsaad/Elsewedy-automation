import React from 'react';

export default function CourseTaple() {
  return (
    <TableContainer className='w-11/12 mx-auto'>
        <Table variant='striped' colorScheme='teal' className='w-full'>
      <Thead>
        <Tr>
          <Th>code</Th>
          <Th >Siemens</Th>
          <Th>Days</Th>
          <Th>Hours</Th>
        </Tr>
      </Thead>
      {siemensCourses.map((course , i)=>(
      <Tbody key={i}>
        <Tr className='text-center'>
          <Td>{course.code}</Td>
          <Td>{course.name}</Td>
          <Td>{course.days}</Td>
          <Td>{course.hours}</Td>
        </Tr>
      </Tbody>
      ))}
      </Table>
  </TableContainer>
  );
}