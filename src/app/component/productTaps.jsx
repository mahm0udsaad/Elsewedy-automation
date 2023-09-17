import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Tap = ({title , openTab , setOpenTab , i , logo})=>{
    return(
        <li className={`-mb-px mr-2 last:mr-0 flex flex-col justify-center h-[5rem]`}>
            {logo ? (
               <a
               className={
                 `rounded block h-full flex flex-col items-center ` +
                 (openTab === i
                   ? "text-white border-b-2 border-[#9c1c27]"
                   : "text-red-600 bg-white hover:opacity-50")
               }
               onClick={e => {
                 e.preventDefault();
                 setOpenTab(i);
               }}
               data-toggle="tab"
               href="#link2"
               role="tablist"
             >
                <img src={logo} alt="logo" width={150}/>
             </a>
            ):(
              <a
              className={
                `sm:text-lg font-bold py-5 shadow-lg rounded block leading-normal text-center px-20  ${logo ? '':'px-20'} ${openTab === i ? "text-white bg-red-600": "text-red-600 bg-white  hover:opacity-50 "}`}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(i);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
                >
                 {title}
              </a>
                )}
            </li>
    )
}
const CourseTap =({title , openTab , setOpenTap , i , color})=>{
  console.log(title);
  return(
    <li  className={`-mb-px mr-2 last:mr-0 flex flex-col justify-center `}>
           <a
              style={{backgroundColor:openTab === i ? `${color}` : 'white' ,color:openTab === i ? 'white': `${color}`}}
              className={
                `sm:text-lg text-semibold  w-[25rem] py-5 shadow-lg rounded block leading-normal text-center hover:opacity-50`}
                onClick={e => {
                  e.preventDefault();
                  setOpenTap(i);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
                >
                 {title}
              </a>
  </li>
  )
}
const TapContent = ({ title, content, openTab, i, id, image, intro }) => (
  <div className={openTab === i ? "block w-full" : "hidden"} id={id}>
    <div className="content">
      <div className="header text-2xl sm:text-4xl font-semibold py-5">{intro}</div>
      <div>
        <div className="justify-center py-8 w-full">
          <div className="wrapper flex justify-center">
            {Array.isArray(image) && image.length > 0 ? (
              image.map((e, index) => (
                <div className="inner-wrapper" key={index}>
                  <img src={e} alt="details" className="w-full h-full" />
                </div>
              ))
            ) : (
              null
            )}
          </div>
          <div className="content-p pt-10">{content}</div>
          <Link href={`products/${encodeURIComponent(title.split(" ")[0]) || title}`} className="text-blue-500">
            More information...
          </Link>
        </div>
      </div>
    </div>
  </div>
);
const ServicesTap = ({children , openTab , i }) => (
  <div className={openTab === i ? "block w-full " : "hidden"} >
      <div className="content">
      {children}
    </div>
  </div>
);
const GalleryTap = ( {title , openTab , setOpenTab , i})=>{
  return(
    <motion.li
    initial={{ opacity:0 , y: 80}}
    animate={{ opacity:1 , y: 0}}
    transition={{ duration: 1}}
    className={`text-sm sm:text-lg mr-2 last:mr-0 text-center list-none ${openTab === i ? 'bg-red-800 text-white rounded' : ''}` }>
              <a
                className={
                  " uppercase block leading-normal transition duration-300 p-5 rounded"}
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(i);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                 {title}
              </a>
            </motion.li>
  )
}
const GalleryContent = ({children , openTab , i})=>{
  return(
    <div className={openTab === i ? "block w-full" : "hidden"}>
     { children }
  </div>
  )
}
export {TapContent ,CourseTap, Tap , ServicesTap , GalleryTap , GalleryContent} ;
