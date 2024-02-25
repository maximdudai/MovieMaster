import propTypes from "prop-types";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getActorBackdrop, getActorDetails } from "../../../../api/actorData";

import { CiStar } from "react-icons/ci";
import { getMovieBackdrop } from "../../../../api/movieData";

export const Card = ({ type = "movie", data }) => {
  const [actorData, setActorData] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchActors = async () => {
      try {
        const actorsResult = await getActorDetails(data.id);
        setActorData(actorsResult);
      } catch (error) {
        // Handle errors
        console.error('Error fetching actor details:', error);
      }
    }

    if(type === "actor")
      fetchActors();
  }, [data.id, type]);

  const handleMovieData = (actorID) => {

    if(type === "actor") {
      // Navigate to actor details page
    } else if(type === "movie"){
      navigate(`/movie-data/${actorID}`, { replace: true });
    }
  };

  const actorPoster =
    type === "movie"
      ? getMovieBackdrop(data.backdrop_path)
      : getActorBackdrop(data.profile_path);
  const title = type === "movie" ? data.title : data.name;

  return (
    <div id={`${data.id}`} className="PopularMovieCard m-5 cursor-pointer" onClick={() => handleMovieData(data.id)}>
      <div className="movieCardPoster">
        <img className="w-auto rounded-xl" src={actorPoster} alt={title} />
      </div>
      <div className="movieCardDetails py-1">
        <div className="movieCardTitle">
          <h3 className="uppercase text-sm text-wrap">{title}</h3>
        </div>
        {type === "movie" ? (
          <div className="movieCardData my-1 flex justify-between items-center">
            <p className="text-xs">{data?.release_date}</p>
            <p className="text-gray-400 text-xs flex items-center">
              <span className="starIcon text-lg">
                <CiStar className="mx-1 hover:text-red-500" />
              </span>
              <span className="votesCount text-gray">
                {data?.vote_average?.toFixed(1)}
              </span>
            </p>
          </div>
        ) : (
          <div className="actorCardData my-1 flex justify-between items-center">
            <p className="text-xs text-gray-400">{actorData?.birthday}</p>
          </div>
        )}
      </div>
    </div>
  );
};

Card.propTypes = {
  type: propTypes.string,
  data: propTypes.object.isRequired,
};
