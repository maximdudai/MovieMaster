import propTypes from "prop-types";
import { twMerge } from "tailwind-merge";

import { PiTrendUpThin } from "react-icons/pi";

export const LineBreak = ({ title, className }) => {
  return (
    <div className={twMerge(`w-full flex items-center`, className)}>
      <h3 className="uppercase p-2 md:p-0 text-gray-400 text-nowrap tracking-wider text-sm md:text-lg lg:text-2xl">
        {title}
      </h3>
      <div className="text-red-500 text-2xl p-2 m-2 bg-slate-600/30 rounded-lg">
        <PiTrendUpThin />
      </div>
      <div className="lineBreak relative w-full h-[1px] bg-gradient-to-l from-red-500/10 to-red-500"></div>
    </div>
  );
};

LineBreak.propTypes = {
  title: propTypes.string,
  className: propTypes.string,
};
