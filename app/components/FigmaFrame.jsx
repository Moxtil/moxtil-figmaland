"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export const FigmaFrame = () => {
  return (
    <section
      className="flex justify-center items-center p-8"
      data-aos="fade-up"
    >
      <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
        <LiteYouTubeEmbed
          id="Cx2dkpBxst8"
          title="YouTube video"
          poster="maxresdefault"
          noCookie={true}
        />
      </div>
    </section>
  );
};
