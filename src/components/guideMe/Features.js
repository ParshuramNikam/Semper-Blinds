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
    <section id="features" className="scroll-mt-20">
      <SectionHeading className="" heading={"Ordering with Semper Blinds"} />
      <div className=" overflow-hidden">
        <div className=" w-full mb-10" data-aos="fade-up">
          <p className="overflow-hidden u-text-small w-full mx-auto w-max-full lg:w-3/4 px-12 sm:px-2 m-0">
            Getting an order to Semper Blinds couldn't be any easier, once you
            have your measurements you simply use the online form on our website
            or email direct to semperorders@gmail.com and we can then get on
            with fulfilling your blinds order!
          </p>
        </div>
        <div className="features-content">
          <div className="">
            {FeatureList.map((feature) => (
              <Feature
                index={feature.id}
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
