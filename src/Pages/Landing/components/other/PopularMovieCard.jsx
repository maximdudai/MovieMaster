import propTypes from "prop-types";

export const PopularMovieCard = ({ movie }) => {

  console.log(movie);

  return (
    <div className="PopularMovieCard">
      <div className="movieCardPoster relative">
        <img
          className="absolute inset-0"
          src={movie.poster_path}
          alt={movie.title}
        />
      </div>
    </div>
  );
};

PopularMovieCard.propTypes = {
  movie: propTypes.object.isRequired
};