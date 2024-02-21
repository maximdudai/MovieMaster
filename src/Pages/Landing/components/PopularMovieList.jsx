import { useState, useEffect } from "react";
import { getRandomMovie } from "../../../api/movieData";
import { PopularMovieCard } from "./other/PopularMovieCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export const PopularMovieList = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getRandomMovie(3);
        setMoviesList(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  console.log(moviesList);

  return (
    <div className="popularMoviesList p-2 mt-5">
      <div className="popularMovieListTitle border-b-2 border-red-500">
        <h1 className="uppercase text-gray-400 tracking-wider text-sm md:text-lg lg:text-2xl">
          Movies you might like..
        </h1>
      </div>

      <div className="popularMovieListContainer flex flex-wrap gap-2 justify-center items-center">
        <Swiper
          className="w-full md:w-3/4"
          spaceBetween={50}
          centeredSlides={true}
          slidesPerView={3}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay, Pagination]}
          scrollbar={{ draggable: true }}
        >
          {
            moviesList.map((movie, index) => (
              <SwiperSlide key={index}>
                <PopularMovieCard movie={movie} />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
};
