import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { Navigation } from "../../Components/Navigation/Navigation";
import { Footer } from "../../Components/Footer/Footer";

import { getNumbersFromString } from "../../utils/utils";
import {
  getActorDetails,
  getActorImages,
  getActorPoster,
} from "../../api/actor/actorData";
import { Loading } from "../Components/Loading";

export const ActorDetails = () => {
  const [actorData, setActorData] = useState([]);
  const [actorImages, setActorImages] = useState([]);
  const { query } = useParams();

  const getActorPhotos = async (actor_id) => {
    try {
      const actorImages = await getActorImages(actor_id);

      setActorImages(actorImages);
    } catch (error) {
      // Handle errors
      console.error("Error fetching actor images:", error);
    }
  };

  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const actor_id = getNumbersFromString(query);
        const actorResult = await getActorDetails(actor_id);

        setActorData(actorResult);
        getActorPhotos(actor_id);

        console.log(actorResult);
      } catch (error) {
        // Handle errors
        console.error("Error fetching actor details:", error);
      }
    };
    fetchActorDetails();
  }, [query]);

  const getActorPosterImage = (profile_path) => getActorPoster(profile_path);

  const getActorListOfImages = (file_path) => getActorImages(file_path);

  console.log(actorImages);
  return (
    <>
      <Navigation />

      {actorData.length ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="actorImages">
            <div className="actorProfileImage">
              <img
                src={getActorPosterImage(actorData.profile_path)}
                alt={actorData.name}
              />
            </div>

            {actorImages.length && (
              <div className="actorListOfImages">
                <ul>
                  {actorImages.map((image, index) => {
                    return (
                      <li key={index}>
                        <img
                          src={getActorListOfImages(image.file_path)}
                          alt={actorData.name}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};
