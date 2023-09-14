"use client"

import Slide from "../component/slide"

export default function Training() {
  return (
    <>
    <main className="flex min-h-screen">
      <Slide imgSrc={'/images/services/173.jpg'} text={<h1 className="text-red text-center">Welcome to Our Training Center! Let's Achieve Your Goals Together with Our Experienced Instructors Through a Wide Range of Courses</h1>} isActive={true}/>
    </main>
    </>
  )
}