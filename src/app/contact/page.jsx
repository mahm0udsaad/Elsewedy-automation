"use client"

import UploadBtn from "../component/uploadBtn"

export default function Contact() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <h1 className="text-center text-4xl font-semibold my-10">
        Contact US
      </h1>
    <form className="sm:w-full max-w-lg w-11/12 mx-auto">
  <div className="flex -mx-3">
    <div className="w-full md:w-1/2 px-3 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder=""  />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        E-mail
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 h-1/2">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
        Message
      </label>
      <textarea className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
    </div>
  </div>
  <UploadBtn />
  <div className="md:flex md:items-center">
    <div className="md:w-1/3 py-5">
      <button className="shadow w-full bg-red-800 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Send
      </button>
    </div>
    <div className="md:w-2/3"></div>
  </div>
</form>
    </main>
    </>
  )
}