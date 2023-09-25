import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon , Box} from '@chakra-ui/react'

export default function AccordionCmp({title , content , toggle , i}) {

  return (
    <>
      <Accordion className='w-full' allowMultiple _expanded={{ bg: 'tomato', color: 'white' }} defaultIndex={[0,1,2,3,4]}>
      <AccordionItem className='border-b border-gray-200 py-[17px]'>
        <h2>
          <AccordionButton className='flex justify-between'>
            <Box as="span" flex='1' textAlign='left'>
             {title}
            </Box>
            <AccordionIcon className='text-left !text-navy-900'/>
          </AccordionButton>
        </h2>
        <AccordionPanel  className='text-left text-medium mt-2 !text-navy-900' pb={4}>
          {content}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    </>
  );
}
