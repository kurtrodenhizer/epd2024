"use client";

import React from "react";
import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/send-email";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage: FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData, e: any) {
    e.target.reset(); // reset after form submit

    sendEmail(data);
  }
  return (
    <section className="md:py-24  lg:h-[65vh]  bg-gray-100 z-10 min-h-[maxContent] w-full   ">
      {/* // <section className=" bg-gray-100 z-10 h-[70vh] w-full bg-red-500 m-none p-none grid grid-cols-1 justify-center items-stretch  "> */}
      {/* <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x"> */}

      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x ">
        <div className="py-6 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6 text-teal"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>1-781-910-2898</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6 text-teal"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>kurt@eprocessdevelopment.com</span>
            </p>
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 mr-2 sm:mr-6 text-teal"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Beverly, MA</span>
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
        >
          <label className="block" htmlFor="name">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Name"
              className="block py-3 px-4 w-full rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
              {...register("name", { required: true })}
            />
          </label>
          <label htmlFor="email" className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="example@domain.com"
              className="block w-full py-3 px-4 rounded-md shadow-sm focus:ring focus:ri focus:ri dark:bg-gray-800"
              {...register("email", { required: true })}
            />
          </label>
          <label className="block" htmlFor="message">
            <span className="mb-1">Message</span>
            <textarea
              rows={4}
              placeholder="Message"
              className="block  py-3 px-4 w-full rounded-md focus:ring focus:ri focus:ri resize-none"
              {...register("message", { required: true })}
            ></textarea>
          </label>
          {/* <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ri dark:bg-violet-400 dark:text-gray-900 focus:ri hover:ri"
            >
              Submit
            </button> */}

          <button
            // type="button"
            className=" self-center px-10 py-3 py-2.5 mt-4 px-8 me-2  mb-2 text-md font-medium text-white focus:outline-none bg-blue-600 rounded-full border border-blue-400  hover:bg-blue-500 focus:font-semibold focus:border-blue-500 focus:ring "
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
