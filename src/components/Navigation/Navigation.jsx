import { useEffect, useState } from "react";

import { LargeLeftSideBarNavigation } from "./module/largeLeftSideBar";
import { LargeTopSideBarNavigation } from "./module/largeTopSideBar";

export const Navigation = () => {
    const [mobileToggleLeftSideBar, setMobileToggleLeftSideBar] = useState(false);

    const [activeMenu, setActiveMenu] = useState(() => {
        const lastPage = localStorage.getItem('activeMenu');
        return lastPage ?? 'Browse';
    });

    const toggleMobileLeftSideBar = () => {
        setMobileToggleLeftSideBar(!mobileToggleLeftSideBar);
    };

    const onUserChangePage = (page) => {
        setActiveMenu(page);
    };

    useEffect(() => {
        localStorage.setItem("activeMenu", activeMenu);
    }, [activeMenu]);

    return (
        <>
            <div className="NavigationBar w-full flex flex-col lg:flex-row-reverse justify-center bg-black/30 drop-shadow-lg">
                <LargeTopSideBarNavigation toggleLeftSideMenu={toggleMobileLeftSideBar} />
                <LargeLeftSideBarNavigation toggleLeftSideMenu={mobileToggleLeftSideBar} handlePageClick={onUserChangePage} activeMenu={activeMenu} />
            </div>
        </>
    )
};