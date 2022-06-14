import React from "react";
import { faqQuestions } from "../constants/faqQuestions";
import OneFAQ from "./common/OneFAQ";
import SectionHeading from "./common/SectionHeading";

const Faq = () => {
  return (
    <section id="faq" className="text-gray-700 scroll-mt-10">
      <div className="container px-5 py-5 mx-auto">
        <div className="text-center mb-5">
          <SectionHeading className="" heading={"Frequently Asked Question"} />
          <p className="text-base p-0 mt-5 text-center xl:w-2/4 lg:w-3/4 mx-auto">
            The most common questions about how our business works and what can
            do for you.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {faqQuestions.map((faqBunch, index) => (
            <div key={index} className="w-full lg:w-1/2 px-4 py-2">
              {faqBunch.map((faq, index) => (
                <OneFAQ
                  index={index}
                  question={faq.question}
                  answer={faq.answer}
                  key={index}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
