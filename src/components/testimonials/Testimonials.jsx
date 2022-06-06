import React from "react";
import PageSectionLayout from "../common/PageSectionLayout";
import SectionHeading from "../common/SectionHeading";

export const Testimonials = () => {
  return (
    <div>
      <section id="testimonials" className="scroll-mt-20 mt-5">
        <SectionHeading className="" heading={"What They've Said"} />
        <section className=" body-font py-4 bg-emerald-400">
          <div className="max-w-7xl px-2 mx-auto">
            <div className="flex flex-wrap m-0">
              <div className="p-2 md:w-1/2 w-full">
                <div className="h-full md:relative bg-gray-100 p-5 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <div className="flex flex-col gap-18 justify-between ">
                    <div>
                      <p className="leading-relaxed text-base mb-6 ">
                        Really impressed with the service and roof blinds Semper
                        Blinds provided, from start to finish the communication
                        was superb and have to say that we always go with Semper
                        Blinds in the future for any blinds needs.
                      </p>
                    </div>
                    <div className="md:absolute bottom-4">
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="https://images.pexels.com/photos/531139/pexels-photo-531139.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font text-lg font-semibold text-gray-900">
                            Mrs Callaghan
                          </span>
                          {/* <span className="text-gray-500 text-sm">UI DEVELOPER</span> */}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-5 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-base mb-6">
                    We looked all over the internet for someone to provide a
                    roof lantern blind for our extension, the prices of which
                    were mind blowing! So when Semper Blinds came along with
                    their quotation we was literally blown away and thought it
                    was too good to be true. All that was needless worry because
                    they surpassed our expectations and better still we were
                    able to get some more blinds while staying within budget!
                  </p>
                  <a className="inline-flex items-center">
                    <img
                      alt="testimonial"
                      src="/images/Testimonials/avatar2.avif"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font text-lg font-semibold text-gray-900">
                        Mrs Fielding
                      </span>
                      {/* <span className="text-gray-500 text-sm">DESIGNER</span> */}
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap m-0">
              <div className="p-2 md:w-1/2 w-full">
                <div className="h-full md:relative bg-gray-100 p-5 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <div className="flex flex-col gap-18 justify-between ">
                    <div>
                      <p className="leading-relaxed text-base mb-6">
                        Having used Semper Blinds before, it was a no brainer
                        going back to them and the service was still 5* and I
                        still tell them their prices are too low!! Will never
                        use another blind company, and recommend them to all our
                        friends and family.
                      </p>
                    </div>
                    <div className="md:absolute bottom-4">
                      <a className="inline-flex items-center">
                         <img
                      alt="testimonial"
                      src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font text-lg font-semibold text-gray-900">
                            Mr Keeton
                          </span>
                          {/* <span className="text-gray-500 text-sm">UI DEVELOPER</span> */}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 md:w-1/2 w-full">
                <div className="h-full bg-gray-100 p-5 rounded">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="block w-5 h-5 text-gray-400 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <div className="flex flex-col gap-18 justify-between ">
                    <div>
                      <p className="leading-relaxed text-base mb-6">
                        We had Semper Blinds recommended from a work colleague
                        to looked at providing a blind solution to some quite
                        unique shaped windows. When Stuart came to look, from
                        the start we knew we had the right company, his
                        knowledge and passion for his work was plain to see and
                        after a good conversation we couldn't wait to see the
                        result. Simply put he hit the nail on the head and we
                        get to see our wonderfully made blinds just how we
                        wanted! Great work Stuart!
                      </p>
                    </div>
                    <div>
                      <a className="inline-flex items-center">
                        <img
                          alt="testimonial"
                          src="/images/Testimonials/avatar4.avif"
                          className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                        />
                        <span className="flex-grow flex flex-col pl-4">
                          <span className="title-font text-lg font-semibold text-gray-900">
                            Mr Pointon
                          </span>
                          {/* <span className="text-gray-500 text-sm">UI DEVELOPER</span> */}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
