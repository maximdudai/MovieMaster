import { useState, useEffect } from "react";
import { getPopularPeople } from "../../../api/actor/actorData";
import { Card } from "../../../Components/Card/Card";


import { register } from 'swiper/element';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

import { swiperSettings } from './other/settings/swiperSettings';

register();

import "swiper/css";
import { LineBreak } from "../../../Components/LineBreak/LineBreak";

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
      <div className="container-fluid lg:container md:px-4 w-full">
        <LineBreak title="Popular Actors" />
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
