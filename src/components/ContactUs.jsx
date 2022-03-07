import React from "react";
import SectionHeading from "./common/SectionHeading";
import {
  ShareIcon,
  SearchIcon,
  CogIcon,
  MailIcon,
  PhoneIcon,
} from "@heroicons/react/outline";

function ContactUs() {
  return (
    <>
      <div
        id="contact"
        className=" max-w-screen-md mx-auto p-5 scroll-mt-10"
      >
        <div>
          <div className="text-center mb-10">
            <SectionHeading className="" heading={"Get In Touch"} />
          </div>
          <section className=" max-w:sm lg:block bg-white  h-max px-3 py-5 m-2 border border-gray-200 rounded-lg  overflow-hidden shadow-lg">
            <div className="flex gap-5 items-center justify-evenly">
              <div className="">
                <div>
                  <button
                    type="button"
                    className="flex gap-2 p-1 rounded-full text-gray-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">mail</span>
                    <MailIcon
                      className="relative top-1  w-5 h-5 hover:stroke-emerald-600"
                      aria-hidden="true"
                    />
                    jhondoe@gmail.com
                  </button>
                  <button
                    type="button"
                    className="flex gap-1 p-1 rounded-full text-gray-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">phone-2</span>
                    <PhoneIcon
                      className="relative top-1 w-5 h-5 hover:stroke-emerald-600"
                      aria-hidden="true"
                    />
                    +91 7939394998
                  </button>
                  <button
                    type="button"
                    className="mb-3 flex gap-1 p-1 rounded-full text-gray-800  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">phone-1</span>
                    <PhoneIcon
                      className="relative top-1 w-5 h-5 hover:stroke-emerald-600"
                      aria-hidden="true"
                    />
                    +91 9829394998
                  </button>
                </div>
                <div>
                  <iframe
                    title="address"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9496.687666638714!2d-2.233234!3d53.483258!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1becf2f78af%3A0xae7174cf239216a7!2sNorthern%20Quarter%2C%20Manchester%2C%20UK!5e0!3m2!1sen!2sin!4v1646647156430!5m2!1sen!2sin"
                    width="400"
                    height="300"
                    className="b-0 w-80 h-64"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              <div>
                {/* <section className=" max-w:sm lg:block bg-white  h-max px-3 py-5 m-2 border border-gray-200 rounded-lg  overflow-hidden shadow-lg"> */}
                <form className="w-full">
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Jane"
                      />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-last-name"
                      >
                        Last Name
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-last-name"
                        type="text"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      >
                        Email Address
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-email"
                        type="email"
                        placeholder="jhondoe11@gmail.com"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                      >
                        Your Message
                      </label>
                      <textarea
                        rows="5"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      ></textarea>
                    </div>
                    <div className="flex justify-between w-full px-3">
                      <button
                        className="shadow bg-green-500 hover:bg-green-600 focus:shadow-outline focus:outline-none text-white font-semibold py-2 px-6 rounded"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
