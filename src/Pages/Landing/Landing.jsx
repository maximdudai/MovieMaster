import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Navigation } from "../../Components/Navigation/Navigation";

import { CiStar, CiCalendarDate } from "react-icons/ci";
import { MdOndemandVideo } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

import { getPopularMovies } from "../../api/getPopularMovie";

export const Landing = () => {
  const navigate = useNavigate();

  // Check if movies data is available in sessionStorage
  const savedMovies = sessionStorage.getItem("movies");
  const initialMovies = savedMovies ? JSON.parse(savedMovies) : [];

  // random movie data
  const savedRandomMovies = sessionStorage.getItem("randomMovie");
  const initialRandomMovie = savedRandomMovies
    ? JSON.parse(savedRandomMovies)
    : [];

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

      sessionStorage.setItem("movies", JSON.stringify(data));
      sessionStorage.setItem("randomMovie", JSON.stringify(randomMovieData));
    };
    // Check if movies data is already in state or sessionStorage
    if (movies.length === 0 && !savedMovies) {
      getMovies();
    }
  }, [movies, savedMovies]);

  const handleMovieFullDetails = () => {

    navigate(`/movie-data/query=${randomMovie?.id}`);
  }

  const handleFullOverview = () => {
    setShowFullReview(!showFullReview);
  };

  const randomMovieImage = `https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`;
  return (
    <>
      <Navigation />

      <section className="landingPageContainer p-2 py-5">
        <div className="randomMovieCard rounded-sm bg-zinc">
          <div className="moviePopular py-2">
            <p className="uppercase text-xs text-gray-400 px-2 border-l-[1px] border-red-500">
              Popular Right Now!
            </p>
          </div>

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
              <p onClick={handleFullOverview} className="overviewContent">
                {showFullReview
                  ? randomMovie?.overview
                  : `${randomMovie?.overview?.slice(0, 100)}...`}
                <button
                  className="uppercase rounded text-[10px] mx-1 p-1 bg-white/20"
                  onClick={handleFullOverview}
                >
                  {showFullReview ? "Show less" : "Show more"}
                </button>
              </p>
            </div>
            <div className="movieStatus flex items-center justify-between">
              <div title="Release Date" className="movieReleaseDate">
                <CiCalendarDate className="releaseDateIcon border-[1px] border-gray-400/50 w-full rounded" />
                <p className="releaseDateContent">
                  {randomMovie?.release_date}
                </p>
              </div>
              <div
                title="review stars"
                className="movieReviewStars w-10 flex flex-col items-center"
              >
                <CiStar className="reviewStarIcon border-[1px] border-gray-400/50 w-full rounded" />
                <p className="reviewStarsContent">
                  {randomMovie?.vote_average?.toFixed(1)}
                </p>
              </div>
              <div
                title="popularity"
                className="moviePopularity flex flex-col items-center"
              >
                <MdOndemandVideo className="popularityIcon border-[1px] border-gray-400/50 w-full rounded" />
                <p className="popularityContent">{randomMovie?.popularity}</p>
              </div>
            </div>
          </div>

          <div className="movieMoreDetails w-1/2">
            <button 
            onClick={handleMovieFullDetails}
            className="w-full flex justify-between items-center uppercase rounded text-md text-gray-300 p-2 mt-2 border-[1px] border-red-500 shadow-md shadow-black">
              <span>More Details</span>
              <span><TbListDetails /></span>
            </button>
          </div>
        </div>

        <div className="otherMoviesRecomandation"></div>
      </section>
    </>
  );
};
