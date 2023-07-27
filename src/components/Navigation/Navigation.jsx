import { useState } from "react";

import { LargeLeftSideBarNavigation } from "./module/largeLeftSideBar";
import { LargeTopSideBarNavigation } from "./module/largeTopSideBar";

export const Navigation = () => {
    const [mobileToggleLeftSideBar, setMobileToggleLeftSideBar] = useState(false);


    const toggleMobileLeftSideBar = () => {
        setMobileToggleLeftSideBar(!mobileToggleLeftSideBar);
    };

    return (
        <>
            <div className="NavigationBar w-full flex flex-col lg:flex-row-reverse justify-center bg-black/30 drop-shadow-lg">
                <LargeTopSideBarNavigation toggleLeftSideMenu={toggleMobileLeftSideBar} />
                <LargeLeftSideBarNavigation toggleLeftSideMenu={mobileToggleLeftSideBar} />
            </div>
        </>
    )
};