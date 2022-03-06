import React from "react";
import Navbar from "./Navbar";
import { MailIcon } from "@heroicons/react/outline";


const Header = () => {
  return (
    <>
      <div className="  bg-white">
        <div className="bg-gradient">

          {/* <Navbar></Navbar> */}

          <div className="inner-header flex justify-center py-5">
            <div className="xl:w-11/12 p-2 sm:p-4">
              <div className=" md:flex w-full h-full justify-center items-center gap-5">
                <div className="md:w-1/2">
                  <div className="text-2xl md:text-5xl mb-8 text-left font-semibold text-white">
                    Why choose <span className="text-green-500">Semper Blinds ?</span>
                  </div>
                  <p className="text-xl text-semibold m-0 p-0 text-gray-300">
                    We're a family run company with over 35years experience who
                    specialise in all blinds that are pleated or cellular. Based
                    in North East Manchester, we supply all across the UK
                    including a full survey and fit service for conservatory
                    roof blinds, shaped blinds and the "new kid on the block"
                    lantern blinds.
                  </p>
                  <div className="mt-3">
                    <button
                      type="button"
                      class="flex mb-5 text-white bg-green-500  hover:bg-green-600 rounded-lg text-base px-4 py-2 font-semibold  text-center  "
                    >
                      <MailIcon className=" top-4 text-gray-600 h-6 w-6 mr-1 stroke-2 stroke-white k" />
                      Contact Us
                    </button>
                  </div>
                </div>

                <div className="mx-auto md:w-1/2">
                  <img
                    src="https://media.istockphoto.com/photos/industrial-style-bathroom-picture-id1134249590?b=1&k=20&m=1134249590&s=170667a&w=0&h=Kc80AWEI0s8875Qb0Z3rWK1V8OfWXOPvmQkmcLnlv50="
                    className="w-full h-auto rounded-xl"
                    alt=""
                  ></img>
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