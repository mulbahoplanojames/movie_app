import { handleFetchUpcomingMovies } from "@/lib/utils";
import { UpcomingMoviesInterface } from "@/types/types";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { ThumbsUp } from "lucide-react";

const UpcomingMovies = async () => {
  const result = await handleFetchUpcomingMovies();
  // console.log(result);

  return (
    <>
      <section className="md:px-8 px-4 py-14">
        <p className="uppercase font-semibold text-primaryClr pb-4">
          Online Streaming
        </p>
        <h1 className="font-semibold md:text-5xl text-3xl pb-5">
          Upcoming Movies
        </h1>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full mx-auto mt-8"
        >
          <CarouselContent>
            {result.length > 0 &&
              result.map((movie: UpcomingMoviesInterface) => (
                <CarouselItem
                  key={movie.id}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Link href={`/movie/${movie.id}`}>
                    <div className="md:w-[370px] w-[350px] h-fit flex flex-col">
                      <div className="w-full h-[400px] relative overflow-hidden rounded-lg">
                        <Image
                          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                          alt={movie.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex justify-between items-center pt-5 px-2">
                        <p className=" font-bold text-lg">{movie.title}</p>
                        <p className="text-primaryClr font-semibold">
                          {movie.release_date}
                        </p>
                      </div>
                      <div className="flex justify-between items-center pt-2 px-2">
                        <p className="text-primaryClr font-semibold text-sm uppercase border-2 py-1 px-2 border-black dark:border-white">
                          hd
                        </p>
                        <p className=" font-bold text-sm flex items-center gap-1">
                          <ThumbsUp />
                          {movie.vote_count}
                        </p>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-5 md:-left-4" />
          <CarouselNext className="absolute -right-5 md:-right-4" />
        </Carousel>
      </section>
    </>
  );
};

export default UpcomingMovies;
