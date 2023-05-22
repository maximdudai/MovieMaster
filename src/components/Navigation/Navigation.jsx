import { useState, useEffect } from "react";
import { MobileNavigationBar } from "./module/mobileNavBar";

import { LargeLeftSideBarNavigation } from "./module/largeLeftSideBar";
import { LargeTopSideBarNavigation } from "./module/largeTopSideBar";

export const Navigation = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            <div className="NavigationBar w-full flex justify-center items-center bg-black/30 drop-shadow-lg">
                {
                    width <= 1024 ? (
                        <MobileNavigationBar />
                    ) : (
                        <div className="largeNavigationBar w-full flex">
                            <LargeLeftSideBarNavigation />
                            <LargeTopSideBarNavigation />
                        </div>
                    )
                }
            </div>
        </>
    )
};