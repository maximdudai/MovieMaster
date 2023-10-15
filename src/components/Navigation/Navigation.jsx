import { Links } from "./Components/Links";
import { isMobile } from "react-device-detect";
import { MobileMenu } from "./Components/MobileMenu";

export const Navigation = () => {

  return (
    <nav className="w-full h-32 p-2 flex items-center justify-between lg:justify-start lg:gap-10 border-b-2 border-red-600">

      <div className="landingPageTitle px-5">
        <span className="text-red-600 uppercase font-semibold mr-1 text-2xl">Movie</span>
        <span className="text-md border-t-2 border-red-600">master</span>
      </div>

      { 
        isMobile ? <MobileMenu /> : 

        <div className="landingPageLinks">
          <Links />
        </div>
      }

    </nav>
  )
}