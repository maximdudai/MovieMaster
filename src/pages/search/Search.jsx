
import { useLocation } from "react-router-dom";

export const Search = () => {

    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get("query");

    console.log(searchQuery);

    return (
        <>
            <div className="searchMovieMaster">
                hello world
            </div>
        </>
    )
};