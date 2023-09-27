"use client"

import Form from "../component/contactForm"
import {FaFilePdf} from 'react-icons/fa'
import Lable from "../component/lable";
import { PagesNav } from "../component/navBar";
const pdfFiles = [
  './pdf/SA - COMPANY PROFILE.pdf',
  './pdf/SA - Projects References.pdf',
  './pdf/SA - Solutions & Services.pdf',
  './pdf/SA - Products.pdf',
  './pdf/SA - Training .pdf',
];

export default function Contact() {
  return (
    <>
    <PagesNav />
    <main className="flex  flex-col items-center justify-between pt-12">
       <Lable text={"Contact Us"}/>
       <div className="flex w-11/12 justify-around pt-8">
       <ul>
        <h1 className="text-xl pb-4 font-semibold">Company Brochures :</h1>
        {pdfFiles.map((pdf, index) => (
          <li key={index}>
            <a href={pdf} target="_blank" rel="noopener noreferrer" className="flex pb-3 text-lg hover:text-red-800 transtion duration-300">
              <FaFilePdf className="text-red-800 text-xl mr-4"/>
              {pdf.split('-')[1].trim().replace(/(Brochure|.pdf)/g, ' ')}
            </a>
          </li>
        ))}
      </ul>
      <Form />
       </div>
    </main>
    </>
  )
}