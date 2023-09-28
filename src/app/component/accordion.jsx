import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon , Box} from '@chakra-ui/react'

export default function AccordionCmp({title , content , toggle ,text,imgUrl, i}) {

  return (
    <>
      <Accordion className='w-full' allowMultiple defaultIndex={[0,1,2,3,4]}>
      <AccordionItem className='border-b border-gray-200 py-[17px]'>
        <h2>
          <AccordionButton className='flex justify-between'>
            <Box as="span" flex='1' textAlign='left' className="text-xl font-semibold hover:bg-red">
             {title}
            </Box>
            <AccordionIcon className='text-left !text-navy-900'/>
          </AccordionButton>
        </h2>
        <AccordionPanel  className='text-left text-medium mt-2 !text-navy-900' pb={4}>
       <div className="sm:flex justify-between">
         <div className={`${imgUrl ? "sm:w-1/2" : "w-11/12"} text-justify`}>
         <p>{text}</p>
       <ul className="list-disc p-5 ">
        {content && content.map((e , i)=>(
          <li key={i}>{e}</li>
        ))}
      </ul>
         </div>
         {imgUrl && 
         <div className="sm:w-[45%] flex items-center h-[20rem]">
          <img src={imgUrl} alt="" />
          </div>}
       </div>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    </>
  );
}
