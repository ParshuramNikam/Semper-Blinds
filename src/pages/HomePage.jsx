import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import { Testimonials } from "../components/testimonials/Testimonials";

const HomePage = () => {
  return (
    <section className=" mx-auto flex justify-center">
      <div className="mx-auto flex">
        <section>
          <Navbar />
          <Header />
          <Services />
          <Testimonials />
        </section>
      </div>
    </section>
  );
};

export default HomePage;