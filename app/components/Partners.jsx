import React from "react";
import img1 from "../assets/amazon.svg";
import img2 from "../assets/dropbox.svg";
import img3 from "../assets/logos_google.svg";
import img4 from "../assets/microsofft.svg";
import img7 from "../assets/Webflow.svg";
import img8 from "../assets/YouTube.svg";
import Image from "next/image";
export default function Partners() {
  const imgs = [
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },

    {
      id: 7,
      img: img7,
    },
    {
      id: 8,
      img: img8,
    },
  ];
  return (
    <div className="grid  grid-cols-2 md:grid-cols-3 items-center justify-center gap-8 my-8">
      {imgs.map((im) => (
        <div
          key={im.id}
          data-aos="fade-up"
          className="flex items-center justify-center drop-shadow-md drop-shadow-blue-300 hover:scale-[1.05] cursor-pointer duration-300 transition-all"
        >
          <Image
            src={im.img}
            alt="Media"
            width={150}
            height={90}
            className=" col-span-1"
          />
        </div>
      ))}
    </div>
  );
}
