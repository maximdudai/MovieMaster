import { useParams } from "react-router-dom";

import { Navigation } from "../../Components/Navigation/Navigation";
import { Footer } from "../../Components/Footer/Footer";
import { Card } from "../../Components/Card/Card";

import { useEffect, useState } from "react";

import { searchResult } from "../../api/searchResult";
import { getQueryParamsFromUrl } from "../../utils/utils";
import { LineBreak } from "../../Components/LineBreak/LineBreak";

import { RiMenuSearchLine } from "react-icons/ri";

import { LuPanelLeftOpen, LuPanelLeftClose } from "react-icons/lu";



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
      try {
        const searchQuery = await searchResult(query);
        setSearchData(searchQuery);
      } catch (err) {
        console.error("Error fetching data:", err);
        throw err;
      }
    };

    handleSearchData();
  }, [query]);

  useEffect(() => {
    const handleDataType = () => {
      if (searchData.length > 0) {
        const movieData = searchData.filter(
          (data) => data.media_type === "movie"
        );
        const tvData = searchData.filter((data) => data.media_type === "tv");
        const personData = searchData.filter(
          (data) => data.media_type === "person"
        );

        setDataType((prevState) => ({
          ...prevState,
          movie: movieData,
          tv: tvData,
          person: personData,
        }));
      }
    };

    handleDataType();
  }, [searchData]);

  return (
    <>
      <Navigation />
      <main className="flex flex-col justify-center items-center">
        <LuPanelLeftClose className="fixed w-10 h-10 p-1 rounded-md z-50 right-0 top-[50vh] text-2xl  border-2 border-gray-400 text-gray-400 hover:border-red-500 hover:text-red-500" />

        <header className="container border-b-2 border-gray-400/20">
          <div className="containerTitle my-1 flex justify-end items-center">
            <h1 className="text-right p-3 uppercase text-gray-500 text-[12px]">Search Results</h1>

            <div className="searchElements flex items-center bg-black/20 p-2 rounded-md">
              <span className="mx-2">{getQueryParamsFromUrl(query)}</span>
              <RiMenuSearchLine/>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="movieList">
            <ul className="w-full flex flex-wrap">
              {dataType.movie.map((data, index) => (
                <li className="w-96" key={index}>
                  <Card type="movie" data={data} />
                </li>
              ))}
            </ul>
          </div>

          {dataType.tv.length > 0 && (
            <LineBreak title="TV Shows" className={"my-2"} />
          )}

          <div className="tvShowList">
            <ul className="w-full flex flex-wrap">
              {dataType.tv.map((data, index) => (
                <li className="w-96" key={index}>
                  <Card type="movie" data={data} />
                </li>
              ))}
            </ul>
          </div>

          {dataType.person.length > 0 && (
            <LineBreak title="Actors" className={"my-2"} />
          )}

          <div className="actorList">
            <ul className="w-full flex flex-wrap">
              {dataType.person.map((data, index) => (
                <li className="w-96" key={index}>
                  <Card type="actor" data={data} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
