"use client"
import { useInView } from 'framer-motion';
import React, { useContext, useRef, useState } from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaYoutube, FaTwitter ,FaMapMarkerAlt, FaPhone, FaFax, FaWhatsapp, FaEnvelope} from 'react-icons/fa'; // Import icons from the "react-icons/fa" package
import { MyContext } from '../context';

 
const  Footer =()=>{
  const ref = useRef(null)
  const isFooterInview = useInView(ref)
  const { setIsFooterInview} = useContext(MyContext)
  setIsFooterInview(isFooterInview)
    return (
            <footer 
             ref={ref}
             className="
              border-t-[1px] border-red-800">
            <div className="sm:px-10 px-4 lg:flex pt-10">
              <div className="flex sm:w-[70%] ml-20">
              <div
               className="flex">
               <div>
                    <p className="font-medium 
                    ">Contact</p>
                    <ul className="mt-6 space-y-4 text-sm">
                    <li className="w-5/6 text-balck">
                        <FaMapMarkerAlt className="inline-block mr-2 text-blue-500" />
                        Address:<br /> Head Quarter: 27 Orabi St., 7th Floor, Office (706), Orabi Street, Al-Azbakia, 11111 - Cairo.
                    </li>
                    <li className='text-balck'>
                        <FaPhone className="inline-block mr-2 text-gray-500" />
                        Phone:<br />
                        Tel: +20 (2) 2576 3462 <br /> Cell (1): +201028833734 <br />Cell (2): +20100 14 553 56, <br /> Cell (3): +201028833712 <br /> Cell (4): +20105772402
                    </li>
                    <li>
                        <FaFax className="inline-block mr-2 text-black" />
                        Fax: +20 (2) 2576 3463
                    </li>
                    <li>
                      <a href="https://web.whatsapp.com/send?phone=+201028833734" className="hover:text-gray-700 transition">
                        <FaWhatsapp className="inline-block mr-2 text-green-600" />
                        WhatsApp: +201028833734
                      </a>
                    </li>
                    <li>
                      <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzDsRSSLMjJDGLpJqdlgVbrRGpGZBSVQgFRgSVLFKpSkXdTQXmZJBBpzVvvwwJkSRsRtLzj" className="hover:text-gray-700 transition">
                        <FaEnvelope className="inline-block mr-2 text-red-700" />
                        E-mail: info@elsewedy-automation.com
                      </a>
                    </li>
                  </ul>

                </div>
                  <div className='sm:w-[50%]'>
                      <p className="font-medium 
                       text-center ">Follow Us</p>
                      <ul className="mt-2 text-2xl text-4xl mx-auto sm:w-[20%]">
                <li className="pt-3">
                  <a
                    href="https://www.facebook.com/ElsewedyAutomationS.A.E?mibextid=LQQJ4d"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-700 flex justify-center transition text-blue-800"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href="https://www.linkedin.com/company/el-sewedy-automation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-700 flex justify-center transition text-blue-500"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href="https://www.instagram.com/elsewedy_automation/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-700 flex justify-center transition text-rose-500"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href="https://www.youtube.com/channel/UCjp_qxpE3fIujkZpd4U7UzA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-700 flex justify-center transition text-red-700"
                  >
                    <FaYoutube />
                  </a>
                </li>
                <li className="pt-3">
                  <a
                    href="https://twitter.com/ElsewedyAuto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-700 flex justify-center transition text-blue-300"
                  >
                    <FaTwitter />
                  </a>
                </li>
                  </ul> 
                  </div>
                  </div>
              </div>
              <div 
               className="map flex overflow-x-hidden mt-4 lg:mt-0 sm:w-11/12">
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.3339266235723!2d31.243343456749805!3d30.055910320440727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840947cf2b563%3A0x3b2239915d3275e!2sEl%20Sewedy%20Automation!5e0!3m2!1sar!2seg!4v1693912396972!5m2!1sar!2seg" 
                style={{border:"0"}} 
                allowFullScreen 
                loading="lazy" 
                className='mx-auto sm:w-full sm:h-[100%]'
                ></iframe>
             </div>
            </div>

                 <div className="text-center mt-4 py-4 bg-gray-200 border-t border-gray-100 ">
            <p className="text-xs 
            ">
                    &copy; 2023. ELsewedy Automation. All rights reserved.
                </p>
                </div>
            </footer>
    )
}

export default Footer;