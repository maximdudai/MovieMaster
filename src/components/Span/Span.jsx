import propTypes from "prop-types";

import { twMerge } from 'tailwind-merge';

export const Span = ({ className, content }) => {
  return <span className={twMerge(`bg-white/5 p-2 rounded text-md`, className)}>{content}</span>;
};

Span.propTypes = {
  className: propTypes.string,
  content: propTypes.string,
};
