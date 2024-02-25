import { useState, useEffect } from "react";
import { getPopularPeople } from "../../../api/actorData";
import { Card } from "./other/Card";

import { PiTrendUpThin } from "react-icons/pi";

import { register } from 'swiper/element';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import { swiperSettings } from './other/settings/swiperSettings';

register();

import "swiper/css";

export const PopularPeople = () => {
  const [actorList, setActorList] = useState([]);

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const actorsResult = await getPopularPeople();
        setActorList(actorsResult);
      } catch (error) {
        console.error("Error fetching actors:", error);
      }
    };

    fetchActors();
  }, []);

  return (
    <div className="popularMoviesList p-2 mt-5 flex flex-col items-center">
      <div className="container-fluid lg:container md:px-4 w-full flex items-center">
        <h3 className="uppercase p-2 md:p-0 text-gray-400 text-nowrap tracking-wider text-sm md:text-lg lg:text-2xl">
          Popular Actors
        </h3>
        <div className="text-red-500 text-2xl p-2 m-2 bg-slate-600/30 rounded-lg">
          <PiTrendUpThin />
        </div>
        <div className="lineBreak relative w-full h-[1px] bg-gradient-to-l from-red-500/10 to-red-500"></div>
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
          {actorList.map((actor, index) => (
            <SwiperSlide key={index}>
              <Card type="actor" data={actor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
