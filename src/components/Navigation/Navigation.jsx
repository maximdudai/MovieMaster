import { useState } from "react";

import { LargeTopSideBarNavigation } from "./module/largeTopSideBar";

export const Navigation = () => {
    const [mobileToggleLeftSideBar, setMobileToggleLeftSideBar] = useState(false);


    const toggleMobileLeftSideBar = () => {
        setMobileToggleLeftSideBar(!mobileToggleLeftSideBar);
    };

    return (
        <>
            <div className="NavigationBar bg-black/30 drop-shadow-lg">
                <LargeTopSideBarNavigation toggleLeftSideMenu={toggleMobileLeftSideBar} />
            </div>
        </>
    )
};