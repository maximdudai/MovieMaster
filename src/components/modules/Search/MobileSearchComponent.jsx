import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { SearchComponent } from "./SearchComponent";
import { MdRemove } from 'react-icons/md';

export const MobileSearchComponent = () => {
    const [mobileSearch, setMobileSearch] = useState('');

    const [searchHistory, setSearchHistory] = useState(() => {
        const storedTerm = localStorage.getItem("MovieMasterSearchHistory");
        return storedTerm ? JSON.parse(storedTerm) : [];
    });
  
    const handleMobileSearch = (event) => {
        const content = event.target.value;
        setMobileSearch(content);
    };
  
    const navigate = useNavigate();
  
    const handleUserSearchMovie = (e) => {
        if(!mobileSearch) return;
  
        if(e.key === 'Enter') {
            handleUserClickSearchMovie();
        }
    };
  
    const handleUserClickSearchMovie = () => {
        setSearchHistory((prev) => [...prev, mobileSearch]);
        saveSearchedText();

        navigate(`/search?query=${encodeURIComponent(mobileSearch)}`);
    };
  
    const saveSearchedText = useCallback(() => {
        localStorage.setItem("MovieMasterSearchHistory", JSON.stringify(searchHistory));
    }, [searchHistory]);

    useEffect(() => {
        saveSearchedText()
    }, [saveSearchedText]);

    return (
        <div className="MovieMasterSearchPage absolute z-50 w-screen min-h-[20rem] bg-black/25 top-0 left-0">

            <div className="searchPageContent p-2 mt-10">
                <div className="searchInput">
                    <SearchComponent 
                        className={'w-full p-3 text-black rounded-md text-md focus:outline-none'}
                        type={'text'}
                        searchInput={handleMobileSearch}
                        placeholder={'Search...'}
                        onPressEnter={handleUserSearchMovie}
                        spellCheck={false}
                    />
                </div>

                <div className="searchButtons w-full flex items-center mt-3 justify-between">
                    <div className="searchButton bg-red-600 px-10 rounded-md p-2" onClick={handleUserClickSearchMovie}>Search</div>
                    <div className="resetSearchHistory text-sm text-gray-400">reset search history</div>
                </div>

                <div className="historySearch">
                    <div className={`navigationSearchPageContent max-h-64 overflow-y-scroll`}>
                        {
                            searchHistory &&
                            <ul className="mt-1">
                                {
                                    searchHistory.map((search, index) => {
                                        return <li 
                                            // onClick={() => removeClientHistoryElement(index)}
                                            className="w-[95%] flex justify-between m-1 text-gray-600 p-1 px-2 border-b-[1px] border-gray-400"
                                            key={index}>
                                            <span className="searchContent">{search}</span>
                                            <span className="searchRemoveIcon">
                                                <MdRemove />
                                            </span>
                                        </li>
                                    })
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};