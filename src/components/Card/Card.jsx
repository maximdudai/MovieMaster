import propTypes from "prop-types";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { getActorBackdrop, getActorDetails } from "../../api/actor/actorData";
import { getMovieBackdrop } from "../../api/movie/movieData";


import {
  addMovieToFavorites,
  isMovieInFavorites,
} from "../../api/favorites";

import { CiStar } from "react-icons/ci";

export const Card = ({ type = "movie", data }) => {

  const [actorData, setActorData] = useState([]);
  const [isFavorite, setIsFavorite] = useState(isMovieInFavorites(data.id));
  const navigate = useNavigate();

  useEffect(() => {
    const fetchActors = async () => {
      try {
        const actorsResult = await getActorDetails(data.id);
        setActorData(actorsResult);
      } catch (error) {
        // Handle errors
        console.error("Error fetching actor details:", error);
      }
    };

    if (type === "actor") fetchActors();
  }, [data.id, type]);

  const handleMovieData = (dataID) => {
    navigate(`/movie-data/${type}/${dataID}`, { replace: true });
  };

  // add movie/actor to favorites
  const handleItemToFavorites = (e) => {
    e.stopPropagation();
    // Add to favorites
    const addedToFavorites = addMovieToFavorites(data.id);
    if (addedToFavorites) toast.success("Added to favorites");
    else toast.error("Removed from favorites");

    setIsFavorite(addedToFavorites);
  };

  const actorPoster =
    type === "movie"
      ? getMovieBackdrop(data.backdrop_path)
      : getActorBackdrop(data.profile_path);
  const title = type === "movie" ? data.title : data.name;

  return (
    <div
      id={`${data.id}`}
      className="PopularMovieCard m-5 cursor-pointer"
      onClick={() => handleMovieData(data.id)}
    >
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
              <span
                className="starIcon text-lg"
                onClick={handleItemToFavorites}
              >
                <CiStar
                  className={`mx-1 ${
                    isFavorite
                      ? "text-red-500"
                      : "text-gray-400 hover:text-yellow-400"
                  }`}
                />
              </span>
              <span className="votesCount text-gray">
                {data?.vote_average?.toFixed(1)}
              </span>
            </p>
          </div>
        ) : (
          <div className="actorCardData my-1 flex justify-between items-center">
            <p className="text-xs text-gray-400">
              {actorData?.birthday}{" "}
              {actorData?.deathday ? ` - ${actorData?.deathday}` : ""}
            </p>
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
