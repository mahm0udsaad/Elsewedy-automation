"use client"
import { useState } from "react";
import {Tap , TapContent} from "../component/productTaps"
import { companiesLevelOne } from "../data/productsDetails";


export default function Products() {
  const [openTab, setOpenTab] = useState(1);
  
  return (
    <>
    <main className="flex min-h-screen justify-center">
    <div className="w-11/12 mx-auto">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none pt-3 pb-4 flex-row  overflow-scroll lg:overflow-hidden"
            role="tablist"
          >
            <Tap title={'Rockwell Automation'} openTab={openTab} setOpenTab={setOpenTab} i={1}/>
            <Tap title={'Siemens Automation'} openTab={openTab} setOpenTab={setOpenTab} i={2}/>
            <Tap title={'GHM Group'} openTab={openTab} setOpenTab={setOpenTab} i={3}/>
            <Tap title={'Deutschmann Automation'} openTab={openTab} setOpenTab={setOpenTab} i={4}/>
          </ul>
        </div>
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div className="tab-content tab-space">

              {companiesLevelOne.map((info, i) => (
              <TapContent
                key={info.id || `${info.title}-${i}`}
                content={info.content}
                openTab={openTab}
                intro={info.intro}
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

