import React from "react";
// import { cn } from "@/lib/utils";
import { Spotlight } from "./ui/spotlight";

const ContactUsHero = () => {
  return (
    <div className="md:h-[36rem] h-[28rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-36 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Contact Us
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          Our Pricing Plan provides tailored subscription options for movie
          enthusiasts. Choose from a variety of plans to access exclusive
          features, stream in high quality, and enjoy uninterrupted viewing.
          Find the plan that best fits your movie-watching style and budget!
        </p>
      </div>
    </div>
  );
};

export default ContactUsHero;
