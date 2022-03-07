import { HeartIcon } from "@heroicons/react/outline";
import React from "react";

function Footer() {
  return (
    <div class="footer-2 bg-gray-800 pt-6 md:pt-12">
      <div class="container px-4 mx-auto">
        <div class="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-6">
          <div class="footer-info lg:w-1/3 md:px-4">
            <h4 class="text-white text-2xl mb-4">
              Lorem ipsum dolor sit amet. 
            </h4>
            <p class=" p-0 m-0 text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo repellat dolorum, nam qui dolorem non tempore itaque
              harum neque perferendis!
            </p>
          </div>

          <div class="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div class="sm:flex">
              <div class="sm:flex-1">
                <h6 class="text-base font-medium text-white uppercase mb-2">
                  About
                </h6>
                <div>
                  <a href="#" class="text-gray-400 py-1 block hover:underline">
                    Company
                  </a>
                  <a href="#" class="text-gray-400 py-1 block hover:underline">
                    Culture
                  </a>
                  <a href="#" class="text-gray-400 py-1 block hover:underline">
                    Team
                  </a>
                  <a href="#" class="text-gray-400 py-1 block hover:underline">
                    Careers
                  </a>
                </div>
              </div>
              <div class="sm:flex-1 mt-4 sm:mt-0">
                <h6 class="text-base font-medium text-white uppercase mb-2">
                  What we offer
                </h6>
                <div>
                  <a href="#" class="text-gray-400 py-1 block hover:underline">
                    Blocks
                  </a>
                  <a href="#" class="text-gray-400 py-1 block hover:underline">
                    Resources
                  </a>
                  <a href="#" class="text-gray-400 py-1 block hover:underline">
                    Tools
                  </a>
                  <a href="#" class="text-gray-400 py-1 block hover:underline">
                    Tutorials
                  </a>
                  <a href="#" class="text-gray-400 py-1 block hover:underline">
                    Freebies
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
            <h5 class="text-lg text-white font-medium mb-4">
              Explore our site
            </h5>
            <button class="bg-green-500 text-white font-semibold hover:bg-green-600 rounded py-2 px-6 md:px-12 transition-colors duration-300">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div class="mt-4 py-4">
        <div class="container px-4 mx-auto">
          <div class="bg-gray-800 pt-2">
            <div
              class="flex pb-5 px-3 m-auto pt-5 border-t text-white text-sm flex-col
      max-w-screen-lg items-center"
            >
              <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                <a href="/#" class="w-6 mx-1">
                  <img
                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                    src="/images/socialMedia/facebook.svg"
                    alt=""
                  ></img>
                </a>
                <a href="/#" class="w-6 mx-1">
                  <img
                    className="fill-blue-500 cursor-pointer  text-gray-500 hover:text-indigo-600"
                    src="/images/socialMedia/twitter.svg"
                    alt=""
                  ></img>
                </a>
                <a href="/#" class="w-6 mx-1">
                  <img
                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                    src="/images/socialMedia/instagram.svg"
                    alt=""
                  ></img>
                </a>
                <a href="/#" class="w-6 mx-1">
                  <img
                    className="fill-current cursor-pointer text-gray-500 hover:text-indigo-600"
                    src="/images/socialMedia/linkedin.svg"
                    alt=""
                  ></img>
                </a>
              </div>
              <div class="my-5">© Copyright 2020. All Rights Reserved.</div>
            </div>
          </div>

          {/* <div class="md:flex md:-mx-4 md:items-center">
          <div class="md:flex-1 md:px-4 text-center md:text-left">
            <p class="text-white">&copy; <strong>FWR</strong></p>
          </div>
          <div class="md:flex-1 md:px-4 text-center md:text-right">
            <a href="#" class="py-2 px-4 text-white inline-block hover:underline">Terms of Service</a>
            <a href="#" class="py-2 px-4 text-white inline-block hover:underline">Privacy Policy</a>
          </div>
        </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;
