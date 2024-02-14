import { useState, useEffect } from 'react';

import { Carousel } from '@trendyol-js/react-carousel';

import { getRandomMovie } from '../../../api/movieData';

import { PopularMovieCard } from './other/PopularMovieCard';


export const PopularMovieList = () => {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getRandomMovie(3);
        setMoviesList(fetchedMovies);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);


  return (
    <div className="popularMoviesList p-2 mt-5">

      <div className="popularMovieListTitle border-b-2 border-red-500">
        <h1 className='uppercase text-gray-400 tracking-wider text-sm'>Movies you might like..</h1>
      </div>

      <div className="popularMovieListContainer flex flex-wrap gap-2 justify-center items-center">
      <Carousel>
          {moviesList?.map((movie) => (
            <PopularMovieCard key={movie.id} movie={movie} />
          ))}
        </Carousel>
      </div>

    </div>
  )

}