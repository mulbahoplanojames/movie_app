import HomeHero from "@/components/HomeHero";
import MoviesTimeLine from "@/components/MoviesTimeLine";
import SingleTvSeries from "@/components/SingleTvSerie";
import TopRatedMovies from "@/components/TopRatedMovies";
import UpcomingMovies from "@/components/UpcomingMovies";

const Home = () => {
  return (
    <>
      <section className="">
        <HomeHero />
        <UpcomingMovies />
        <SingleTvSeries />
        <MoviesTimeLine />
        <TopRatedMovies />
      </section>
    </>
  );
};

export default Home;
