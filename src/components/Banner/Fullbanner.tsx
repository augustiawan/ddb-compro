import React from "react";
import Image from "next/image";

type TFullbannerProps = {
  image: string;
};

const Fullbanner = ({ image }: TFullbannerProps) => {
  return (
    <div className="block w-full relative h-[100dvh] max-h-[695px]">
      {image && (
        <Image
          src={image}
          alt="Works Banner"
          sizes="auto"
          fill={true}
          className="absolute object-center object-cover w-full h-full"
        />
      )}
    </div>
  );
};

export default Fullbanner;
