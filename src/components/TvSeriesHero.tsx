"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { Calendar, Clock3, Play } from "lucide-react";

const TvSeriesHero = () => {
  const images = [
    "https://media.istockphoto.com/id/1063022034/photo/the-meadows-mighty.jpg?s=1024x1024&w=is&k=20&c=3GHX4qarPR42Y89KBUxzSxlOYGZCnRsUJY73xgndAZg=",
    "https://media.istockphoto.com/id/1180416338/photo/vikings-on-a-highland-battlefield.jpg?s=1024x1024&w=is&k=20&c=1dpYjj7e8IxhaRtX2vajRjJBATsJl5bUWsXA0iv-koA=",
    "https://media.istockphoto.com/id/482557671/photo/simpsons-in-the-garden.jpg?s=1024x1024&w=is&k=20&c=9UkXr4u4MW9ZvWcfDE-jg8YbJSDC7TVPSw5Turj7ktc=",
  ];
  return (
    <ImagesSlider className="md:h-[36rem] h-[30rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 "
      >
        <motion.p className="font-bold sm:text-xl text-xl lg:pr-[20rem]  md:text-3xl text-yellow-500">
          WilFix
        </motion.p>
        <motion.p className="font-bold sm:text-4xl text-3xl lg:pr-[20rem]  md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 md:py-6 pt-5 pb-6">
          TVs Shows, & More.
        </motion.p>
        <motion.div className="flex items-center gap-4 flex-wrap md:pb-10 pb-8">
          <p className="text-black bg-white border-2 border-white text-sm  px-2">
            Pg 18
          </p>
          <p className="text-white border-2 border-white text-sm  px-2">HD</p>
          <p className="text-white text-lg">Romance, Drama</p>
          <p className="text-white text-lg flex items-center gap-2">
            <Calendar className="size-5 text-primaryClr" /> 2024
          </p>
          <p className="text-white text-lg flex items-center gap-2">
            <Clock3 className="size-5 text-primaryClr" /> 250 min
          </p>
        </motion.div>
        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
        <button className="bg-slate-700 hover:bg-primaryClr transition-all duration-300 border-2 border-primaryClr text-white px-8 py-3 rounded-full flex items-center gap-2">
          <Play />
          Get Started
        </button>
      </motion.div>
      <p>hsdklklk</p>
    </ImagesSlider>
  );
};

export default TvSeriesHero;
