"use client"

import Form from "../component/contactForm"

export default function Contact() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <h1 className="text-center text-4xl font-semibold my-10">
        Contact US
      </h1>
       <div className="flex w-11/12 justify-around">
      <a type="download" href="/SA - COMPANY PROFILE.pdf" >Downlaod</a>
      <Form />
       </div>
    </main>
    </>
  )
}