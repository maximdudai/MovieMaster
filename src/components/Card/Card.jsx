import propTypes from "prop-types";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { getActorBackdrop, getActorDetails } from "../../api/actor/actorData";
import { getMovieBackdrop } from "../../api/movie/movieData";

import { addMovieToFavorites, isMovieInFavorites } from "../../api/favorites";

import { CiStar } from "react-icons/ci";
import { isImageAvailable } from "../../utils/utils";

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

  const handleItemData = (dataID) => {
    if (type === "actor")
      navigate(`/actor-data/${dataID}`);
  
    else if (type === "tv" || type === "movie") {
      navigate(`/movie-data/${type}/${dataID}`);
    }
  };

  // add movie/actor to favorites
  const handleItemToFavorites = (title, movieid) => {
    // Add to favorites
    const addedToFavorites = addMovieToFavorites(data.id);
    toast.message(`Movie ${addedToFavorites ? 'added to' : 'removed from'} favorites`, {
      description: `${title} (#${movieid})`,
    });

    setIsFavorite(addedToFavorites);
  };

  const actorPoster =
    type === "movie" || type === "tv"
      ? getMovieBackdrop(data.backdrop_path)
      : getActorBackdrop(data.profile_path);

  const title = type === "actor" || type === "tv" ? data.name : data.title;

  return (
    <div id={`${data.id}`} className="PopularMovieCard m-5">
      <div
        className="movieCardPoster cursor-pointer"
        onClick={() => handleItemData(data.id)}
      >
        <img
          className="w-auto rounded-xl"
          src={isImageAvailable(actorPoster)}
          alt={title}
        />
      </div>
      <div className="movieCardDetails py-1">
        <div className="movieCardTitle">
          <h3 className="uppercase text-sm text-wrap">{title}</h3>
        </div>

        {type === "movie" || type === "tv" ? (
          <div className="movieCardData my-1 flex justify-between items-center">
            <p className="text-xs text-gray-400">
              {data?.release_date ?? data?.first_air_date}
            </p>
            <p className="text-gray-400 text-xs flex items-center cursor-pointer">
              <span
                className="starIcon text-lg"
                onClick={() => handleItemToFavorites(title, data.id)}
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
              {actorData?.birthday}
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
