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

          <section class="py-8 px-4">
            <div class="flex flex-wrap -mx-4">
              <div class=" w-full md:w-1/2 px-4">
                <div class=" h-full w-full bg-cover rounded shadow-md" style={{ backgroundImage: "url('https://source.unsplash.com/random/1280x720')" }}></div>

              </div>
              <div class=" md:w-1/2 h-auto px-4">
                <div class="mb-8 relative">
                  <img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
                  {/* <div class="absolute right-0 bottom-10 z-20 px-6 py-4">
                    <h4 class="mb-3 text-xl font-semibold tracking-tight text-black">This is the title</h4>
                    <p class="leading-normal text-black">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                  </div> */}
                  <div class="backdrop-blur-sm h-full w-full opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold">Dwayne</div>
                </div>
                <div><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              </div>
            </div>
          </section>

          <section class="py-8 px-4">
            <div class="flex flex-wrap -mx-4">
              <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" />
                
              </div>
              <div class="md:w-1/2 px-4 mb-8 md:mb-0"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
            </div>
          </section>

          <section class="pt-8 px-4">
            <div class="flex flex-wrap -mx-4">
              <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div class="md:w-1/3 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
            </div>
          </section>

          <section class="py-8 px-4">
            <div class="flex flex-wrap -mx-4 -mb-8">
              <div class="md:w-1/4 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div class="md:w-1/4 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div class="md:w-1/4 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div class="md:w-1/4 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div class="md:w-1/4 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div class="md:w-1/4 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div class="md:w-1/4 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
              <div class="md:w-1/4 px-4 mb-8"><img class="rounded shadow-md" src="https://source.unsplash.com/random/1280x720" alt="" /></div>
            </div>
          </section>
        </div>

      </section>
    </div>
  );
}

export default Gallery;
