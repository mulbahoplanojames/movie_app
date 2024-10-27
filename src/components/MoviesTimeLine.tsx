import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  handleFetchPopularMovies,
  handleFetchTopRatedMovies,
  handleFetchTvSeries,
} from "@/lib/utils";
import { UpcomingMoviesInterface } from "@/types/types";
import Link from "next/link";

const MoviesTimeLine = async () => {
  const [tvSeries, popularMovies, topRatedMovies] = await Promise.all([
    handleFetchTvSeries(),
    handleFetchPopularMovies(),
    handleFetchTopRatedMovies(),
  ]);
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            {tvSeries.length > 0 &&
              tvSeries.slice(0, 4).map((movie: UpcomingMoviesInterface) => (
                <Link href={`/movie/${movie.id}`} key={movie.id}>
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                    width={500}
                    height={500}
                    className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                  />
                </Link>
              ))}
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            {topRatedMovies.length > 0 &&
              topRatedMovies
                .slice(0, 4)
                .map((movie: UpcomingMoviesInterface) => (
                  <Link href={`/movie/${movie.id}`} key={movie.id}>
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt={movie.title}
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                  </Link>
                ))}
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <div className="grid grid-cols-2 gap-4">
            {popularMovies.length > 0 &&
              popularMovies
                .slice(0, 4)
                .map((movie: UpcomingMoviesInterface) => (
                  <Link href={`/movie/${movie.id}`} key={movie.id}>
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                      alt={movie.title}
                      width={500}
                      height={500}
                      className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                    />
                  </Link>
                ))}
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
};

export default MoviesTimeLine;
