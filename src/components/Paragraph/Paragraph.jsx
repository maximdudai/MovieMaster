import propTypes from "prop-types";

import { twMerge } from 'tailwind-merge';

export const Paragraph = ({ className, content }) => {
  return (
    <p className={twMerge(`text-xs p-2 my-2 uppercase border-l border-red-500 text-gray-400`, className)}>
      {content}
    </p>
  );
};

Paragraph.propTypes = {
  className: propTypes.string,
  content: propTypes.string,
};
