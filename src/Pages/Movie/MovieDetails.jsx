import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ReactPlayer from "react-player";

import { GrGallery } from "react-icons/gr";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Navigation } from "../../Components/Navigation/Navigation";
import { searchMovieById } from "../../api/searchMovieById";
import { getMovieImages } from "../../api/getMovieImages";

import { getNumbersFromString } from "../../utils/utils";
import { convertMinutesToHours } from "../../utils/utils";

import { getMovieTrailer } from "../../api/getMovieTrailer";
import { getListOfActors } from "../../api/getListOfActors";
import { FilteActors } from "./components/FilterActors";

import _isEqual from "lodash/isEqual";

import Select from "react-select";
import makeAnimated from "react-select/animated";
import { departments } from "./data/departments";
const animatedComponents = makeAnimated();

const MovieTrailer = ({ movieCast }) =>
  "https://www.youtube.com/watch?v=" + movieCast;

export const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [movieData, setMovieData] = useState([]);
  const [movieImages, setMovieImages] = useState([]);
  const [selectedPosterImage, setSelectedPosterImage] = useState("");
  const [movieCast, setMovieCast] = useState([]);
  const [movieActors, setMovieActors] = useState([]);
  const [filters, setFilters] = useState([]);

  const { query } = useParams();

  useEffect(() => {
    const fetchMovieFullDetails = async () => {
      const movieId = getNumbersFromString(query);

      const movieData = await searchMovieById(movieId);
      const movieImages = await getMovieImages(movieId, "backdrop");
      const movieTrailer = await getMovieTrailer(movieId);
      const movieListActors = await getListOfActors(movieId);

      setMovieData(movieData);
      setMovieImages(movieImages);
      setMovieCast(movieTrailer);

      const concatMovieActors = movieListActors?.cast?.concat(
        movieListActors?.crew
      );
      // Remove duplicate actors
      const uniqueActors = concatMovieActors?.filter(
        (actor, index, self) =>
          index === self.findIndex((a) => a.id === actor.id)
      );
      setMovieActors(uniqueActors);

      setIsLoading(false);
    };

    fetchMovieFullDetails();
  }, [query]);

  const handleSelectPosterImage = (e) => {
    const selectedImage = e.target.src;
    setSelectedPosterImage(selectedImage);
  };

  const randomMovieImages = () => {
    const numImages = Math.floor(Math.random() * 6) + 5;
    const shuffledImages = movieImages?.sort(() => 0.5 - Math.random());

    if (!selectedPosterImage)
      setSelectedPosterImage(
        `https://image.tmdb.org/t/p/original/${shuffledImages[0]?.file_path}`
      );

    return shuffledImages.slice(0, numImages);
  };

  const companyLogo = (company) =>
    company !== null
      ? `https://image.tmdb.org/t/p/original/${company}`
      : `https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png`;

  const handleSelectChange = (selected) => {
    setFilters(selected);
  };

  return (
    <>
      <Navigation />

      <main className="p-5">
        {isLoading ? (
          <div className="loadingMovieData flex items-center justify-center bg-white/5 p-5 m-2 rounded">
            <span className="px-2">Loading</span>
            <span className="animate-spin px-2">
              <AiOutlineLoading3Quarters />
            </span>
          </div>
        ) : (
          <div className="movieDataContainer flex flex-col">
            <div className="movieFullDetails my-5 flex flex-col lg:flex-row gap-2">
              <div className="movieInformationContainer flex flex-col justify-between">
                <div className="movieTitle p-2 my-1 bg-white/10 rounded w-full md:text-center">
                  <p className="my-2 text-lg md:text-2xl">{movieData?.title}</p>
                </div>
                <div className="movieBackdropImage">
                  <img
                    className="rounded"
                    src={selectedPosterImage}
                    alt="Movie Poster"
                  />
                </div>
              </div>

              <div className="movieFullDataContainer flex flex-col justify-center gap-2 w-full shadow-md shadow-black bg-black/20 p-3">
                <div className="movieReleaseDate">
                  <p className="text-xs p-2 my-2 uppercase border-l border-red-500 text-gray-400">
                    Release Date
                  </p>
                  <div className="movieReleaseDateList flex flex-wrap gap-2">
                    <span className="bg-white/5 p-2 rounded text-xs">
                      {movieData?.release_date}
                    </span>
                  </div>
                </div>
                <div className="movieRuntime">
                  <p className="text-xs p-2 my-2 uppercase border-l border-red-500 text-gray-400">
                    Runtime
                  </p>
                  <div className="movieRuntimeList flex flex-wrap gap-2">
                    <span className="bg-white/5 p-2 rounded text-xs">
                      {convertMinutesToHours(movieData?.runtime)}
                    </span>
                  </div>
                </div>
                <div className="moviePosterImageGallery ">
                  <p className="flex justify-between items-center text-xs p-2 my-2 uppercase border-l border-red-500 text-gray-400">
                    <span>Gallery</span>
                    <span className="border-[1px] border-red-500 p-2 rounded">
                      <GrGallery className="bg-white" />
                    </span>
                  </p>
                  <div className="moviePosterImages flex overflow-x-auto">
                    {randomMovieImages()?.map((image, index) => {
                      return (
                        <img
                          key={index}
                          onClick={handleSelectPosterImage}
                          className="w-36 mr-2 rounded shadow-black shadow-md"
                          src={`https://image.tmdb.org/t/p/original/${image?.file_path}`}
                          alt="Movie Path"
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="movieDataBox md:flex justify-between">
                  <div className="movieCategories">
                    <p className="text-xs p-2 my-2 uppercase border-l border-red-500 text-gray-400">
                      Categories
                    </p>
                    <div className="movieCategoriesList flex flex-wrap gap-2">
                      {movieData?.genres?.map((genre, index) => {
                        return (
                          <span
                            key={index}
                            className="bg-white/5 p-2 rounded text-xs"
                          >
                            {genre?.name}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                  <div className="moviePopilarity">
                    <p className="text-xs p-2 my-2 uppercase border-l border-red-500 text-gray-400">
                      Popularity
                    </p>
                    <div className="moviePopilarityList flex flex-wrap gap-2">
                      <span className="bg-white/5 p-2 rounded text-xs">
                        {movieData?.popularity}
                      </span>
                    </div>
                  </div>
                  <div className="movieRevenue">
                    <p className="text-xs p-2 my-2 uppercase border-l border-red-500 text-gray-400">
                      Revenue
                    </p>
                    <div className="movieRevenueList flex flex-wrap gap-2">
                      <span className="bg-white/5 p-2 rounded text-xs">
                        $
                        {movieData?.revenue.toLocaleString("en-US", {
                          formatMatcher: "basic",
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="movieProductionCompanies">
                  <p className="text-xs p-2 my-2 uppercase border-l border-red-500 text-gray-400">
                    Production Companies
                  </p>
                  <div className="movieProductionCompaniesList flex flex-wrap gap-2">
                    <ul className="flex gap-2 rounded overflow-x-auto">
                      {movieData?.production_companies?.map(
                        (company, index) => {
                          return (
                            <li
                              key={index}
                              className="bg-white/5 flex flex-col justify-between min-h-[5rem] gap-3 text-center p-2 rounded text-xs"
                            >
                              <div className="companyLogo">
                                <img
                                  className="w-32"
                                  src={companyLogo(company?.logo_path)}
                                  alt="Company Logo"
                                />
                              </div>
                              <div className="companyName">{company?.name}</div>
                              <div className="companyOriginContry">
                                {company?.origin_country}
                              </div>
                            </li>
                          );
                        }
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="movieTrailerActorsContainer w-full flex flex-col items-center">
              <div className="movieTrailer w-full lg:w-3/4">
                <p className="text-xs p-2 my-2 uppercase border-l border-red-500 text-gray-400">
                  Watch Trailer
                </p>
                <div className="reactPlayer">
                  <ReactPlayer
                    width={"50%"}
                    url={MovieTrailer({ movieCast })}
                    controls
                  />
                </div>
              </div>
              <div className="movieListOfActors w-full lg:w-3/4 mt-5">
                <div className="actorsSetup md: flex md:justify-between">
                  <p className="text-xs p-2 my-2 uppercase border-l border-red-500 text-gray-400">
                    List of Actors
                  </p>
                  <div className="sortActors py-2 md:w-1/3">
                    <Select
                      options={departments}
                      onChange={handleSelectChange}
                      className="text-black"
                      placeholder="Filter by department"
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      isMulti
                    />
                  </div>
                </div>
                <div className="movieListOfActors h-full">
                  {movieActors.length && (
                    <FilteActors actors={movieActors} departments={filters} />
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
