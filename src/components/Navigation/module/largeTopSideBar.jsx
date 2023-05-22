
import '../style/topSideBar/topSideBar.css';

export const LargeTopSideBarNavigation = () => {
    return (
        <>
            <div className="largeTopNavbar flex items-center justify-between w-[77%] h-28">
                <div className="topLeftSideContent">
                    <div className="manageLeftBarNavbar"></div>
                    <div className="searchFieldInput"></div>
                </div>

                <div className="topRightSideContent">
                    <div className="profileNotifications"></div>
                    <div className="profileMessages"></div>
                    <div className="profileSection"></div>
                </div>
            </div>
        </>
    )
};