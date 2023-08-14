import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { Navigation } from "../../../components/Navigation/Navigation";
import { LargeLeftSideBarNavigation } from "../../../components/Navigation/module/largeLeftSideBar";
import { ResolutionContext } from "../../../context/resolution";

const apiKey = import.meta.env.VITE_API_KEY;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: apiKey,
  },
};


export const HomePage = () => {
  const [movieContent, setMovieContent] = useState(null);

  const [movieTags, setMovieTags] = useState(null);
  
  const [leftSideBar, setLeftSideBar] = useState("desktop");

  const dataLayout = useContext(ResolutionContext);

  const handleLeftSideBarChange = (leftSideBar) => {
    setLeftSideBar();
  };

  const fetchMovieImage = (path) => {
    return `https://image.tmdb.org/t/p/original/${path}`;
  };


  const movieTagName = async () => {
    try {

      const tmdbTagNames = await axios.get('https://api.themoviedb.org/3/genre/movie/list', options);
      const tmdbResponse = await tmdbTagNames.data;

      console.log(tmdbResponse.genres);
      setMovieTags(tmdbResponse.genres);
      // console.log(movieTags);

    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    movieTagName();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/movie/popular",
        options
      );
      const responseData = response.data?.results;
      if (!responseData) {
        throw new Error("Invalid response data");
      }

      const randomIndex = Math.floor(Math.random() * responseData.length);
      const randomMovie = responseData[randomIndex];

      console.log(randomMovie);
      const movieContent = JSON.stringify(randomMovie);
      localStorage.setItem("moviesData", movieContent);


      setMovieContent(randomMovie);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="HomePageContainer w-full flex flex-col md:h-screen">
        <div className="topNavigationBar w-full">
          <Navigation />
        </div>

        <div className="mainPageContent flex w-screen md:h-full">
          <div className="leftNavigationBar">
            <LargeLeftSideBarNavigation />
          </div>

          <div className="homepageContainer w-full">
            <div className="movieMasterPopular">
              {!movieContent ? (
                <div className="loadingPopularMovie w-full flex justify-center items-center">
                  <h1 className="p-2 px-10 border-[1px] border-gray-400 gap-2 rounded-lg text-2xl animate-pulse">
                    Loading data...
                  </h1>
                </div>
              ) : (
                <div className="browseContainer flex items-center">
                  <div className="randomMovies flex items-center p-3 md:mt-4 md:ml-2">
                    <div className="selectedRandomPopularMovie w-full md:w-2/3 h-[40rem] flex flex-col md:flex-row">

                      <div className={`movieCardBgThumbnail relative md:absolute w-full h-1/2 -z-20 md:w-2/3`}>
                        <div className="movieCardBgEffect rounded-lg absolute -z-5 w-full h-full bg-transparent md:bg-black/80 md:h-[45rem]"></div>
                        <img 
                          className=" rounded-lg shadow-md shadow-black"
                          src={fetchMovieImage(movieContent?.backdrop_path)} 
                          alt="moviebackdrop" />
                      </div>

                      <div className="movieCardImage w-1/2 md:p-2 hidden md:flex justify-center items-center">
                        {
                          <img
                            className="w-1/2 lg:w-full rounded-lg shadow-md shadow-black mb-3 md:m-0"
                            src={fetchMovieImage(movieContent?.poster_path)}
                            alt={"movie image"}
                          />
                        }
                      </div>

                      <div className="movieCardContent w-full gap-5 flex flex-col md:justify-around mt-2 md:m-0">
                        <div className="movieCardTitle ml-2">
                          <h1 className="text-md lg:text-3xl font-bold">
                            {movieContent?.title}
                          </h1>
                        </div>

                        <div className="movieCardTagNames ml-2">
                          <ul className="flex gap-2 flex-wrap">
                            {
                              movieTags?.map((movie, index) => {
                                if(movieContent.genre_ids?.includes(movie.id)) {
                                  return <li 
                                    className="bg-sky-500/50 min-w-24 my-1 text-center rounded flex items-center justify-center px-2 text-md md:text-sm"
                                    key={index}>
                                    {movie.name}
                                  </li>
                                }
                              })
                            }
                          </ul>
                        </div>

                        <div className="movieCardDescription ml-2 border-l-[1px] px-2 border-gray-400/25 flex flex-col break-words max-w-lg">
                          <p className="text-sm text-gray-400">Description</p>
                          <p className="text-gray-300 text-lg break-words">
                            {movieContent?.overview}
                          </p>
                        </div>
                          
                        <div className="movieReleasesLanguage flex gap-2 md:flex-col">
                          
                          <div className="movieCardReleaseDate ml-2 border-l-[1px] px-2 border-gray-400/25">
                            <p className="text-sm text-gray-400">Release Date</p>
                            <p className="text-gray-300 text-lg">
                              {movieContent?.release_date}
                            </p>
                          </div>

                          <div className="movieCardLanguage ml-2 border-l-[1px] px-2 border-gray-400/25">
                            <p className="text-sm text-gray-400">Language</p>
                            <p className="text-gray-300 text-lg">
                              {movieContent?.original_language}
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>

                    <div className="randomPopularMovies"></div>
                  </div>
                </div>
              )}
            </div>

            {/* <div className="nowPlaying p-2 gap-2 h-[25rem] rounded-3xl border-[1px] border-gray-400/50 flex items-center flex-wrap">
                            <div className="movie-card h-auto p-4">
                            { !movieContent ? (
                                <div className="loadingData">Loading..</div>
                            ) : (
                                <div className="container overflow-y-auto mt-[13.8rem]">
                                    <div className="loadedData flex items-center justify-center">
                                        <div className="movieBackgroundCard bg-red-400 w-96">
                                            {
                                                <img 
                                                    className='w-10'
                                                    src={fetchMovieImage(movieContent?.backdrop_path)}  
                                                    alt={'movie image'} 
                                                />
                                            }
                                        </div>
                                        <div className="movieCardImage w-96 flex items-center justify-center">
                                            {
                                                <img 
                                                    className='w-60 rounded-lg shadow-sm shadow-red-600'
                                                    src={fetchMovieImage(movieContent?.poster_path)}  
                                                    alt={'movie image'} 
                                                />
                                            }
                                        </div>
                                        <div className="movieCardContent min-h-[20rem] flex flex-col justify-around w-[75%]">
                                            <div className="movieCardTitle">
                                                <h1 className="text-4xl font-bold">{movieContent?.title}</h1>
                                            </div>
                                            <div className="movieCardDescription flex break-words">
                                                <p className="text-gray-300 text-lg">{movieContent?.overview}</p>
                                            </div>
                                            <div className="movieCardReleaseDate">
                                                <p className='text-gray-300 text-lg'>{movieContent?.release_date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </div>
                        </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
