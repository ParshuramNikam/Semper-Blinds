import React, { useEffect } from "react";
import "./Features.css";
import Feature from "./Feature";
import { FeatureList } from "./data";
import SectionHeading from "../common/SectionHeading";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section id="features">
      <SectionHeading className="" heading={"Ordering with Semper Blinds"} />
      <div className="container features">
        <div className="title" data-aos="fade-up">
          {/* <BsFillBookmarkStarFill color="orangered" size={30} /> */}
          <p className="u-text-small w-full lg:w-3/4 p-0 m-0">
            Getting an order to Semper Blinds couldn't be any easier, once you
            have your measurements you simply use the online form on our website
            or email direct to semperorders@gmail.com and we can then get on
            with fulfilling your blinds order!
          </p>
        </div>
        <div className="features-content">
          <div className="features-left" data-aos="fade-right">
            <img src={"/images/phone-features.png"} alt="phone" />
          </div>
          <div className="features-right" data-aos="fade-left">
            {FeatureList.map((feature) => (
              <Feature
                key={feature.id}
                // icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
