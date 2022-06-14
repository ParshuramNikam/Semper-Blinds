import React from "react";
import SectionHeading from "./common/SectionHeading";
import {
  ShareIcon,
  SearchIcon,
  CogIcon,
  MailIcon,
  PhoneIcon,
  UserCircleIcon,
  LocationMarkerIcon,
} from "@heroicons/react/outline";
import ContactForm from "./ContactForm";

function ContactUs() {
  return (
    <>
      <div id="contact" className=" max-w-screen-lg mx-auto scroll-mt-20">
        <div>
          <div className="text-center mb-10">
            <SectionHeading className="" heading={"Get In Touch"} />
          </div>
          <section className=" max-w:sm lg:block bg-white  h-max px-5 py-5 m-2 border border-gray-200 rounded-lg  overflow-hidden shadow-lg">
            <div className="md:flex gap-5 items-center justify-evenly">
              <div className="mb-12 md:mb-0">
                <div>
                  <a href="mailto:semperblinds@gmail.com">
                    <button
                      type="button"
                      className="flex mb-2 gap-2 p-1 rounded-full text-gray-800"
                    >
                      <span className="sr-only">mail</span>
                      <MailIcon
                        className="relative top-1  w-5 h-5 hover:stroke-lime-600"
                        aria-hidden="true"
                      />
                      semperblinds@gmail.com
                    </button>
                  </a>
                  <a href="tel:07766600131">
                    <button
                      type="button"
                      className="flex mb-2 gap-1 p-1 rounded-full text-gray-800"
                    >
                      <span className="sr-only">phone</span>
                      <PhoneIcon
                        className="relative top-1 w-5 h-5 hover:stroke-lime-600"
                        aria-hidden="true"
                      />
                      07766600131
                    </button>
                  </a>
                  <button
                    type="button"
                    className="mb-2 flex gap-1 p-1 rounded-full text-gray-800"
                  >
                    <span className="sr-only">main contact </span>
                    <UserCircleIcon
                      className="relative top-1 w-5 h-5 hover:stroke-lime-600"
                      aria-hidden="true"
                    />
                    Stuart Wilson (Owner)
                  </button>
                  {/* <a target="_blank" href="https://www.google.com/maps?ll=53.594021,-2.172725&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=7832728211740545772">
                    <button
                      type="button"
                      className="text-left mb-5 flex flex-nowrap items-start gap-1 p-1 rounded-full text-gray-800"
                    >
                      <span className="sr-only">Location</span>
                      <LocationMarkerIcon
                        className="relative  top-1 location_icon hover:stroke-lime-600"
                        aria-hidden="true"
                      />
                      Semper Blinds Unit 7, Harp Industrial Estate,Queensway, Rochdale, OL11 2QQ
                    </button>
                  </a> */}
                </div>
                <div>
                  <iframe
                    title="address"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.96866274217!2d-2.1749138841521947!3d53.594020780031656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bbbd68c48f4a3%3A0x6cb370cf1af9d2ec!2sSemper%20Blinds!5e0!3m2!1sen!2sin!4v1646973923611!5m2!1sen!2sin"
                    className="w-full md:w-80 lg:w-96 h-72"
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className="">
                <ContactForm />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
