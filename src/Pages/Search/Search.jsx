
import { useParams } from "react-router-dom";

import { Navigation } from '../../Components/Navigation/Navigation';
import { Footer } from '../../Components/Footer/Footer';
import { Card } from '../../Components/Card/Card';

import { useEffect, useState } from "react";

import { searchResult } from "../../api/searchResult";

export const Search = () => {
  const [searchData, setSearchData] = useState([]);
  
  const [dataType, setDataType] = useState({
    movie: [],
    tv: [],
    person: [],
  });

  const { query } = useParams();

  useEffect(() => {
    

    const handleSearchData = async () => {  
      const searchQuery = await searchResult(query);

      setSearchData(searchQuery);
      
    };

    handleSearchData();

  }, [query, searchData]);

  useEffect(() => {

    const handleDataType = () => {
      if (searchData.length > 0) {
        const movieData = searchData.filter((data) => data.media_type === "movie");
        const tvData = searchData.filter((data) => data.media_type === "tv");
        const personData = searchData.filter((data) => data.media_type === "person");

        setDataType({
          movie: movieData,
          tv: tvData,
          person: personData,
        });
      }
    };

    handleDataType();

  }, [searchData]);


  return (
    <>
      <Navigation />
      <main className="grid grid-flow-col">
        <div className="movieList">
          {
            dataType.movie.map((data) => (
              <Card key={data.id} type="movie" data={data} />
            ))
          }
        </div>
        
        <div className="tvShowList">
          {
            dataType.tv.map((data) => (
              <Card key={data.id} type="tv" data={data} />
            ))
          }
        </div>

        <div className="actorList">
          {
            dataType.person.map((data) => (
              <Card key={data.id} type="actor" data={data} />
            ))
          }
        </div>
      </main>
      <Footer />
    </>
  )
}
