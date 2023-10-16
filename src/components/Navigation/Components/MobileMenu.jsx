import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { Links } from "./Links";
import { Search } from "./Search";

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
        <div className="mobileMenuLinks fixed z-10 left-0 top-32 w-screen h-screen  p-5 bg-black">
            <Links className={'block'} listClassName={'my-5'} />
            <Search className={'w-full mt-10'} />
        </div>
      )}
    </div>
  );
};
