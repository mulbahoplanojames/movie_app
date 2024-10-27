import MoviesHero from "@/components/MoviesHero";
import MoviesList from "./components/MoviesList";
import TvSeries from "@/components/ui/TvSeries";
import CallToAction from "@/components/CallToAction";

const Movies = () => {
  return (
    <>
      <MoviesHero />
      <MoviesList />
      <TvSeries />
      <CallToAction />
    </>
  );
};

export default Movies;
