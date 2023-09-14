
import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'; // Import icons from the "react-icons/fa" package

 
const  Footer =()=>{
    return (
            <footer className="bg-white py-10 border-t-[1px] border-gray-300">
            <div className="social">
            <ul className="mt-2 space-x-5 justify-center flex text-2xl">
          <li>
            <a
              href="https://www.facebook.com/ElsewedyAutomationS.A.E?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition hover:text-blue-800"
            >
              <FaFacebookSquare />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/company/el-sewedy-automation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition hover:text-blue-500"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/elsewedy_automation/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition hover:text-rose-500"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/@El-sewedyAutomation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition hover:text-red-700"
            >
              <FaYoutube />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/ElsewedyAuto"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 transition hover:text-blue-300"
            >
              <FaTwitter />
            </a>
          </li>
             </ul>
            </div>
            <div className="lg:flex pt-10">
            <div className="px-8">
               <div className="sm:flex space-y-5">
               <div>
                    <p className="font-medium text-gray-900">Contact</p>
                    <ul className="mt-6 space-y-4 text-sm">
                <li className='w-5/6'>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Address:<br /> Head Quarter: 27 Orabi St., 7th Floor, Office (706), Orabi Street, Al-Azbakia, 11111 - Cairo.
                    </a>
                </li>

                <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Phone:<br />
                    Tel: +20 (2) 2576 3462 <br /> Cell (1): +201028833734 <br />Cell (2): +20100 14 553 56, <br /> Cell (3): +201028833712 <br /> Cell (4): +20105772402
                    </a>
                </li>

                <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Fax: +20 (2) 2576 3463
                    </a>
                </li>

                <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                    WhatsApp: +201028833734
                    </a>
                </li>

                <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                    E-mail: info@elsewedy-automation.com
                    </a>
                </li>
                </ul>
                </div>
                <div className="w-full grid grid-cols-2 gap-5">
               <div>
                <p className="font-medium text-gray-900">Services</p>

                <ul className="mt-6 space-y-4 text-sm">
                <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Training
                    </a>
                </li>

                <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Company Review
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Products
                    </a>
                </li>

                <li>
                    <a href="#" className="text-gray-700 transition hover:opacity-75">
                    Services & Solutions
                    </a>
                </li>
                </ul>
                </div>
                <div>
                    <p className="font-medium text-gray-900">Helpful Links</p>

                    <ul className="mt-6 space-y-4 text-sm">
                    <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75">
                        Contact
                        </a>
                    </li>

                    <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75">
                        FAQs
                        </a>
                    </li>

                    <li>
                        <a href="#" className="text-gray-700 transition hover:opacity-75">
                        Live Chat
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
               </div>
            </div>
            <div className="mx-auto flex overflow-x-hidden my-5 w-full sm:my-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d863.3339266235723!2d31.243343456749805!3d30.055910320440727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840947cf2b563%3A0x3b2239915d3275e!2sEl%20Sewedy%20Automation!5e0!3m2!1sar!2seg!4v1693912396972!5m2!1sar!2seg" 
            width="400" 
            height="300" 
            style={{border:"0"}} 
            allowFullScreen 
            loading="lazy" 
            className='mx-auto'
            ></iframe>
            </div>
            </div>
            <div className="text-center mx-auto mt-8 border-t border-gray-100 pt-8">
                <ul className="flex flex-wrap gap-4 text-xs justify-center">
                    <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                        Terms & Conditions
                    </a>
                    </li>

                    <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                        Privacy Policy
                    </a>
                    </li>

                    <li>
                    <a href="#" className="text-gray-500 transition hover:opacity-75">
                        Cookies
                    </a>
                    </li>
                </ul>
            <p className="mt-8 text-xs text-gray-500">
                    &copy; 2023. ELsewedy Automation. All rights reserved.
                </p>
                </div>
            </footer>
    )
}

export default Footer;