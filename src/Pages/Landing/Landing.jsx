import { PopularMovie } from "./components/PopularMovie";
import { PopularMovieList } from "./components/PopularMovieList";
import { PopularPeople } from "./components/PopularPeople";

export const Landing = () => {


  return (
    <>
      <div className="container-fluid landingPage p-0">
        <PopularMovie />
        <PopularMovieList />
        <PopularPeople />
      </div>
    </>
  );
};

//  <section className="landingPageContainer p-2 py-5">
//         <div className="moviePopular py-2">
//           <p className="uppercase text-xs text-gray-400 px-2 border-l-[1px] border-red-500">
//             Popular Right Now!
//           </p>
//         </div>

//         <div className="randomMovieCard rounded-sm flex flex-col justify-center items-center lg:flex-row lg:justify-normal lg:items-start">
//           <div className="randomMovieCardBackground lg:w-1/2 md:relative">
//             <img src={randomMovieImage} alt="" />
//           </div>

//           <div className="randomMovieCardInfo w-full xl:w-1/2">
//             <div className="movieDataContainer flex flex-col gap-5 mx-1 p-2 bg-zinc-700/30 text-white border-[1px] border-red-500 rounded">
//               <div className="movieTitle">
//                 <p className="titleContainer text-gray-400 uppercase text-sm">
//                   Title
//                 </p>
//                 <p className="titleContent">{randomMovie?.title}</p>
//               </div>
//               <div className="movieLanguage">
//                 <p className="languageContainer text-gray-400 uppercase text-sm">
//                   Language
//                 </p>
//                 <p className="languageContent">
//                   {randomMovie?.original_language}
//                 </p>
//               </div>
//               <div className="movieOverview">
//                 <p className="overviewContainer text-gray-400 uppercase text-sm">
//                   Overview
//                 </p>
//                 <p onClick={handleFullOverview} className="overviewContent">
//                   {showFullReview
//                     ? randomMovie?.overview
//                     : `${randomMovie?.overview?.slice(0, 100)}...`}
//                   <button
//                     className="uppercase rounded text-[10px] mx-1 p-1 bg-white/20"
//                     onClick={handleFullOverview}
//                   >
//                     {showFullReview ? "Show less" : "Show more"}
//                   </button>
//                 </p>
//               </div>
//               <div className="movieStatus flex items-center justify-between">
//                 <div title="Release Date" className="movieReleaseDate">
//                   <CiCalendarDate className="releaseDateIcon border-[1px] border-gray-400/50 w-full rounded md:text-3xl" />
//                   <p className="releaseDateContent">
//                     {randomMovie?.release_date}
//                   </p>
//                 </div>
//                 <div
//                   title="review stars"
//                   className="movieReviewStars w-10 flex flex-col items-center"
//                 >
//                   <CiStar className="reviewStarIcon border-[1px] border-gray-400/50 w-full rounded md:text-3xl" />
//                   <p className="reviewStarsContent">
//                     {randomMovie?.vote_average?.toFixed(1)}
//                   </p>
//                 </div>
//                 <div
//                   title="popularity"
//                   className="moviePopularity flex flex-col items-center"
//                 >
//                   <MdOndemandVideo className="popularityIcon border-[1px] border-gray-400/50 w-full rounded md:text-3xl" />
//                   <p className="popularityContent">{randomMovie?.popularity}</p>
//                 </div>
//               </div>
//             </div>
//             <div className="movieMoreDetails w-full float-right">
//               <button
//                 onClick={handleMovieFullDetails}
//                 className="w-full flex justify-between items-center uppercase rounded text-md text-gray-300 p-2 mt-2 border-[1px] border-red-500 shadow-md shadow-black"
//               >
//                 <span>More Details</span>
//                 <span>
//                   <TbListDetails />
//                 </span>
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="otherMoviesRecomandation"></div>
//       </section>