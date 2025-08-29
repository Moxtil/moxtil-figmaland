import React from "react";

export default function TextHeader({ title, subtitle }) {
  return (
    <div
      className="flex flex-col my-12 gap-1 text-center p-3"
      data-aos="fade-up"
    >
      {/* <h1 className="text-4xl text-purple-600 font-semibold">{title}</h1> */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-center bg-gradient-to-br from-pink-600 via-purple-600 to-purple-800 bg-clip-text text-transparent">
        {title}
      </h1>{" "}
      <p className="text-[#777] ">{subtitle}</p>
    </div>
  );
}
