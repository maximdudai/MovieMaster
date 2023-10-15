import { useState } from "react";
import { twMerge } from "tailwind-merge";

import propTypes from "prop-types";

export const Links = ({ className, listClassName }) => {
  const [activeMenu, setActiveMenu] = useState("Popular");

  const handleActiveMenu = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <ul role="menu" className={twMerge("flex gap-3", className)}>
      <li
        role="none"
        className={twMerge(
          `cursor-pointer p-2 rounded ${
            activeMenu === "Popular" ? "bg-white/25" : ""
          }`,
          listClassName
        )}
        onClick={() => handleActiveMenu("Popular")}
      >
        Popular
      </li>
      <li
        role="none"
        className={twMerge(
          `cursor-pointer p-2 rounded ${
            activeMenu === "Films" ? "bg-white/25" : ""
          }`,
          listClassName
        )}
        onClick={() => handleActiveMenu("Films")}
      >
        Films
      </li>
      <li
        role="none"
        className={twMerge(
          `cursor-pointer p-2 rounded ${
            activeMenu === "TVseries" ? "bg-white/25" : ""
          }`,
          listClassName
        )}
        onClick={() => handleActiveMenu("TVseries")}
      >
        TV series
      </li>
      <li
        role="none"
        className={twMerge(
          `cursor-pointer p-2 rounded ${
            activeMenu === "Actors" ? "bg-white/25" : ""
          }`,
          listClassName
        )}
        onClick={() => handleActiveMenu("Actors")}
      >
        Actors
      </li>
      <li
        role="none"
        className={twMerge(
          `cursor-pointer p-2 rounded ${
            activeMenu === "News" ? "bg-white/25" : ""
          }`,
          listClassName
        )}
        onClick={() => handleActiveMenu("News")}
      >
        News
      </li>
    </ul>
  );
};

Links.propTypes = {
  className: propTypes.string,
  listClassName: propTypes.string,
};
