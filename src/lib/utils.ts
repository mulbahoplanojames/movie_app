import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//? ------------------------------------------------------------------------------

// fetch upcoming movies

const API_KEY = process.env.API_KEY;

export const handleFetchUpcomingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  const result = data.results;
  return result;
};

//? ------------------------------------------------------------------------------

// Fetching Top Rated Movies Data

export const handleFetchTopRatedMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  const result = data.results;
  return result.slice(0, 8);
};

//? ------------------------------------------------------------------------------

// Fetching Popular Movies Data

export const handleFetchPopularMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  const result = data.results;
  return result.slice(0, 12);
};

// ---------------------------------------------------------------------------------------------------------

// Fetching Tv Series Data

export const handleFetchTvSeries = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  );
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong");
  }

  const result = data.results;
  return result;
};
