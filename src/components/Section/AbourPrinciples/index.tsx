import React from "react";

const AboutPrinciples = () => {
  return (
    <div className="block w-full overflow-hidden">
      <h6 className="uppercase font-mono font-semibold text-blue-200 text-24 md:text-[26px] leading-[30px] md:leading-[33.02px]">
        Our Principles
      </h6>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px] mt-24 md:mt-32">
        <div className="block font-barlowcondensed">
          <h6 className="font-bold text-18 tracking-[-0.02em] leading-[22px] mb-10 md:mb-12">
            Our Vision
          </h6>
          <p className="text-16 md:text-18 leading-[127%]">
            We collaborate with your business to help you clarify your core
            values, and then work together to create design that inspires
            positive change and contributes to the greater good.
          </p>
        </div>
        <div className="block font-barlowcondensed">
          <h6 className="font-bold text-18 tracking-[-0.02em] leading-[22px] mb-10 md:mb-12">
            Our Strategy
          </h6>
          <p className="text-16 md:text-18 leading-[127%]">
            As a partner to companies and communities, we explore the essence of
            your values and help frame your vision, in order to solve problems
            sustainably and elegantly.
          </p>
        </div>
        <div className="block font-barlowcondensed">
          <h6 className="font-bold text-18 tracking-[-0.02em] leading-[22px] mb-10 md:mb-12">
            Our Design
          </h6>
          <p className="text-16 md:text-18 leading-[127%]">
            We create a design system, with a clear and cohesive look and feel,
            that best translates your story into a brand experience.
          </p>
        </div>
        <div className="block font-barlowcondensed">
          <h6 className="font-bold text-18 tracking-[-0.02em] leading-[22px] mb-10 md:mb-12">
            Our Method
          </h6>
          <p className="text-16 md:text-18 leading-[127%]">
            In order to keep our focus on the quality of our work and provide
            clients with the best creative solutions, we undertake only one
            project a month
          </p>
        </div>
      </div>
      <p className="block font-barlowcondensed text-18 md:text-24 leading-[127%] mt-[28px] md:mt-32">
        Dassein Established in 2016, Dassein Design Bureau is a
        multidisciplinary design studio based in Bandung, Indonesia. The design
        aspect in business has a crucial function, which we respond to and we
        deepen so that each existing design can bridge all aspects of the needs
        of each business problem that is being faced.{" "}
      </p>
    </div>
  );
};

export default AboutPrinciples;
