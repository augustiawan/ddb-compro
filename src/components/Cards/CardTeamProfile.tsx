import React from "react";
import Link from "next/link";

const CardTeamProfile = () => {
  return (
    <div className="block w-full">
      <div className="relative">
        <img src="/images/thumb/thumb-team-1.jpg" alt="" />
      </div>
      <div className="mt-[28px]">
        <h4 className="font-medium text-24 leading-[29px]">Putri Qori</h4>
        <span className="block font-medium text-18 leading-[22px] text-blue-200 mt-8">
          Graphic Designer
        </span>
        <div className="block mt-18">
          <p className="font-light text-16 leading-[19px]">
            Girl of The Scene / Stay Focus all the time / Horasss!{" "}
          </p>
          <p className="block mt-[21px] font-barlowcondensed font-light text-16 leading-[19px]">
            Lorem ipsum dolor sit amet consectetur. Nibh consectetur aenean
            consectetur facilisi. Vulputate turpis et in odio. Maecenas sagittis
            tincidunt pulvinar imperdiet etiam sociis quis eget. Et arcu commodo
            egestas congue at a lectus quis vulputate. Hendrerit pretium platea
            in facilisis vel. Pretium morbi risus eget a nulla eget adipiscing.
            Urna nisl volutpat quisque convallis massa.
          </p>
        </div>
        <div className="blovk mt-[22px]">
          <Link
            href="#"
            target="_blank"
            className="underline hover:no-underline font-light text-14 leading-[17px] text-blue-200"
          >
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardTeamProfile;
