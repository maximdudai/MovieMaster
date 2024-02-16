import { useState, useEffect } from "react";
import { getRandomMovie, getMoviePoster } from "../../../api/movieData";

import './other/style/style.css';


//lazy load the popular movie component

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

  return !moviesList ? <div>Loading..</div> : (
    <div className="moviePopularRightNow relative rounded w-screen h-screen">
      
      <div className="movieCardPoster absolute inset-0 bottom-24 -z-10 w-screen">
        <img className="w-full h-full object-cover" src={randomMovieImage} alt="Movie Card" />
        <span className="imageEffect absolute z-0 inset-0 bg-gradient-to-b from-slate-900/70 to-slate-500"></span>
      </div>

      <div className="movieCardData container w-full text-center p-2 lg:absolute lg:bottom-0 xl:bottom-0">
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
