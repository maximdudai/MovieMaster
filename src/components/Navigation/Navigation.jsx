import { Links } from "./Components/Links";
import { isMobile } from "react-device-detect";
import { MobileMenu } from "./Components/MobileMenu";
import { Search } from "./Components/Search";
import { DropDown } from "./Components/DropDown";

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

          <div className="rightSideContent flex items-center">
            <div className="helpMenu flex items-center">
              <DropDown />
            </div>
            <div className="profileMenu">
              <img 
                className="rounded-full w-10"
                src={'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png'} 
                alt="" />
            </div>
          </div>
 
        </div>
      )}
    </nav>
  );
};
