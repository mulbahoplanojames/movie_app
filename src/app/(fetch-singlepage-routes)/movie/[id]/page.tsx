import Image from "next/image";

import { BackgroundBeams } from "@/components/ui/background-beams";
import { Calendar, Play, Share2, ThumbsUp } from "lucide-react";
import { fetchUpcomingSingleMovie } from "@/lib/utils";

const MoviePreview = async ({ params }: { params: { id: string } }) => {
  const result = await fetchUpcomingSingleMovie({ params: { id: params.id } });

  return (
    <>
      <div className="md:h-[44rem] h-[62rem] md:pt-24 pt-16 w-full rounded-md bg-neutral-950 relative flex items-center antialiased">
        <div className="md:px-8 px-4 grid lg:grid-cols-6 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-10 gap-6">
          <div className="w-full relative md:h-[400px] h-[230px] overflow-hidden rounded-lg col-span-2">
            <Image
              src={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
              alt=""
              fill
              className="w-full h-full absolute top-0 right-0 left-0 bottom-0 "
            />
          </div>
          <div className="col-span-3">
            <p className="text-primaryClr text-2xl capitalize font-semibold pb-4">
              New Episodes
            </p>
            <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  font-sans font-bold pb-5">
              {result.title}
            </h1>
            <div className="flex items-center gap-4 flex-wrap md:pb-10 pb-8">
              <p className="text-black bg-white border-2 border-white text-sm  px-2">
                Pg 18
              </p>
              <p className="text-white border-2 border-white text-sm  px-2">
                HD
              </p>
              <p className="text-white text-lg">Romance, Drama</p>
              <p className="text-white text-lg flex items-center gap-2">
                <Calendar className="size-5 text-primaryClr" />
                {result.release_date}
              </p>
              <p className="text-white text-lg flex items-center gap-2">
                <ThumbsUp className="size-5 text-primaryClr" />{" "}
                {result.vote_average}
              </p>
            </div>
            <p className="text-white pb-5">{result.overview}</p>

            <div className="w-full bg-slate-900/40 py-3 px-1 rounded-md flex items-center justify-start gap-10 flex-wrap">
              <p className="text-white font-semibold text-lg flex flex-col items-center gap-2 border-r-2 px-4">
                <Share2 className="size-5 text-white" />
                Share
              </p>
              <p className="text-white font-semibold text-lg">Watch Trailer</p>
              <p className="text-white font-semibold text-lg">1h 30m</p>
              <button className="bg-slate-700 hover:bg-primaryClr transition-all duration-300 border-2 border-primaryClr text-white px-8 py-3 rounded-full flex items-center gap-2">
                <Play />
                Get Started
              </button>
            </div>
          </div>
        </div>
        <BackgroundBeams />
      </div>
    </>
  );
};

export default MoviePreview;
