import React, { useState } from "react";
import { TECollapse } from "tw-elements-react";

export default function Accordion({title , content , id}) {
  const [activeElement, setActiveElement] = useState("");

  const handleClick = (value) => {
    if (value === activeElement) {
      setActiveElement("");
    } else {
      setActiveElement(value);
    }
  };
  return (
    <>
      <div id="accordion w-11/12 mx-auto">
        <div className="rounded-t-lg border border-neutral-200 bg-white">
          <h2 className="mb-0" id="headingOne">
            <button
              className={`text-xl sm:text-2xl ${
                activeElement === id &&
                `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] `
              } group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none`}
              type="button"
              onClick={() => handleClick(id)}
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {title}
              <span
                className={`${
                  activeElement === id
                    ? `rotate-[-180deg] -mr-1`
                    : `rotate-0 fill-[#212529]`
                } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </button>
          </h2>
          <TECollapse
            show={activeElement === id}
            className="!mt-0 !rounded-b-none !shadow-none"
          >
            <div className="px-5 py-4 ">
             {content}
            </div>
          </TECollapse>
        </div>
      </div>
    </>
  );
}
