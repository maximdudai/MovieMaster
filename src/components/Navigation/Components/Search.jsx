import { useState } from "react";
import propTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export const Search = ({ className, btnClassName }) => {
  const [searchBarInput, setSearchBarInput] = useState("");

  const handleSearchBarInput = (e) => {
    const text = e.target.value;
    setSearchBarInput(text);
  };

  const handleSearchMovie = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  
    // TODO: navigate to search page using search input content;
  }
  

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
        placeholder="Search movie..."
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
