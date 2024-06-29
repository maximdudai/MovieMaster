import { useState } from "react";
import propTypes from "prop-types";

import { twMerge } from "tailwind-merge";
import { useNavigate } from "react-router-dom";

export const Search = ({ className, btnClassName }) => {
  const [searchBarInput, setSearchBarInput] = useState("");
  const navigate = useNavigate();

  const handleSearchBarInput = (e) => {
    const text = e.target.value;
    setSearchBarInput(text);
  };

  const handleSearchMovie = async (e) => {
    e.preventDefault();

    navigate(`/search/query=${searchBarInput}`);
  };
  

  return (
    <form method="GET">
      <input
        className={twMerge(
          "rounded p-2 w-96 text-black focus:outline-none",
          className
        )}
        onChange={handleSearchBarInput}
        type="text"
        name="searchBarInput"
        id="searchBarInput"
        placeholder="Search Movies, TV Shows or Actors"
      />
      <button
        type="submit"
        onClick={handleSearchMovie}
        className={twMerge(
          `bg-red-600/70 text-white rounded p-2 mt-2`,
          btnClassName
        )}
      >
        Search
      </button>
    </form>
  );
};

Search.propTypes = {
  className: propTypes.string,
  btnClassName: propTypes.string,
};
