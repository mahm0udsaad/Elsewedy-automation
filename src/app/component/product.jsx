"use client"

import { useState } from "react";
import { ProductTap, ProductsContent } from "./productTaps";
import { Siemens, Rockwell } from "../data/productsDetails";
import { Details } from "./details";
import { generateUniqueKey } from "./table";

const NavigationR = () => {
    const [openTab , setOpenTab] = useState(0)
    let [productData , setProductData] = useState(Rockwell[openTab])

   return(
    <div className="sm:flex">
        <ul className="pt-4 sm:w-[40%] sm:block flex overflow-x-scroll sm:overflow-hidden">
    {Rockwell.map((product , i)=>(
    <ProductTap key={i} title={product.title} i={i} setOpenTab={setOpenTab} openTab={openTab} />
    ))}
    </ul> 
    
    {Rockwell.map((item , i)=>(
        <ProductsContent openTab={openTab} i={i}>
        <div className="grid gap-8 w-11/12 mx-auto pt-16">
            {productData && (
                <Details key={generateUniqueKey()} item={item} />
                )}
                 </div>
        </ProductsContent>
    ))}
    </div>

   )
}
const NavigationS = () => {
    const [openTab , setOpenTab] = useState(0)
    let [productData , setProductData] = useState(Rockwell[openTab])

   return(
    <div className="flex sm:flex-row flex-col">
        <ul className="pt-4 sm:w-[40%] sm:block flex overflow-x-scroll sm:overflow-hidden ">
    {Siemens.map((product , i)=>(
    <ProductTap siemens={true} key={i} title={product.title} i={i} setOpenTab={setOpenTab} openTab={openTab} />
    ))}
    </ul> 
    
    {Siemens.map((item , i)=>(
        <ProductsContent openTab={openTab} i={i}>
        <div className="grid gap-8 mx-auto">
            {productData && (
                <Details key={generateUniqueKey()} item={item} />
                )}
                 </div>
        </ProductsContent>
    ))}
    </div>

   )
}
export {NavigationS , NavigationR}