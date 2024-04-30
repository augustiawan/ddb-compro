import React from "react";
import Link from "next/link";

export type TCardJurnalProps = {
  title: string;
  url?: string;
  description?: string;
};

const CardJurnal = (props: TCardJurnalProps) => {
  return (
    <div className="block w-full">
      <div className="flex justify-between gap-24">
        <h6 className="underline group-hover:no-underline font-medium text-18 leading-[21.6px] text-blue">
          {props.title}
        </h6>
        {props.url && (
          <Link
            href={props.url}
            className="uppercase underline text-16 leading-[19.22px]"
          >
            Read
          </Link>
        )}
      </div>
      {props.description && props.description !== "" && (
        <p className="block mt-20 md:mt-32 text-16 leading-[19.22px]">
          {props.description}
        </p>
      )}
    </div>
  );
};

export default CardJurnal;
