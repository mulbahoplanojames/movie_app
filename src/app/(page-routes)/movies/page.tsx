import MoviesHero from "@/components/MoviesHero";
import MoviesList from "@/components/MoviesList";
import TvSeries from "@/components/ui/TvSeries";
import CallToAction from "@/components/CallToAction";
import { Suspense } from "react";
import Loading from "./loading";

const Movies = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <MoviesHero />
        <MoviesList />
      </Suspense>
      <TvSeries />
      <CallToAction />
    </>
  );
};

export default Movies;
