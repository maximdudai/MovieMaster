import { Links } from "./Components/Links";
import { isMobile } from "react-device-detect";
import { MobileMenu } from "./Components/MobileMenu";
import { Search } from "./Components/Search";

export const Navigation = () => {
  return (
    <nav className="w-full h-32 p-2 flex items-center justify-between lg:justify-start lg:gap-10 border-b-2 border-red-600">
      <div className="landingPageTitle px-5">
        <span className="text-red-600 uppercase font-semibold mr-1 text-2xl">
          Movie
        </span>
        <span className="text-md border-t-2 border-red-600">master</span>
      </div>

      {isMobile ? (
        <MobileMenu />
      ) : (
        <div className="landingPageContainer w-full flex justify-between">
          <div className="leftSideContent w-full flex items-center">
            <div className="landingPageLinks">
              <Links />
            </div>

            <div className="searchMovieBar ml-10">
              <Search btnClassName={'ml-5 w-24'} />
            </div>
          </div>

          <div className="rightSideContent">
            <div className="helpMenu">
              
            </div>
            <div className="profileMenu"></div>
          </div>
 
        </div>
      )}
    </nav>
  );
};
