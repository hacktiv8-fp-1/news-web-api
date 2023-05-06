import React from "react";
import Content from "./Content/content";
import Image from "next/image";
import McLaren from "../../assets/mclaren.jpg";

export default function Hero() {
  return (
    <>
      <div className="flex md:flex-row flex-col items-center gap-5">
        <Image
          src={McLaren}
          className="rounded-xl"
          width={800}
          height={500}
          alt="McLaren"
        />
        <Content />
      </div>
    </>
  );
}
