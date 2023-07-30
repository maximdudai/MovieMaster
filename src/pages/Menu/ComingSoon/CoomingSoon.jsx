import { Navigation } from "../../../components/Navigation/Navigation";
import { LargeLeftSideBarNavigation } from "../../../components/Navigation/module/largeLeftSideBar";

export const CoomingSoon = () => {
    return (
        <div className="MovieMasterCoomingSoon w-full flex flex-col">
            <div className="navigationBar">
                <Navigation />
            </div>

            <div className="CoomingSoonContent flex">
                <div className="leftSideBar">
                    <LargeLeftSideBarNavigation />
                </div>

                <div className="CoomingSoonContainer w-full">
                    contenttt
                </div>
            </div>        
        </div>
    )
};