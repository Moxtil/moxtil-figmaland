import React from "react";
import img1 from "../assets/features1.svg";
import img2 from "../assets/features2.svg";
import img3 from "../assets/features3.svg";
import Image from "next/image";
import { AiOutlineFontSize } from "react-icons/ai";
import { MdOutlineDraw } from "react-icons/md";
import { LuHandHelping } from "react-icons/lu";

const featuresInfo = [
  {
    id: 1,
    img: AiOutlineFontSize,
    title: "OpenType features Variable fonts",
    subtitle:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
    fade: "fade-right",
  },
  {
    id: 2,
    img: MdOutlineDraw,
    title: "Design with real data",
    subtitle:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
    fade: "fade-up",
  },
  {
    id: 3,
    img: LuHandHelping,
    title: "Fastest way to take action",
    subtitle:
      "Slate helps you see how many more days you need to work to reach your financial goal.",
    fade: "fade-left",
  },
];
export default function FeaturesCard() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full text-center my-6 p-2">
      {featuresInfo.map((it) => (
        <div
          data-aos={it.fade}
          key={it.id}
          className="col-span-1 flex flex-col items-center gap-2"
        >
          <it.img size={50} color="oklch(49.6% 0.265 301.924)" />
          <h2 className="text-[16px] font-semibold text-center bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
            {" "}
            {it.title}
          </h2>
          <p className="text-[#888] text-[14px]">{it.subtitle}</p>
        </div>
      ))}
    </div>
  );
}
