import { lazy, Suspense, useEffect, useState } from 'react';
import { Navigation } from '../../../components/Navigation/Navigation';
import axios from 'axios';


import '../../global.style.css';
// import './homepage.style.css';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NjA3OGU0ZTdjZGQ3OGQxYTljYmU2MzQ5OGYwMzE5YiIsInN1YiI6IjY0NjdkMzIwYTRhZjhmMDExZDFlYTU1YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.py-aSMgZzEttBthynUsWIihBSz7ray0cDh9GCEDulAI"
    }
};



export const HomePage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
    //   const pastData = localStorage.getItem('moviesData');
    
    //   if (pastData) {
    //     setData(JSON.parse(pastData));
    //   }
    
    async function fetchData() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular', options);
            const responseData = response?.data?.results; // Use optional chaining to check for 'data' and 'results'
            if (!responseData) {
                throw new Error('Invalid response data');
            }
            setData(responseData);
            localStorage.setItem('moviesData', JSON.stringify(responseData));
            console.log(data[0]?.title);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    
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
                        
                        <div className="nowPlaying w-full h-[25rem] rounded-3xl border-[1px] border-gray-400/50">
                            <Suspense fallback={
                                <div className='onLoadingData'>
                                    <h2>Loading data...</h2>
                                </div>
                            }>

                            </Suspense>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}