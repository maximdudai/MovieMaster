export const addMovieToFavorites = (movieId) => {
  const moviesList = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

  const isMovieListed = moviesList.some((movie) => movie.id === movieId);

  console.log(isMovieListed);

  if(!isMovieListed) {
    moviesList.push({ id: movieId });
    localStorage.setItem('favoriteMovies', JSON.stringify(moviesList));
  }
  else 
    removeMovieFromFavorites(movieId);

  return !isMovieListed;
}

export const removeMovieFromFavorites = (movieId) => {
  const moviesList = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

  const updatedList = moviesList.filter((movie) => movie.id !== movieId);

  localStorage.setItem('favoriteMovies', JSON.stringify(updatedList));

  return updatedList;
}

export const isMovieInFavorites = (movieId) => {
  const moviesList = JSON.parse(localStorage.getItem('favoriteMovies')) || [];

  const isMovieListed = moviesList.some((movie) => movie.id === movieId);

  return isMovieListed;
}