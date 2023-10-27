import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Links } from "./Links";
import { Search } from "./Search";
import { ProfileMenu } from "./ProfileMenu";

export const MobileMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className="mobileMenuNavigationBar flex items-center">
      <button onClick={handleMobileMenu} className="mobileMenuBurger text-2xl">
        <HiOutlineMenu className="text-white" />
      </button>

      {isMobileMenuOpen && (
        <div className="mobileMenuLinks fixed z-10 left-0 top-32 w-screen h-screen  p-5 bg-[#353535]">
            {/* TODO: verify if user logged in */}
            <ProfileMenu className={'flex flex-row-reverse justify-between '} />
        
            <Links className={'flex-col mt-5'} />
            <Search className={'w-full mt-10'} btnClassName={'w-full'}/>
        </div>
      )}
    </div>
  );
};
