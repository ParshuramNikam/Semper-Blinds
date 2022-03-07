import React from 'react'
import SectionHeading from './common/SectionHeading'
import ImageGallery from 'react-image-gallery';
import { images } from '../constants/galleryimages';

function Gallery() {
  return (
    <div>
            <section id='gallery' class="text-gray-700 scroll-mt-10">
                <div class="container px-5 py-5 mx-auto">
                    <div class="text-center mb-5">
                    <SectionHeading className="" heading={"Image Gallery"} /> 
                    </div>
                    <ImageGallery items={images} />
                </div>
            </section>
        </div>

    )
}

export default Gallery