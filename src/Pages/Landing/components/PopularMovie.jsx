import { useState, useEffect } from "react";
import { getRandomMovie, getMovieBackdrop } from "../../../api/movie/movieData";


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
  const randomMovieImage = getMovieBackdrop(moviesList.backdrop_path);

  return (
    <div className="moviePopularRightNow overflow-y-hidden relative rounded w-full lg:w-screen shadow-b-black shadow-lg">
      
      <div className="movieCardPoster relative w-full h-[90vh] -z-10">
        <img className="absolute object-cover w-full h-full" src={randomMovieImage} alt="Movie Card" />
        <span className="imageEffect absolute z-0 inset-0 bg-gradient-to-b from-slate-900/70 to-slate-500"></span>
      </div>

      <div className="movieCardData px-3 w-full text-center lg:absolute lg:bottom-0">
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
