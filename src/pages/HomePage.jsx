import React from "react";
import Category from "../components/Category";
import ContactUs from "../components/ContactUs";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Features from "../components/guideMe/Features";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { Testimonials } from "../components/testimonials/Testimonials";
import Gallery from "../components/Gallery";

const HomePage = () => {
  return (
    <section className=" mx-auto flex justify-center">
      <div className="mx-auto flex">
        <section>
          <Navbar />
          <Header />
          <Category />
          <Features />
          <Gallery />
          <Faq />
          <Testimonials />
          <ContactUs />
          <Footer />
        </section>
      </div>
    </section>
  );
};

export default HomePage;