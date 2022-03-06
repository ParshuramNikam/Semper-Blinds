import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-sky-500 "> {/* gradient-bg */}
        <div className="header">

          <div className="inner-header flex justify-center pt-3">
            <div className="xl:w-11/12 p-2 sm:p-4">
              <div className=" md:flex w-full h-full justify-center items-center gap-5">
                <div className="md:w-1/2">
                  <div className="text-2xl md:text-5xl mb-5 text-left font-semibold text-blue">
                    Why choose Semper Blinds?
                  </div>
                  <p className="text-lg md:text-2xl text-semibold m-0 p-0 text-white">
                    We're a family run company with over 35years experience who
                    specialise in all blinds that are pleated or cellular. Based
                    in North East Manchester, we supply all across the UK
                    including a full survey and fit service for conservatory
                    roof blinds, shaped blinds and the "new kid on the block"
                    lantern blinds.
                  </p>
                  <div className=" flex items-center pr-2 my-5 ">
                    <button
                      type="button"
                      className="text-white bg-blue  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-normal rounded-lg text-lg px-3 py-1.5  text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
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
          <div className="mt-2">
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
      </div>
    </>
  );
};

export default Header;
