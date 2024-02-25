import propTypes from "prop-types";
import { twMerge } from "tailwind-merge";

export const MovieMasterLogo = ({ mainDivClass, movieClass, masterClass }) => {
  return (
    <div className={twMerge(`movieMasterLogo px-0 md:px-5`, mainDivClass)}>
      <span className={twMerge(`text-red-600 uppercase font-semibold mr-1 text-md md:text-2xl`, movieClass)}>
        Movie
      </span>
      <span className={twMerge(`text-md border-t-2 border-red-600`, masterClass)}>master</span>
    </div>
  );
};

MovieMasterLogo.propTypes = {
  mainDivClass: propTypes.string,
  movieClass: propTypes.string,
  masterClass: propTypes.string,
};
