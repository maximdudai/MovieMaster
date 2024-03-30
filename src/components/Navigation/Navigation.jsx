import { useState, useContext } from "react";

import { Links } from "./Components/Links";
import { MobileMenu } from "./Components/MobileMenu";
import { Search } from "./Components/Search";
import { ProfileMenu } from "./Components/ProfileMenu";
import { DefineUserDevice } from "../../Context/Device/Device";

export const Navigation = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const device = useContext(DefineUserDevice);

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }
  return (
    <nav className={`w-full p-5 md:py-5 border-b-2 border-red-600 flex justify-center`}>
      <div className="container flex justify-between items-center">
        <div className="landingPageTitle mr-3">
          <span className="text-red-600 uppercase font-semibold mr-1 text-md md:text-2xl">
            Movie
          </span>
          <span className="text-md border-t-2 border-red-600">master</span>
        </div>

        {device === 'mobile' || device === 'tablet' ? (
          <MobileMenu toggleMobileMenu={handleMobileMenu} isMobileVisible={isMobileMenuOpen}/>
        ) : (
          <div className="landingPageContainer w-full flex justify-between">
            <div className="leftSideContent w-full flex items-center">
              <div className="landingPageLinks">
                <Links />
              </div>

              <div className="searchMovieBar ml-10">
                <Search btnClassName={"ml-5 w-24"} />
              </div>
            </div>

            <div className="profileMenuContainer flex items-center">
              <ProfileMenu className={""} />
            </div>
          </div>
        )} 
      </div>
    </nav>
  );
};
