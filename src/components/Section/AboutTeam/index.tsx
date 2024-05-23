import React from "react";
import Link from "next/link";
import CardTeamProfile from "@/components/Cards/CardTeamProfile";

const AboutTeam = () => {
  return (
    <div className="block w-full mt-[55px] overflow-hidden">
      <h5 className="uppercase font-mono font-semibold text-blue-200 text-[26px] leading-[33.02px] mb-32">
        PEOPLE
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[5%]">
        <div className="">
          <div className="sm:max-w-[343px]">
            <CardTeamProfile />
          </div>
        </div>
        <div className="">
          <ul className="m-0 p-0">
            <li className="mb-18 last:mb-0">
              <h5 className="text-24 leading-[28.8px] font-medium">
                Dhany Zuhri
              </h5>
              <span className="text-16 leading-[19.32px] font-medium">
                Design Principal
              </span>
            </li>
            <li className="mb-18 last:mb-0">
              <h5 className="text-24 leading-[28.8px] font-medium">
                Shani Nur Muhammad
              </h5>
              <span className="text-16 leading-[19.32px] font-medium">
                Business Principal
              </span>
            </li>
            <li className="mb-18 last:mb-0">
              <h5 className="text-24 leading-[28.8px] font-medium">
                Vevaldy M Yusuf
              </h5>
              <span className="text-16 leading-[19.32px] font-medium">
                Bussiness Researcher
              </span>
            </li>
            <li className="mb-18 last:mb-0">
              <h5 className="text-24 leading-[28.8px] font-medium">
                Aditya Krisna
              </h5>
              <span className="text-16 leading-[19.32px] font-medium">
                Art Director
              </span>
            </li>
            <li className="mb-18 last:mb-0">
              <h5 className="text-24 leading-[28.8px] font-medium">
                Dian Purba
              </h5>
              <span className="text-16 leading-[19.32px] font-medium">
                Senior Graphic Designer
              </span>
            </li>
            <li className="mb-18 last:mb-0">
              <h5 className="text-24 leading-[28.8px] font-medium">
                Nindy Madyantari
              </h5>
              <span className="text-16 leading-[19.32px] font-medium">
                Project Manager
              </span>
            </li>
            <li className="mb-18 last:mb-0">
              <h5 className="text-24 leading-[28.8px] font-medium">Regina</h5>
              <span className="text-16 leading-[19.32px] font-medium">
                Finance Manager
              </span>
            </li>
            <li className="mb-18 last:mb-0">
              <h5 className="text-24 leading-[28.8px] font-medium">
                Eldhie Rutfi M
              </h5>
              <span className="text-16 leading-[19.32px] font-medium">
                Graphic Designer
              </span>
            </li>
            <li className="mb-18 last:mb-0">
              <h5 className="text-24 leading-[28.8px] font-medium">
                Putri Qori
              </h5>
              <span className="text-16 leading-[19.32px] font-medium">
                Graphic Designer
              </span>
            </li>
            <li className="mb-18 last:mb-0">
              <h5 className="text-24 leading-[28.8px] font-medium">
                Aldilla Febi R
              </h5>
              <span className="text-16 leading-[19.32px] font-medium">
                Graphic Designer
              </span>
            </li>
            <li className="mb-18 last:mb-0">
              <h5 className="text-24 leading-[28.8px] font-medium">
                Yasmin Aulia
              </h5>
              <span className="text-16 leading-[19.32px] font-medium">
                Graphic Designer
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
