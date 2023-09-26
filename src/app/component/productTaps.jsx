import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {  NavigationS, NavigationR } from "./product";
import { Rockwell } from "../data/productsDetails";

const Tap = ({title,logo , openTab , setOpenTab , i , bg , color})=>{
    return(
        <li className={`-mb-px mr-2 last:mr-0 flex items-center flex-col justify-center sm:h-[5rem] ${openTab === i ? '' : 'shadow-lg'}`}>
            {logo ? (
               <a
               className={
                 `p-2 sm:p-4 rounded block h-full flex flex-col justify-center` +
                 (openTab === i
                   ? "text-white border border-[#9c1c27]"
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
                `sm:text-lg font-bold py-5 rounded block leading-normal text-center px-12 sm:px-20 hover:opacity-50`}
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
const FlexTap = ({title,logo , openTab , setOpenTab , i , bg , color})=>{
  return(
    <li 
    style={{
      background: openTab === i ? (bg ? bg : 'red') : 'initial',
      color:openTab === i ? (color ? color : '#ff0000') : '#991b1b',
    }}
        
        className={`-mb-px mr-2 last:mr-0 flex items-center flex-col justify-center w-full h-[5rem] ${openTab === i ? '' : 'shadow-lg'}`}>
              <a
              className={
                `sm:text-lg font-bold py-5 rounded block leading-normal text-center px-4 sm:px-20 hover:opacity-50`}
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
            </li>
    )
}
const CourseTap =({logo, openTab , setOpenTap , i , color  })=>{
  return(
          <li 
          style={{borderColor :openTab === i ? `${color}` : 'white' ,color:openTab === i ? 'white': `${color}`}}
          className={`${openTab === i ? '':'shadow-lg'} w-36 hover:opacity-50 border rounded h-32 lg:w-[10rem] flex items-center justify-center cursor-pointer`}
          onClick={e => {
            setOpenTap(i);
          }}
          >
           <a
            className={
              ` h-fit block leading-normal`}
              data-toggle="tab"
              href="#link2"
              role="tablist"
              >
                <img className={`${i > 2 ? "h-20":"w-11/12"}`} src={logo} alt="" />
            </a>
  </li>
  )
}
const TapContent = ({ title , openTab, i, id, image, intro , products}) => (
  <div className={openTab === i ? "block w-full" : "hidden"} id={id}>
    <div className="content">
      <div className="header text-2xl sm:text-4xl font-semibold py-5">{title}</div>
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
          <div className="content-p pt-10 text-justify">
            <p>{intro}</p>
            <ul className="pt-4">
              {title.split(" ")[0] === "Rockwell" && <NavigationR />}
              {title.split(" ")[0] === "Siemens" && <NavigationS />}
              {title.split(" ")[0] === "GHM" ||title.split(" ")[0] === "Deutschmann" ? 
              (
              products.map((item)=>(
                <li>{item}</li>
              ))
              ): null }
              
            </ul>
          </div>
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
const ProductTap = ({title , openTab , setOpenTab , i , siemens})=>{
  return(
      <li 
      className="hover:text-red block text-start sm:w-full w-48 px-4 py-2 border border-gray-300"
        style={{
          color:openTab === i ? `${siemens ? '#019699':'#e10000'}` : 'black',
        }}>
              <a
                onClick={e => {
                  e.preventDefault();
                  setOpenTab(i);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
                className="hover:text-red-600"
                >
                 {title}
              </a>
            </li>
    )
}
const ProductsContent = ({children , openTab , i})=>{
  return(
    <div className={openTab === i ? "block w-full" : "hidden"}>
     { children }
  </div>
  )
}
export {ProductTap , ProductsContent ,TapContent ,CourseTap, Tap , ServicesTap , GalleryTap , GalleryContent , FlexTap} ;
