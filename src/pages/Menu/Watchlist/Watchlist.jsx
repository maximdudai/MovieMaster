import { Navigation } from "../../../components/Navigation/Navigation";
import { LargeLeftSideBarNavigation } from "../../../components/Navigation/module/largeLeftSideBar";

export const Watchlist = () => {
    return (
        <div className="MovieMasterWatchlist w-full flex flex-col">
            <div className="navigationBar">
                <Navigation />
            </div>

            <div className="watchlistContent flex">
                <div className="leftSideBar">
                    <LargeLeftSideBarNavigation />
                </div>

                <div className="watchlistContainer w-full">
                    contenttt
                </div>
            </div>        
        </div>
    )
};