import { useState, useEffect } from "react";
import { getRandomMovie } from "../../../api/movie/movieData";
import { Card } from "../../../Components/Card/Card";

import { register } from "swiper/element";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { swiperSettings } from "./other/settings/swiperSettings";

register();

import "swiper/css";
import { LineBreak } from "../../../Components/LineBreak/LineBreak";

export const PopularMovieList = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getRandomMovie(10);
        setMoviesList(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="popularMoviesList p-2 mt-5 flex flex-col items-center">
      <div className="container-fluid lg:container md:px-4 w-full">
        <LineBreak title="Popular Movies" />
      </div>

      <div className="popularMovieList flex flex-wrap gap-2 justify-center items-center">
        <Swiper
          className="container-fluid lg:container w-80 md:w-[50rem] lg:w-auto h-auto"
          {...swiperSettings}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
        >
          {moviesList.map((movie, index) => (
            <SwiperSlide key={index}>
              <Card type="movie" data={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
