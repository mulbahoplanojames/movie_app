import { StarFilledIcon } from "@radix-ui/react-icons";
import { Play, Star } from "lucide-react";
import Image from "next/image";

const image =
  "https://media.istockphoto.com/id/1080357266/photo/gangster.jpg?s=1024x1024&w=is&k=20&c=4SSi8rvFh2AaP5APxOaohXcsL54dmitaMCdS5dv94Jc=";

const SingleTvSeries = () => {
  return (
    <>
      <section className="w-full lg:h-[32rem] h-[38rem] relative md:px-8 px-4 py-32 bg-blue-400 ">
        <Image
          src={image}
          alt=""
          fill
          className="object-cover absolute top-0 right-0 bottom-0 left-0 "
        />
        <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0 z-10 bg-gradient-to-r  from-black  to-transparent"></div>

        <div className="z-30 absolute md:top-50 text-white">
          <h1 className="z-30 md:text-7xl text-5xl pb-6 text-white">
            One Man Standing
          </h1>
          <div className="flex items-center gap-4">
            <StarFilledIcon className="text-yellow-500 size-5" />
            <StarFilledIcon className="text-yellow-500 size-5" />
            <StarFilledIcon className="text-yellow-500 size-5" />
            <StarFilledIcon className="text-yellow-500 size-5" />
            <StarFilledIcon className="text-yellow-500 size-5" />
            <Star className="size-5" />
          </div>
          <p className="lg:pr-[30rem] md:-[15rem] pt-6 pb-8  text-xl text-white">
            After a family tragedy, three generations of the Deetz family return
            home to Winter River. Still haunted by Betelgeuse, Lydia&apos;s life
            is turned upside down when her teenage daughter, Astrid,
            accidentally opens the portal to the Afterlife.
          </p>
          <button className="bg-slate-700 hover:bg-primaryClr transition-all duration-300 border-2 border-primaryClr text-white px-8 py-3 rounded-full flex items-center gap-2">
            <Play />
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default SingleTvSeries;
