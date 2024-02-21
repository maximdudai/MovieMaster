import propTypes from "prop-types";
import { getMoviePoster } from "../../../../api/movieData";

export const PopularMovieCard = ({ movie }) => {


  const moviePoster = getMoviePoster(movie.poster_path);

  return (
    <div id={`${movie.id}`} className="PopularMovieCard p-2 bg-black/20 mt-5">
      <div className="movieCardPoster">
        <img
          className=""
          src={moviePoster}
          alt={movie.title}
        />
      </div>
      <div className="movieCardTitle py-1">
        <h1 className="text-gray-400 uppercase text-sm">
          {movie.title}
        </h1>
      </div>
    </div>
  );
};

PopularMovieCard.propTypes = {
  movie: propTypes.object.isRequired
};