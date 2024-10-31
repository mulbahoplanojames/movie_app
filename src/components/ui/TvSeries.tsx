import { handleFetchTvSeries } from "@/lib/utils";
import { UpcomingMoviesInterface } from "@/types/types";
import Link from "next/link";

import Image from "next/image";
import { ThumbsUp } from "lucide-react";

const TvSeries = async () => {
  const result = await handleFetchTvSeries();

  return (
    <>
      <section className="md:px-8 px-4 py-20 bg-[#1d232a] text-white">
        <h1 className="font-semibold  md:text-5xl text-3xl pb-5 md:pb-5">
          Tv Series
        </h1>

        <p className="uppercase font-semibold pb-4 md:pb-12">
          Tv series for your family and entertainment
        </p>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-10 gap-6">
          {result.length > 0 &&
            result.slice(0, 8).map((movie: UpcomingMoviesInterface) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <div className="md:w-full w-full h-fit flex flex-col">
                  <div className="w-full h-[400px] relative overflow-hidden rounded-lg">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-5 px-2">
                    <p className=" font-bold text-lg truncate">{movie.title}</p>
                    <p className="text-primaryClr font-semibold">
                      {movie.release_date}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-2 px-2">
                    <p className="text-primaryClr font-semibold text-sm uppercase border-2 py-1 px-2 border-white">
                      hd
                    </p>
                    <p className=" font-bold text-sm flex items-center gap-1">
                      <ThumbsUp />
                      {movie.vote_count}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
};

export default TvSeries;
