import React from "react";
import Link from "next/link";

const Tap = ({title , openTab , setOpenTab , i})=>{
    return(
        <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
              <a
                className={
                  "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                  (openTab === i
                    ? "text-white bg-red-600"
                    : "text-red-600 bg-white  hover:opacity-50 ")
                }
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
          <Link href={`products/${encodeURIComponent(title.split(" ")[0])}`} className="text-blue-500">
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
export {TapContent , Tap , ServicesTap} ;
