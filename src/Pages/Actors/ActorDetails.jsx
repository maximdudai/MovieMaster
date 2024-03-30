import { useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

import { Navigation } from "../../Components/Navigation/Navigation";
import { Footer } from "../../Components/Footer/Footer";

import { getNumbersFromString } from "../../utils/utils";
import {
  getActorDetails,
  getActorImages,
  getActorPoster,
} from "../../api/actor/actorData";
import { Loading } from "../Components/Loading";
import { Data } from "./components/Data";

export const ActorDetails = () => {
  const [actorData, setActorData] = useState([]);
  const [actorDataImages, setActorDataImages] = useState({
    profiles: [],
    currentPoster: 0
  });


  const { query } = useParams();

  const getActorPosterImage = (profile_path) => getActorPoster(profile_path);


  const getActorPhotos = useCallback(async (actor_id) => {
    try {
      const actorImages = await getActorImages(actor_id);
  
      setActorDataImages({
        profiles: actorImages,
        currentPoster: 0
      });
  
    } catch (error) {
      // Handle errors
      console.error("Error fetching actor images:", error);
    }
  }, []);

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const actor_id = getNumbersFromString(query);
        const actorResult = await getActorDetails(actor_id);
  
        setActorData(actorResult);
        getActorPhotos(actor_id);
  
      } catch (error) {
        // Handle errors
        console.error("Error fetching actor details:", error);
      }
    };
    fetchActorDetails();
  }, [getActorPhotos, query]);

  const changePosterImage = (image) => {
    setActorDataImages({
      ...actorDataImages,
      currentPoster: image
    });

    document.querySelector(".actorProfileImage img").src =
    getActorPosterImage(actorDataImages.profiles[image].file_path);
  };

  console.log(actorData);

  return (
    <>
      <Navigation />

      {actorData.length ? (
        <Loading />
      ) : (
        <div className="flex justify-center my-5">
          <div className="container flex flex-col items-center justify-center">
            <div className="actorTitle bg-black/30 p-3 w-full md:rounded-t-md border-b-[2px] border-red-500 shadow-lg mb-3">
              <h1 className="text-4xl font-bold">{actorData.name}</h1>
            </div>

            <div className="actorInformations flex justify-between flex-col lg:flex-row">
              <div className="actorImages flex flex-col md:flex-row-reverse">
                
                <div className="actorProfileImage">
                  <img
                    className="w-full rounded-lg shadow-lg"
                    src={getActorPosterImage(actorData.profile_path)}
                    alt={actorData.name}
                  />
                </div>

                {actorDataImages.profiles?.length && (
                  <div className="actorListOfImages py-2 md:py-0 md:px-2">
                    <ul className="flex md:flex-col gap-2 w-max overflow-y-auto">
                      {actorDataImages.profiles?.map((image, index) => {
                        return (
                          <li key={index}>
                            <img
                              className={`w-36 rounded-lg shadow-lg cursor-pointer ${index === actorDataImages.currentPoster && "border-2 border-red-500"}`}
                              onClick={() => changePosterImage(index)}
                              src={getActorPosterImage(image.file_path)}
                              alt={actorData.name}
                            />
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </div>

              <div className="actorData lg:w-1/2 p-2">
                <Data title="Birthday" content={actorData.birthday} />
                <Data title="Place of Birth" content={actorData.place_of_birth} />
                <Data title="Known For" content={actorData.known_for_department} />
                <Data title="Biography" content={actorData.biography} />
                
                
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};
