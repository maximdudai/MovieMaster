import { useState, useEffect } from "react";
import { Navigation } from "../../Components/Navigation/Navigation";

import { getPopularMovies } from "../../api/getPopularMovie";

export const Landing = () => {
  // Check if movies data is available in sessionStorage
  const savedMovies = sessionStorage.getItem("movies");
  const initialMovies = savedMovies ? JSON.parse(savedMovies) : [];

  // random movie data
  const savedRandomMovies = sessionStorage.getItem("randomMovie");
  const initialRandomMovie = savedRandomMovies ? JSON.parse(savedRandomMovies) : [];

  // Movie data state
  const [movies, setMovies] = useState(initialMovies);
  const [randomMovie, setRandomMovie] = useState(initialRandomMovie);

  const [showFullReview, setShowFullReview] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      
      const data = await getPopularMovies();
      setMovies(data);

      const randomMovieData = data[Math.floor(Math.random() * data.length)];
      setRandomMovie(randomMovieData);

      sessionStorage.setItem('movies', JSON.stringify(data));
      sessionStorage.setItem('randomMovie', JSON.stringify(randomMovieData));
    };
    // Check if movies data is already in state or sessionStorage
    if (movies.length === 0 && !savedMovies) {
      getMovies();
    }
  }, [movies, savedMovies]);

  const handleFullOverview = () => {
    setShowFullReview(!showFullReview);
  };

  const randomMovieImage = `https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`;
  return (
    <>
      <Navigation />

      <section className="landingPageContainer p-2 py-5">
        <div className="randomMovieCard rounded-sm bg-zinc">
          <div className="randomMovieCardBackground md:w-96">
            <img src={randomMovieImage} alt="" />
          </div>

          <div className="randomMovieCardInfo flex flex-col gap-5 p-2 mt-2 bg-zinc-700/30 text-white border-[1px] border-red-500 rounded">
            <div className="movieTitle">
              <p className="titleContainer text-gray-400 uppercase text-sm">
                Title
              </p>
              <p className="titleContent">{randomMovie?.title}</p>
            </div>
            <div className="movieLanguage">
              <p className="languageContainer text-gray-400 uppercase text-sm">
                Language
              </p>
              <p className="languageContent">
                {randomMovie?.original_language}
              </p>
            </div>
            <div className="movieOverview">
              <p className="overviewContainer text-gray-400 uppercase text-sm">
                Overview
              </p>
              <p className="overviewContent">
                {showFullReview
                  ? randomMovie?.overview
                  : `${randomMovie?.overview?.slice(0, 100)}...`}
                <button className="uppercase rounded text-[10px] mx-1 p-1 bg-white/20" onClick={handleFullOverview}>
                  {showFullReview ? "Show less" : "Show more"}
                </button>
              </p>
            </div>
            <div className="movieReleaseDate">
              <p className="releaseDateContainer text-gray-400 uppercase text-sm">
                Release Date
              </p>
              <p className="releaseDateContent">{randomMovie?.release_date}</p>
            </div>
            <div className="movieReviewStars">
              <p className="reviewStarsContainer text-gray-400 uppercase text-sm">
                Review Stars
              </p>
              <p className="reviewStarsContent">{randomMovie?.vote_average}</p>
            </div>
            <div className="moviePopularity">
              <p className="popularityContainer text-gray-400 uppercase text-sm">
                Popularity
              </p>
              <p className="popularityContent">{randomMovie?.popularity}</p>
            </div>
          </div>
        </div>

        <div className="otherMoviesRecomandation"></div>
      </section>
    </>
  );
};
