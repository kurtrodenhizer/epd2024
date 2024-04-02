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
    <section className="z-10 h-full min-h-[maxContent]  w-full bg-gray-100 md:py-24    ">
      <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:divide-x lg:px-8 ">
        <div className="py-6 md:px-6 md:py-0">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pb-4 pt-2">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-2 h-5 w-5 text-teal sm:mr-6"
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
                className="mr-2 h-5 w-5 text-teal sm:mr-6"
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
                className="mr-2 h-5 w-5 text-teal sm:mr-6"
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
          className="flex flex-col space-y-6 py-6 md:px-6 md:py-0"
        >
          <label className="block" htmlFor="name">
            <span className="mb-1">Full name</span>
            <input
              type="text"
              placeholder="Name"
              className="focus:ri focus:ri block w-full rounded-md px-4 py-3 shadow-sm focus:ring dark:bg-gray-800"
              {...register("name", { required: true })}
            />
          </label>
          <label htmlFor="email" className="block">
            <span className="mb-1">Email address</span>
            <input
              type="email"
              placeholder="example@domain.com"
              className="focus:ri focus:ri block w-full rounded-md px-4 py-3 shadow-sm focus:ring dark:bg-gray-800"
              {...register("email", { required: true })}
            />
          </label>
          <label className="block" htmlFor="message">
            <span className="mb-1">Message</span>
            <textarea
              rows={4}
              placeholder="Message"
              className="focus:ri  focus:ri block w-full resize-none rounded-md px-4 py-3 focus:ring"
              {...register("message", { required: true })}
            ></textarea>
          </label>

          <button className=" text-md mb-2 me-2 mt-4 self-center rounded-full border  border-blue-400 bg-blue-600 px-10 px-8 py-2.5 py-3 font-medium text-white hover:bg-blue-500  focus:border-blue-500 focus:font-semibold focus:outline-none focus:ring ">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
