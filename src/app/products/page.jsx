
"use client"
import { useState } from "react";
import {Tap , TapContent} from "../component/productTaps"

const companiesLevelOne = [
  {
    title: "Rockwell Automation",
    intro: <h1>Industrial Automation Hardware & Software</h1>,
    content: 
      <>
      <p>El-Sewedy Automation is recognized by its customers as the best in the market for using Allen-Bradley® and Rockwell Software® products since El-Sewedy Automation founders have a huge significant experience of using Rockwell Automation solutions in different Egyptian industrial markets.</p>
      <p>Rockwell Automation Products:</p>
      <ul>
        <li>Programmable Controllers (PLC and PAC)</li>
        <li>Input/Output (I/O) Modules</li>
        <li>Networks Security & Infrastructure</li>
        <li>Condition Monitoring</li>
        <li>Motion Control</li>
        <li>Drives & Motors</li>
        <li>Power Supplies</li>
        <li>Rockwell Software (SCADA)</li>
        <li>Motor Control Contactors</li>
        <li>Connection Devices</li>
        <li>Circuit & Load Protection</li>
        <li>Lighting Control</li>
        <li>Sensors & Switches</li>
        <li>Operator Interfaces (HMI)</li>
        <li>Push Buttons & Signaling Devices</li>
        <li>Relays & Timers</li>
        <li>Safety Products</li>
        <li>Signal Interface</li>
        <li>Energy Monitoring</li>
      </ul>
      </>
    ,
    image: ["/images/details/rockwell.jpg","/images/details/Rockwel.jpg"],
  },
  {
    title: "Siemens Automation",
    intro: <h1>Industrial Automation Hardware & Software</h1>,
    content: <>
            <p>SIMATIC Controllers</p>
              <ul>
                <li>Distributed I/O Systems</li>
                <li>Industrial Controls</li>
                <li>SIMATIC HMI</li>
                <li>Field Process Instrumentation</li>
                <li>Automation & SCADA Software</li>
                <li>Drive Technology (Low voltage Converters)</li>
                <li>Drive Technology (Servo Converters)</li>
              </ul>
            </>,
    image: ["/images/details/siemens.jpg"],
  },
  {
    title: "GHM Group",
    intro: <h1>Industrial Measurement Electronics</h1>,
    content: <>
            <p>As a distributor to GHM Group, GHM is a specialist and full-range supplier for measurement, industrial electronics, environmental measurement, microclimate-analysis, acoustic, light metering, and water-analysis. GHM Messtechnik products for Industrial automation can be classified as follows:</p>
              <ul>
                <li>Sensors (Level, Flow, Pressure ...etc.)</li>
                <li>Industrial Electronics</li>
                <li>Handheld Gauges</li>
                <li>Sil/Atex Certified</li>
                <li>Fittings</li>
                <li>Data Logger</li>
                <li>Electrical Connection Technology</li>
                <li>Software & Programming Devices & Accessories</li>
              </ul>
            </>,
    image: ["/images/details/ghm.jpg"],
  },
  {
    title: "Deutschmann Automation",
    intro: <h1>Industrial Ethernet, Gateways, and Network Security Solutions</h1>,
    content: <>
      <p>As an exclusive agent to DA, a German company founded exactly 40 years ago, the company has designed and manufactured innovative network components for industrial data communication:</p>
      <ul>
        <li>Protocol Converter</li>
        <li>Embedded Solutions</li>
        <li>Gateways</li>
        <li>Electronic cam controls</li>
        <li>Starter Kits & Accessories</li>
      </ul>
              </>,
    image: "deutschmann-automation.jpg",
  },
];

// You can now access each company's information by indexing the 'companies' array.

export default function Products() {
  const [openTab, setOpenTab] = useState(1);
  
  return (
    <>
    <main className="flex min-h-screen justify-center">
    <div className="w-11/12 mx-auto">
        <div className="w-full">
          <ul
            className="flex mb-0 list-none sm:flex-wrap pt-3 pb-4 flex-row overflow-scroll"
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
              {companiesLevelOne.map((info , i)=>(
                  <TapContent 
                      content={info.content}
                      openTab={openTab}
                      intro={info.intro}
                      i={i+1}
                      id={`'link'${i}`}
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

