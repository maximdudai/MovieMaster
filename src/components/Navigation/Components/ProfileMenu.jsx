import { Link } from "react-router-dom";
import { DropDown } from "./DropDown";

import propTypes from 'prop-types'
import { twMerge } from "tailwind-merge";

export const ProfileMenu = ({ className }) => {
  return (
    <>
      <div className={twMerge(`profileMenu flex items-center`, className)}>
        <div className="helpMenu flex items-center mr-5">
          <DropDown />
        </div>
        <div className="profileIconMenu cursor-pointer">
          <Link to="/profile">
            <img
              className="rounded-full w-12"
              src={
                "https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png"
              }
              alt=""
            />
          </Link>
        </div>
      </div>
    </>
  );
};

ProfileMenu.propTypes = {
  className: propTypes.string
}
