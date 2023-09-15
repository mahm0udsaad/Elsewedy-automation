import { useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { Table, TableContainer, Th, Td ,Thead, Tr , Tbody} from '@chakra-ui/react';
import { motion } from 'framer-motion';

export default function TableRow({course , i}) {
  const tr = useRef(null)
  const isTrViwed = useInView(tr)
  return (
    <motion.tr 
       ref={tr}
       initial={{ opacity:0 }}
       animate={{ opacity:isTrViwed? 1 : 0 }}
       transition={{ duration:.5 }}
       className={`text-center h-20 border-b-2 ${i % 2 !== 0 ? 'bg-gray-200': 'bg-white'}`}
    >
      <Td className="sm:w-[10%]">{course.code}</Td>
      <Td className="w-[25%] text-sm text-start sm:w-1/2">{course.name}</Td>
      <Td className="sm:w-[7%]">{course.days}</Td>
      <Td className="sm:w-[7%]">{course.hours}</Td>
    </motion.tr>
  );
}