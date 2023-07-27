import { useEffect, useState } from 'react';
import { Navigation } from '../../../components/Navigation/Navigation';
import axios from 'axios';


import '../../global.style.css';
// import './homepage.style.css';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: "Bearer " + import.meta.VITE_API_KEY
    }
};

export const HomePage = () => {
    const [movieContent, setMovieContent] = useState(null); // Use correct state variable name

    // https://image.tmdb.org/t/p/original /id


    const fetchMovieImage = (path) => {
        return `https://image.tmdb.org/t/p/original/${path}`
    }
    const fetchData = async () => {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular', options);
            const responseData = response?.data?.results;
            if (!responseData) {
                throw new Error('Invalid response data');
            }
    
            const randomIndex = Math.floor(Math.random() * responseData.length);
            const randomMovie = responseData[randomIndex];
    
            console.log(randomMovie);
            const movieContent = JSON.stringify(randomMovie);
            localStorage.setItem('moviesData', movieContent);
    
            setMovieContent(randomMovie);
        } catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, []);
    

    return (
        <>
            <div className="HomePageContainer w-full flex flex-col justify-center items-center">
                <div className="appBannerContent w-full">
                    <Navigation />
                </div>

                <div className="mainPageContent moviemaster">
                    <div className="homepage-container flex flex-col justify-center p-10">
                        
                        <div className="nowPlaying p-2 gap-2 w-full h-[25rem] rounded-3xl border-[1px] border-gray-400/50 flex items-center flex-wrap">
                            <div className="movie-card w-full h-auto p-4">
                            { !movieContent ? (
                                <div className="loadingData">Loading..</div>
                            ) : (
                                <div className="container overflow-y-auto mt-[13.8rem]">
                                    <div className="loadedData flex items-center justify-center">
                                        <div className="movieBackgroundCard absolute -z-10 ">
                                            {
                                                <img 
                                                    className='w-full relative'
                                                    src={fetchMovieImage(movieContent?.backdrop_path)}  
                                                    alt={'movie image'} 
                                                />
                                            }
                                        </div>
                                        <div className="movieCardImage w-96 flex items-center justify-center">
                                            {
                                                <img 
                                                    className='w-60 rounded-lg shadow-sm shadow-red-600'
                                                    src={fetchMovieImage(movieContent?.poster_path)}  
                                                    alt={'movie image'} 
                                                />
                                            }
                                        </div>
                                        <div className="movieCardContent min-h-[20rem] flex flex-col justify-around w-[75%]">
                                            <div className="movieCardTitle">
                                                <h1 className="text-4xl font-bold">{movieContent?.title}</h1>
                                            </div>
                                            <div className="movieCardDescription flex break-words">
                                                <p className="text-gray-300 text-lg">{movieContent?.overview}</p>
                                            </div>
                                            <div className="movieCardReleaseDate">
                                                <p className='text-gray-300 text-lg'>{movieContent?.release_date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}