import { UpcomingMoviesInterface } from "@/types/types";
import Link from "next/link";

import Image from "next/image";
import { ThumbsUp } from "lucide-react";
import { handleFetchTvSeries } from "@/lib/utils";

const TvSeriesList = async () => {
  const result = await handleFetchTvSeries();
  // console.log(result);

  return (
    <>
      <section className="md:px-8 px-4 py-14 ">
        <p className="uppercase font-semibold text-primaryClr pb-4">
          Online Streaming
        </p>
        <h1 className="font-semibold  md:text-5xl text-3xl pb-5 md:pb-12">
          TV Series
        </h1>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 md:gap-10 gap-6">
          {result?.length > 0 &&
            result.map((tvShow: UpcomingMoviesInterface) => (
              <Link href={`/tv-show/${tvShow.id}`} key={tvShow.id}>
                <div className="md:w-full w-full h-fit flex flex-col">
                  <div className="w-full h-[400px] relative overflow-hidden rounded-lg">
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                      alt={tvShow.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex justify-between items-center pt-5 px-2">
                    <p className=" font-bold text-lg truncate">
                      {tvShow.title}
                    </p>
                    <p className="text-primaryClr font-semibold">
                      {tvShow.release_date}
                    </p>
                  </div>
                  <div className="flex justify-between items-center pt-2 px-2">
                    <p className="text-primaryClr font-semibold text-sm uppercase border-2 py-1 px-2 border-black dark:border-white">
                      hd
                    </p>
                    <p className=" font-bold text-sm flex items-center gap-1">
                      <ThumbsUp />
                      {tvShow.vote_count}
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

export default TvSeriesList;
