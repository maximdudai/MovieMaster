import { useState, useEffect } from "react";
import { getRandomMovie, getMoviePoster } from "../../../api/movieData";

export const PopularMovie = () => {

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getRandomMovie();

        setMoviesList(fetchedMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);
  const randomMovieImage = getMoviePoster(moviesList);

  return (
    <div className="moviePopularRightNow relative rounded w-full 2xl:w-4/5">
      <div className="movieCardPoster relative inset-0 opacity-25">
        <img className="rounded" src={randomMovieImage} alt="Movie Card" />
      </div>
      <div className="movieCardData w-full text-center p-2 lg:absolute lg:bottom-0 xl:bottom-0">
        <div className="movieTitle w-full bg-black/20 text-center shadow-black shadow-sm">
          <h1 className="text-2xl xl:text-5xl font-semibold tracking-widest uppercase text-gray-400">
            {moviesList.title}
          </h1>
        </div>
        <div className="movieOverview border-[1px] border-black/20">
          <p className="text-gray-400 p-2">{moviesList.overview}</p>
        </div>
        <div className="movieDetails flex justify-between items-center text-center border-t-2 border-t-red-500">
          <div className="movieReleaseDate border-x-2 p-2 px-3 border-red-500">
            <p className="text-gray-400 text-sm">Release Date</p>
            <p className="text-white">{moviesList.release_date}</p>
          </div>
          <div className="movieReviewStars border-x-2 p-2 px-3 border-red-500">
            <p className="text-gray-400 text-sm">Review Stars</p>
            <p className="text-white">
              {moviesList.vote_average?.toFixed(1)}
            </p>
          </div>
          <div className="moviePopularity border-x-2 p-2 px-3 border-red-500">
            <p className="text-gray-400 text-sm">Popularity</p>
            <p className="text-white">{moviesList.popularity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
