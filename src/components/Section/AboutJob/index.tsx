"use client";

import React from "react";
import CardJurnal, { TCardJurnalProps } from "@/components/Cards/CardJurnal";

const AboutJob = () => {
  return (
    <div className="block w-full mt-[65px] overflow-hidden">
      <h5 className="uppercase font-mono font-semibold text-blue-200 text-[26px] leading-[33.02px] mb-32">
        JOBS
      </h5>
      <p className="font-barlowcondensed text-24 leading-[30.48px]">
        We're currently on the look out for a Brand Strategist and a Senior
        Account Manager. If you think you would be a good fit for either role,
        please email{" "}
        <a href="mailto:dassein.general@gmail.com" className="text-blue-200">
          dassein.general@gmail.com
        </a>
      </p>

      <div className="">
        <h6 className="font-barlowcondensed font-bold text-18 leading-[48px] tracking-[-0.02em] mt-24 mb-16">
          Job Listings
        </h6>
        <div className="grid grid-cols-2 gap-[20%]">
          <CardJurnal
            title="Senior Account Manager"
            description={
              <span>
                Searching for an enthusiastic, creative and organised Senior
                Account Manager to join our team in London at our studio based
                in Shoreditch. <br />
                <br /> Role <br /> As our senior account manager, you will be
                the friendly face and main point of contact for our clients,
                ensuring all our work meets a high standard, is delivered on
                time and on budget.
              </span>
            }
            url="#"
          />
          <CardJurnal
            title="Brand Strategist"
            description={
              <span>
                We are looking for an experienced Brand Strategist with a proven
                track record in successfully launching new products to market to
                join us on a 6 month contract.
                <br />
                <br /> Role <br /> You will play a key role in developing OMSE’s
                strategic output. You’ll be diving deep into client’s businesses
                and executing comprehensive brand strategies that drive
                successful launches. If you have a passion for creating
                compelling brand narratives, a keen understanding of market
                dynamics, and a knack for innovation, we want to hear from you.
              </span>
            }
            url="#"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutJob;
