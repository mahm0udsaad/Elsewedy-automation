"use client"

import { useContext, useState } from "react";
import {Tap , TapContent} from "../component/productTaps"
import { companiesLevelOne } from "../data/productsDetails";
import { MyContext } from "../context";
import NavBar, { PagesNav } from "../component/navBar";

const productsLogos = [
  '/images/partners/partner-tab2.png',
  '/images/partners/semins-tqp.png',
  '/images/partners/ghm.png',
  '/images/partners/partner-tab.png',
];

export default function Products() {
  const {openTab, setOpenTab} = useContext(MyContext)
  console.log(companiesLevelOne[0].title.split(" ")[0]);
  return (
    <>
    <PagesNav />
    <main className="flex min-h-screen justify-center pt-20">
    <div className="w-11/12 mx-auto">
        <div className="w-full">
          <ul
            className="w-11/12 flex justify-around items-center mb-0 list-none pt-3 pb-4 flex-row  lg:overflow-hidden"
            role="tablist"
          >
            <Tap logo={productsLogos[0]}  openTab={openTab} setOpenTab={setOpenTab} i={1}/>
            <Tap logo={productsLogos[1]}  openTab={openTab} setOpenTab={setOpenTab} i={2}/>
            <Tap logo={productsLogos[2]}  openTab={openTab} setOpenTab={setOpenTab} i={3}/>
            <Tap logo={productsLogos[3]}  openTab={openTab} setOpenTab={setOpenTab} i={4}/>
          </ul>
        </div>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">
              {companiesLevelOne.map((info, i) => (
              <TapContent
                key={info.id || `${info.title}-${i}`}
                products={info.products}
                openTab={openTab}
                intro={info.intro}
                link={info.link}
                i={i + 1}
                id={`link${i}`}
                title={info.title}
                image={info.image}
              />
              ))}
              </div>
            </div>
          </div>
      </div>
    </main>
    </>
  )
}

