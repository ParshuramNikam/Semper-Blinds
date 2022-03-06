import React from "react";
import Category from "../components/Category";
import Faq from "../components/Faq";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

const HomePage = () => {
  return (
    <section className=" mx-auto flex justify-center">
      <div className="mx-auto flex">
        <section>
          <Navbar />
          <Header />
          {/* <Services /> */}
          <Category />
          <Faq />
        </section>
      </div>
    </section>
  );
};

export default HomePage;
