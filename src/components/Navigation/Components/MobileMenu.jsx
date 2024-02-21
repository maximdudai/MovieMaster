import propTypes from "prop-types";

import { HiOutlineMenu } from "react-icons/hi";
import { Links } from "./Links";
import { Search } from "./Search";
import { ProfileMenu } from "./ProfileMenu";

export const MobileMenu = ({ toggleMobileMenu, isMobileVisible }) => {

  return (
    <div className="mobileMenuNavigationBar flex items-center">
      <button onClick={toggleMobileMenu} className="mobileMenuBurger text-2xl">
        <HiOutlineMenu className="text-white" />
      </button>

      {toggleMobileMenu && isMobileVisible && (
        <div className="mobileMenuLinks fixed z-10 left-0 top-16 w-screen h-screen  p-5 bg-[#353535]">
            {/* TODO: verify if user logged in */}
            <ProfileMenu className={'flex flex-row-reverse justify-between '} />
        
            <Links className={'flex-col mt-5'} />
            <Search className={'w-full mt-10'} btnClassName={'w-full'}/>
        </div>
      )}
    </div>
  );
};

MobileMenu.propTypes = {
  toggleMobileMenu: propTypes.func,
  isMobileVisible: propTypes.bool
};