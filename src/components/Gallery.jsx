import React from "react";
import SectionHeading from "./common/SectionHeading";
// import ImageGallery from "react-image-gallery";
// import { images } from "../constants/galleryimages";

function Gallery() {
  return (
    <div>
      <section id="gallery" class="text-gray-700 scroll-mt-10">
        <SectionHeading className="" heading={"Image Gallery"} />
        <div class="container px-5 py-5 mx-auto bg-emerald-400">
          <div class="text-center mb-5"></div>
          {/* <ImageGallery items={images} /> */}
          <div class="container mx-auto px-20">
            <section class="py-1 px-1">
              <div class="flex flex-wrap -mx-1">
                <div class="image hidden md:block md:w-1/2 px-1">
                  <img
                    src="./images/gallery_images/Arena-ElectricAqua.jpg"
                    alt=""
                    class="image__img h-full w-full bg-cover rounded "
                  ></img>
                  <div className="image__overlay image__overlay--primary">
                    <div className="image__title">Arena-ElectricAqua</div>
                    <p className="image__description">Here we have some text</p>
                  </div>
                </div>
                <div class="md:w-1/2 h-auto px-1">
                  <div class="image mb-2">
                    <img
                      class="image__img rounded-lg shadow-md"
                      src="https://source.unsplash.com/random/1280x720"
                      // src="./images/gallery_images/Infusion asc Micro Taupe.jpg"
                      alt=""
                    />
                    <div className="image__overlay image__overlay--primary">
                      <div className="image__title">
                        Infusion asc Micro Taupe
                      </div>
                      <p className="image__description">
                        Here we have some text
                      </p>
                    </div>
                  </div>
                  <div class="image mb-2">
                    <img
                      class="image__img rounded shadow-md"
                      src="https://source.unsplash.com/random/1280x720"
                      // src="./images/gallery_images/Intu 1.jpeg"
                      alt=""
                    />
                    <div className="image__overlay image__overlay--primary">
                      <div className="image__title">Intu 1</div>
                      <p className="image__description">
                        Here we have some text
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section class="py-1 px-1">
              <div class="flex flex-wrap -mx-1">
                <div class="image md:w-1/2 px-1 mb-2 md:mb-0">
                  <img
                    class="image__img rounded shadow-md"
                    // src="https://source.unsplash.com/random/1280x720"
                    src="./images/gallery_images/Intu Roller.JPG"
                    alt=""
                  />
                  <div className="image__overlay image__overlay--primary">
                      <div className="image__title">Intu 1</div>
                      <p className="image__description">
                        Here we have some text
                      </p>
                    </div>
                </div>
                <div class="image md:w-1/2 px-1 mb-2 md:mb-0">
                  <img
                    class="image__img rounded shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    // src="./images/gallery_images/Intu Venetian.jpg"
                    alt=""
                  />
                  <div className="image__overlay image__overlay--primary">
                      <div className="image__title">Intu 1</div>
                      <p className="image__description">
                        Here we have some text
                      </p>
                    </div>
                </div>
              </div>
            </section>

            <section class="pt-1 px-1">
              <div class="flex flex-wrap -mx-1">
                <div class="md:w-1/3 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
                <div class="md:w-1/3 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
                <div class="md:w-1/3 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
                <div class="md:w-1/3 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
                <div class="md:w-1/3 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
                <div class="md:w-1/3 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
              </div>
            </section>

            <section class="py-0 px-1">
              <div class="flex flex-wrap -mx-1 -mb-2">
                <div class="md:w-1/4 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
                <div class="md:w-1/4 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
                <div class="md:w-1/4 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
                <div class="md:w-1/4 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
                <div class="md:w-1/4 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
                <div class="md:w-1/4 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
                <div class="md:w-1/4 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
                <div class="md:w-1/4 px-1 mb-2">
                  <img
                    class="rounded-none shadow-md"
                    src="https://source.unsplash.com/random/1280x720"
                    alt=""
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
