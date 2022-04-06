import React from "react";
import Navbar from "./Navbar";
import { MailIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-image bg-black">
        <div className=" ">
          {/* <Navbar ></Navbar> */}

          <div className="inner-header flex justify-center pt-3">
            <div className="px-2 pt-2 ">
              <div className=" w-full h-full justify-center items-center gap-4 ">
                <div className="">
                  <div className="text-2xl md:text-5xl my-4 text-center font-semibold text-white">
                    Why choose{" "}
                    <span className="text-green-500">Semper Blinds?</span>
                  </div>
                  <p className="text-xl text-center lg:w-2/3 mx-auto text-semibold m-0 p-0 text-white">
                    <div className="text-center">
                      We're a family run company with over 35 years experience
                      who specialise in all blinds that are pleated or cellular.
                      Based in North East Manchester, we supply all across the
                      UK including a full survey and fit service for
                      conservatory roof blinds, shaped blinds and the "new kid
                      on the block" lantern blinds.
                    </div>
                  </p>
                  <div className="mt-7 ">
                    <a
                      href="/#contact"
                      class="w-max button-box-shadow flex mx-auto mb-0 text-white bg-green-500  hover:bg-green-600 rounded-lg text-base px-4 py-2 font-semibold  text-center  "
                    >
                      <MailIcon className=" top-4 text-gray-600 h-6 w-6 mr-1 stroke-2 stroke-white k" />
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Waves Container--> */}
          <div>
            <svg
              className="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shapeRendering="auto"
            >
              <defs>
                <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                />
              </defs>
              <g className="parallax">
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="0"
                  fill="rgba(255,255,255,0.7"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="3"
                  fill="rgba(255,255,255,0.5)"
                />
                <use
                  xlinkHref="#gentle-wave"
                  x="48"
                  y="5"
                  fill="rgba(255,255,255,0.3)"
                />
                <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
              </g>
            </svg>
          </div>
          {/* <!--Waves end--> */}
        </div>
        {/* <!--Header ends--> */}

        {/* <!--Content starts-->
      <div className="content flex">
        <p>By.Goodkatz | Free to use </p>
      </div>
      <!--Content ends--> */}
      </div>
    </>
  );
};

export default Header;
