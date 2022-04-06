import React from "react";
import SectionHeading from "./common/SectionHeading";
// import ImageGallery from "react-image-gallery";
// import { images } from "../constants/galleryimages";

function Gallery() {
  return (
    <div>
      <section id="gallery" class="text-gray-700 scroll-mt-20">
        <SectionHeading className="" heading={"Image Gallery"} />
        <div class="container mx-auto px-4">
          <section class="lg:flex gap-0 py-0 px-0">
            <div class="md:flex justify-center lg:justify-end ">
              <div class="relative w-full md:w-2/5 pl-4 pr-1">
                <img
                  class=" h-full w-full bg-cover rounded shadow-md"
                  alt=""
                  style={{
                    backgroundImage:
                      "url('/images/gallery-images/Arena-ElectricAqua.png')",
                  }}
                />
                <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                  Arena-ElectricAqua
                </div>
              </div>
              <div class=" md:w-1/2 h-auto px-0">
                <div class="mb-1 relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Infusion Micro Taupe.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl  text-black font-semibold">
                    Infusion Micro Taupe
                  </div>
                </div>
                <div class="md:hidden gallery-sm-image mb-1 relative">
                  <img
                    class="rounded shadow-md gallery-sm-image w-full"
                    src="images/gallery-images/Arena-ElectricAqua.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Arena-Electric Aqua
                  </div>
                </div>
                <div className="relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Infusion Micro White.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl  text-black font-semibold">
                    Infusion Micro White
                  </div>
                </div>
              </div>
            </div>
            <div class="md:flex mt-1 lg:mt-0 justify-center lg:justify-start">
              <div class="relative w-full md:w-2/5 pl-4 pr-1">
                <img
                  class=" h-full w-full bg-cover rounded shadow-md"
                  alt=""
                  style={{
                    backgroundImage:
                      "url('/images/gallery-images/Aren Mercury.png')",
                  }}
                />
                <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                  Aren Mercury
                </div>
              </div>
              <div class=" md:w-1/2 h-auto px-0">
                <div class="mb-1 relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Intu 1.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Intu
                  </div>
                </div>
                <div class="md:hidden gallery-sm-image mb-1 relative">
                  <img
                    class="rounded shadow-md gallery-sm-image w-full"
                    src="images/gallery-images/Aren Mercury.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Aren Mercury
                  </div>
                </div>
                <div className="relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Intu Roller.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Intu Roller
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="mt-1 container mx-auto px-4">
          <section class="lg:flex gap-0 py-0 px-0">
            <div class="md:flex justify-center lg:justify-end ">
              <div class="relative w-full md:w-2/5 pl-4 pr-1">
                <img
                  class=" h-full w-full bg-cover rounded shadow-md"
                  alt=""
                  style={{
                    backgroundImage:
                      "url('/images/gallery-images/Dorothy.png')",
                  }}
                />
                <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                  Dorothy
                </div>
              </div>
              <div class=" md:w-1/2 h-auto px-0">
                <div class="mb-1 relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Intu Venetian.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Intu Venetian
                  </div>
                </div>
                <div class="md:hidden gallery-sm-image mb-1 relative">
                  <img
                    class="rounded shadow-md gallery-sm-image w-full"
                    src="images/gallery-images/Dorothy.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Dorothy
                  </div>
                </div>
                <div className="relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Intu.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Intu
                  </div>
                </div>
              </div>
            </div>
            <div class="md:flex mt-1 lg:mt-0 justify-center lg:justify-start">
              <div class="relative w-full md:w-2/5 pl-4 pr-1">
                <img
                  class=" h-full w-full bg-cover rounded shadow-md"
                  alt=""
                  style={{
                    backgroundImage:
                      "url('/images/gallery-images/Freehang.png')",
                  }}
                />
                <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                  Freehang
                </div>
              </div>
              <div class=" md:w-1/2 h-auto px-0">
                <div class="mb-1 relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Perfect Fit Venetians.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Perfect Fit Venetians
                  </div>
                </div>
                <div class="md:hidden gallery-sm-image mb-1 relative">
                  <img
                    class="rounded shadow-md gallery-sm-image w-full"
                    src="images/gallery-images/Freehang.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Freehang
                  </div>
                </div>
                <div className="relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Perfect Fits 1.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Perfect Fits
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="mt-1 container mx-auto px-4">
          <section class="lg:flex gap-0 py-0 px-0">
            <div class="md:flex justify-center lg:justify-end ">
              <div class="relative w-full md:w-2/5 pl-4 pr-1">
                <img
                  class=" h-full w-full bg-cover rounded shadow-md"
                  alt=""
                  style={{
                    backgroundImage: "url('/images/gallery-images/Intu 2.png')",
                  }}
                />
                <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-black font-semibold">
                  Intu
                </div>
              </div>
              <div class=" md:w-1/2 h-auto px-0">
                <div class="mb-1 relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Perfect Fits 2.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Perfect Fits
                  </div>
                </div>
                <div class="md:hidden gallery-sm-image mb-1 relative">
                  <img
                    class="rounded shadow-md gallery-sm-image w-full"
                    src="images/gallery-images/Intu 2.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-black font-semibold">
                    Intu
                  </div>
                </div>
                <div className="relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Perfect Fits 3.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Perfect Fits
                  </div>
                </div>
              </div>
            </div>
            <div class="md:flex mt-1 lg:mt-0 justify-center lg:justify-start">
              <div class="relative w-full md:w-2/5 pl-4 pr-1">
                <img
                  class=" h-full w-full bg-cover rounded shadow-md"
                  alt=""
                  style={{
                    backgroundImage:
                      "url('/images/gallery-images/Intu Multizone.png')",
                  }}
                />
                <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                  Intu Multizone
                </div>
              </div>
              <div class=" md:w-1/2 h-auto px-0">
                <div class="mb-1 relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Perfect Fits 4.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Perfect Fits
                  </div>
                </div>
                <div class="md:hidden gallery-sm-image mb-1 relative">
                  <img
                    class="rounded shadow-md gallery-sm-image w-full"
                    src="images/gallery-images/Intu Multizone.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Intu Multizone
                  </div>
                </div>
                <div className="relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Pleated Hula Teal.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Pleated Hula Teal
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="mt-1 container mx-auto px-4">
          <section class="lg:flex gap-0 py-0 px-0">
            <div class="md:flex justify-center lg:justify-end ">
              <div class="relative w-full md:w-2/5 pl-4 pr-1">
                <img
                  class=" h-full w-full bg-cover rounded shadow-md"
                  alt=""
                  style={{
                    backgroundImage:
                      "url('/images/gallery-images/Lantern.png')",
                  }}
                />
                <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                  Lantern
                </div>
              </div>
              <div class=" md:w-1/2 h-auto px-0">
                <div class="mb-1 relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Roller.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-black font-semibold">
                    Roller
                  </div>
                </div>
                <div class="md:hidden gallery-sm-image mb-1 relative">
                  <img
                    class="rounded shadow-md gallery-sm-image w-full"
                    src="images/gallery-images/Lantern.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Lantern
                  </div>
                </div>
                <div className="relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Roof 1.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Roof
                  </div>
                </div>
              </div>
            </div>
            <div class="md:flex mt-1 lg:mt-0 justify-center lg:justify-start">
              <div class="relative w-full md:w-2/5 pl-4 pr-1">
                <img
                  class=" h-full w-full bg-cover rounded shadow-md"
                  alt=""
                  style={{
                    backgroundImage:
                      "url('/images/gallery-images/Perfect Fit Rollers.png')",
                  }}
                />
                <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-black font-semibold">
                  Perfect Fit Rollers
                </div>
              </div>
              <div class=" md:w-1/2 h-auto px-0">
                <div class="mb-1 relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Roof 3.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Roof
                  </div>
                </div>
                <div class="md:hidden gallery-sm-image mb-1 relative">
                  <img
                    class="rounded shadow-md gallery-sm-image w-full"
                    src="images/gallery-images/Perfect Fit Rollers.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-black font-semibold">
                    Perfect Fit Rollers
                  </div>
                </div>
                <div className="relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Roof 4.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Roof
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="mt-1 container mx-auto px-4">
          <section class="lg:flex gap-0 py-0 px-0">
            <div class="md:flex justify-center lg:justify-end ">
              <div class="relative w-full md:w-2/5 pl-4 pr-1">
                <img
                  class=" h-full w-full bg-cover rounded shadow-md"
                  alt=""
                  style={{
                    backgroundImage: "url('/images/gallery-images/Roof 2.png')",
                  }}
                />
                <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                  Roof
                </div>
              </div>
              <div class=" md:w-1/2 h-auto px-0">
                <div class="mb-1 relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Roof 5.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-black font-semibold">
                    Roof
                  </div>
                </div>
                <div class="md:hidden gallery-sm-image mb-1 relative">
                  <img
                    class="rounded shadow-md gallery-sm-image w-full"
                    src="images/gallery-images/Dorothy.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Dorothy
                  </div>
                </div>
                <div className="relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Roof 6.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Roof
                  </div>
                </div>
              </div>
            </div>
            <div class="md:flex mt-1 lg:mt-0 justify-center lg:justify-start">
              <div class="relative w-full md:w-2/5 pl-4 pr-1">
                <img
                  class=" h-full w-full bg-cover rounded shadow-md"
                  alt=""
                  style={{
                    backgroundImage:
                      "url('/images/gallery-images/Semper Shapes 1.png')",
                  }}
                />
                <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                  Semper Shapes
                </div>
              </div>
              <div class=" md:w-1/2 h-auto px-0">
                <div class="mb-1 relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Semper Shapes 2.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Semper Shapes
                  </div>
                </div>
                <div class="md:hidden gallery-sm-image mb-1 relative">
                  <img
                    class="rounded shadow-md gallery-sm-image w-full"
                    src="images/gallery-images/Semper Shapes 1.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Semper Shapes
                  </div>
                </div>
                <div className="relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Semper Shapes 3.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                    Semper Shapes
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="mt-1 container mx-auto px-4">
          <section class="lg:flex gap-0 py-0 px-0">
            <div class="md:flex justify-center lg:justify-end ">
              <div class="relative w-full md:w-2/5 pl-4 pr-1">
                <img
                  class=" h-full w-full bg-cover rounded shadow-md"
                  alt=""
                  style={{
                    backgroundImage: "url('/images/gallery-images/Intu 2.png')",
                  }}
                />
                <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-black font-semibold">
                Intu
                </div>
              </div>
              <div class=" md:w-1/2 h-auto px-0">
                <div class="mb-1 relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Semper Shapes 4.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                  Semper Shapes
                  </div>
                </div>
                <div class="md:hidden gallery-sm-image mb-1 relative">
                  <img
                    class="rounded shadow-md gallery-sm-image w-full"
                    src="images/gallery-images/Intu 2.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-black font-semibold">
                  Intu
                  </div>
                </div>
                <div className="relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Semper Splits 1.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                  Semper Splits
                  </div>
                </div>
              </div>
            </div>
            <div class="md:flex mt-1 lg:mt-0 justify-center lg:justify-start">
              <div class="relative w-full md:w-2/5 pl-4 pr-1">
                <img
                  class=" h-full w-full bg-cover rounded shadow-md"
                  alt=""
                  style={{
                    backgroundImage:
                      "url('/images/gallery-images/White.png')",
                  }}
                />
                <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-black font-semibold">
                White
                </div>
              </div>
              <div class=" md:w-1/2 h-auto px-0">
                <div class="mb-1 relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Semper Splits 2.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                  Semper Splits
                  </div>
                </div>
                <div class="md:hidden gallery-sm-image mb-1 relative">
                  <img
                    class="rounded shadow-md gallery-sm-image w-full"
                    src="images/gallery-images/White.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-black font-semibold">
                  White
                  </div>
                </div>
                <div className="relative">
                  <img
                    class="rounded shadow-md"
                    src="images/gallery-images/Skylight.png"
                    alt=""
                  />
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-xl text-white font-semibold">
                  Skylight
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
