"use client"
import { useForm } from 'react-hook-form';
import UploadBtn from './uploadBtn';
import { FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch('https://elsewedy-apiv1.onrender.com/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        reset(); // Reset form fields after submission (optional)
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <>
    {isSubmitted && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg flex items-center">
            <FaCheckCircle className="text-green-500 text-4xl mr-4" />
            <span className="text-gray-800">Form submitted successfully!</span>
          </div>
        </div>
      )}
    <form onSubmit={handleSubmit(onSubmit)} className="sm:w-full max-w-lg sm:w-5/6 h-fit">
      <div className="flex -mx-3">
        <div className="w-full md:w-1/2 px-3 md:mb-0">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
            First Name
          </label>
          <input {...register('firstName', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" />
          {errors.firstName && <span className="text-red-500">First name is required</span>}
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
            Last Name
          </label>
          <input {...register('lastName')} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
            E-mail
          </label>
          <input {...register('email', { required: true })} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="email" />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 h-1/2">
        <div className="w-full px-3">
          <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea {...register('message' , {required:true})} className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-20 resize-none" id="message"></textarea>
          {errors.message && <span className="text-red-500">message is required</span>}
        </div>
      </div>
      <UploadBtn />
      <div className="md:flex md:items-center">
        <div className="md:w-1/3 py-5">
          <input type="submit" value="Send" className="shadow w-full bg-red-800 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" />
        </div>
        <div className="md:w-2/3"></div>
      </div>
    </form>
    </>
  );
};

export default Form;
