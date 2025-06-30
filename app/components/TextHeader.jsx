import React from "react";

export default function TextHeader({ title, subtitle }) {
  return (
    <div className="flex flex-col my-12 gap-1 text-center" data-aos="fade-up">
      <h1 className="text-4xl text-[#222] font-semibold">{title}</h1>
      <p className="text-[#777] ">{subtitle}</p>
    </div>
  );
}
