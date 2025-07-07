import React from "react";
import img1 from "../assets/features1.svg";
import img2 from "../assets/features2.svg";
import img3 from "../assets/features3.svg";
import Image from "next/image";

const featuresInfo = [
  {
    id: 1,
    img: img1,
    title: "OpenType features Variable fonts",
    subtitle:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    id: 2,
    img: img2,
    title: "Design with real data",
    subtitle:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
  {
    id: 3,
    img: img3,
    title: "Fastest way to take action",
    subtitle:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
  },
];
export default function FeaturesCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full text-center my-6 p-2">
      {featuresInfo.map((it) => (
        <div
          data-aos="fade-up"
          key={it.id}
          className="col-span-1 flex flex-col items-center gap-2"
        >
          <Image
            src={it.img}
            alt={it.title}
            width={65}
            height={65}
            className="text-purple-600"
          />
          <h2 className="text-[#333] font-semibold text-[16px]">{it.title}</h2>
          <p className="text-[#777] text-[14px]">{it.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
