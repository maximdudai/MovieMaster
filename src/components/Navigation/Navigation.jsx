import { useState, useEffect } from "react";

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
            <div className="NavigationBar w-full flex flex-row-reverse justify-center bg-black/30 drop-shadow-lg">
                <LargeTopSideBarNavigation />
                { width >= 1150 && <LargeLeftSideBarNavigation /> }
            </div>
        </>
    )
};