import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

export default function AccordionCmp({title , content}) {

  return (
    <>
      <Accordion className='w-full' allowMultiple _expanded={{ bg: 'tomato', color: 'white' }}>
      <AccordionItem className='border-b border-gray-200 py-[17px]'>
        <h2>
          <AccordionButton className='flex justify-between'>
            <span className='text-left font-bold text-navy-900' flex='1'>
              {title}
            </span>
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
