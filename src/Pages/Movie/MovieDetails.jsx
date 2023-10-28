import { useEffect, useState } from "react"
import { Navigation } from "../../Components/Navigation/Navigation"
import { searchMovieById } from "../../api/searchMovieById"
import { getMovieImages } from "../../api/getMovieImages"

import { GrGallery } from "react-icons/gr";
import { AiOutlineLoading3Quarters } from "react-icons/ai"

export const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [movieData, setMovieData] = useState([])
  const [movieImages, setMovieImages] = useState([])

  useEffect(() => {
    const fetchMovieFullDetails = async () => {
    
      const movieData = await searchMovieById(615656);
      const movieImages = await getMovieImages(615656);

      setMovieData(movieData);
      setMovieImages(movieImages);

      console.log(movieImages);

      setIsLoading(false);
    }
    
    fetchMovieFullDetails();

  }, [])

  return (
    <>
      <Navigation />

      <main>
      {
        isLoading ? (
          <div className="loadingMovieData flex items-center justify-center bg-white/5 p-5 m-2 rounded">
            <span className="px-2">Loading</span>
            <span className="animate-spin px-2"><AiOutlineLoading3Quarters /> </span>
          </div>
        ) : (
          <div className="movieFullDetails p-2">
            <div className="movieTitle bg-white/5 p-2 rounded">
              <p className="my-2 text-lg">{movieData?.title}</p>
            </div>
            <div className="movieDataCard my-5">
              <div className="movieBackdropImage">
                <img src={`https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}`} alt="" />
              </div>
              <div className="moviePosterImageGallery">
                <p className="text-xs p-2 my-5 uppercase border-l border-red-500 text-gray-400">
                  <span>Gallery</span>
                  <span className="float-right border-[1px] border-red-500 p-2 rounded"><GrGallery className="bg-white"/></span>
                </p>
                <img className="w-32 rounded shadow-black shadow-md" src={`https://image.tmdb.org/t/p/original/${movieData?.poster_path}`} alt="" />
              </div>
            </div>
          </div>
        )
      }
      </main>
    </>
  )
}