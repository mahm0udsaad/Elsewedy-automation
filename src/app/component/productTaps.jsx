import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Tap = ({title,logo , openTab , setOpenTab , i , bg , color})=>{
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
              style={{
                background: openTab === i ? (bg ? bg : 'red') : 'initial',
                color:openTab === i ? (color ? color : '#ff0000') : '#991b1b',
              }}
              className={
                `sm:text-lg font-bold py-5 shadow-lg rounded block leading-normal text-center px-12 sm:px-20 hover:opacity-50`}
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
const CourseTap =({logo, openTab , setOpenTap , i , color })=>{
  return(
    <li  className={``}>
           <a
            style={{borderColor :openTab === i ? `${color}` : 'white' ,color:openTab === i ? 'white': `${color}`}}
            className={
              `border lg:w-[10rem] h-full py-5 px-2 rounded block leading-normal hover:opacity-50`}
              onClick={e => {
                e.preventDefault();
                setOpenTap(i);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
              >
                <img className="w-11/12 lg:w-24 sm:mx-auto" src={logo} alt="" />
            </a>
  </li>
  )
}
const TapContent = ({ title, content, openTab, i, id, image, intro ,link}) => (
  <div className={openTab === i ? "block w-full" : "hidden"} id={id}>
    <div className="content">
      <div className="header text-2xl sm:text-4xl font-semibold py-5">{intro}</div>
      <div>
        <div className="justify-center py-8 w-full">
          <div className="wrapper flex justify-justify">
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
          <div className="content-p pt-10 text-justify">{content}</div>
          <Link  href={link ? link : `products/${encodeURIComponent(title.split(" ")[0]) || title}`} className="text-blue-500">
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
                  " uppercase block leading-normal transition duration-300 p-2 sm:p-5 rounded"}
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
