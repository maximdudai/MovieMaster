import { isMobile, isTablet } from "react-device-detect";

import { Links } from "./Components/Links";
import { MobileMenu } from "./Components/MobileMenu";
import { Search } from "./Components/Search";
import { ProfileMenu } from "./Components/ProfileMenu";

export const Navigation = () => {

  console.log(isMobile, isTablet);

  return (
    <nav className="w-full p-5 border-b-2 border-red-600 flex justify-center">
      <div className="container flex justify-between items-center">
        <div className="landingPageTitle px-0 md:px-5">
          <span className="text-red-600 uppercase font-semibold mr-1 text-md md:text-2xl">
            Movie
          </span>
          <span className="text-md border-t-2 border-red-600">master</span>
        </div>

        {isMobile || isTablet ? (
          <MobileMenu />
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
