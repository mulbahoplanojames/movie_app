import { handleFetchTopRatedMovies } from "@/lib/utils";
import { UpcomingMoviesInterface } from "@/types/types";
import Link from "next/link";

import Image from "next/image";
import { ThumbsUp } from "lucide-react";

const TopRatedMovies = async () => {
  const result = await handleFetchTopRatedMovies();
  // console.log(result);

  return (
    <>
      <section className="md:px-8 px-4 py-14 bg-[#1d232a] text-white">
        <p className="uppercase font-semibold text-primaryClr pb-4 text-center">
          Online Streaming
        </p>
        <h1 className="font-semibold text-center md:text-5xl text-3xl pb-5 md:pb-12">
          Top Rated Movies
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-10 gap-6">
          {result.length > 0 &&
            result.map((movie: UpcomingMoviesInterface) => (
              <Link href={`/top-rated-movie/${movie.id}`} key={movie.id}>
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

export default TopRatedMovies;
