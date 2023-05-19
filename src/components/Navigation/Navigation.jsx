import { useState, useEffect } from "react";
import { MobileNavigationBar } from "./module/mobileNavBar";
import { Link } from "react-router-dom";

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
            <div className="NavigationBar">
                {
                    width <= 1024 ? (
                        <MobileNavigationBar />
                    ) : (

                        <div className="largeNavigationBar w-full flex justify-between items-center">

                            <div className="movieMasterLogo p-2">
                                <Link to="/">
                                    <div className="logoTitle text-4xl">MovieMaster</div>
                                    <div className="logoSubTitle text-sm text-orange-400 text-center">Search with Us, Watch with Us!</div>
                                </Link>
                            </div>
                            <div className="links text-md">
                                <Link className="mx-2 hover:border-b-2 border-orange-400" to="/tmbd-movies">Movies</Link>
                                <Link className="mx-2 hover:border-b-2 border-orange-400" to="/tmbd-tvshows">TV Shows</Link>
                                <Link className="mx-2 hover:border-b-2 border-orange-400" to="/tmbd-people">People</Link>
                            </div>

                        </div>
                    )
                }
            </div>
        </>
    )
};