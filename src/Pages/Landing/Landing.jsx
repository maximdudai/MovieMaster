import { useState, useEffect } from "react";
import { Navigation } from "../../Components/Navigation/Navigation"

import { getPopularMovies } from '../../api/getPopularMovie';

export const Landing = () => {
  
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const data = await getPopularMovies();
      setMovies(data);
    };

    getMovies();
  }, []);
  return (
    <>
      <Navigation />

      <section className="landingPageContainer">
        hello
      </section>
    </>
  )
}