import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

import propTypes from "prop-types";
import { Link } from "react-router-dom";

const linkData = [
  { href: "/", label: "Home" },
  { href: "/popular", label: "Popular" },
  { href: "/films", label: "Films" },
  { href: "/tv-series", label: "TV Series" },
  { href: "/actors", label: "Actors" },
  { href: "/news", label: "News" },
];

export const Links = ({ className, listClassName }) => {
  const currentLocation = window.location.pathname;

  const [activeMenu, setActiveMenu] = useState(currentLocation === "/" ? "Home": currentLocation);

  useEffect(() => {
    setActiveMenu(currentLocation === "/" ? "Home": currentLocation);
  }, [currentLocation]);

  const citalizeFirstLetter = (string) => {
    const finalString = string.charAt(0).toUpperCase() + string.slice(1);
    return finalString;
  }

  const getCurrentLocation = (string) => {
    const removeSlashFromString = string.replace("/", "");
    const finalString = removeSlashFromString.charAt(0).toUpperCase() + removeSlashFromString.slice(1);
    return finalString;
  }

  return (
    <ul role="menu" className={twMerge("flex gap-3", className)}>
      {linkData.map(({ href, label }, index) => {
        return (
          <Link key={index} to={href} className={twMerge(
            `cursor-pointer p-2 rounded ${
              getCurrentLocation(activeMenu) === citalizeFirstLetter(label) ? "bg-white/25" : ""
            }`,
            listClassName
          )}>
            {label}
          </Link>
        );
      })}
    </ul>
  );
};

Links.propTypes = {
  className: propTypes.string,
  listClassName: propTypes.string,
};
