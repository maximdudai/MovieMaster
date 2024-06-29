import propTypes from "prop-types";

import { useNavigate } from "react-router-dom";


export const FilteActors = ({ actors, departments }) => {
  const getDepartmentName = departments?.map((department) => department?.value);
  const navigate = useNavigate();

  const actorLogo = (actor) =>
    actor !== null
      ? `https://image.tmdb.org/t/p/original/${actor}`
      : `https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/No_portrait_blanko.svg/2048px-No_portrait_blanko.svg.png`;

  const getActorsKnownForDepartment = (selectedDepartments = []) => {
    if (selectedDepartments.length === 0) return actors;

    const actorsList = actors?.filter((actor) =>
      selectedDepartments?.includes(actor?.known_for_department)
    );

    return actorsList;
  };

  const getActorInfo = (actorId) => {
    navigate(`/actor-data/${actorId}`);
  }

  return (
    <ul className="grid grid-rows-2 md:grid-rows-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-10">
      {getActorsKnownForDepartment(getDepartmentName)?.map((actor, index) => {
        return (
          <li
            key={index}
            className="movieActor cursor-pointer border-[1px] flex flex-col justify-between items-center text-center rounded text-xs"
            onClick={() => getActorInfo(actor.id)}
          >
            <div className="actorImage p-2">
              <img
                className="w-32 rounded"
                src={actorLogo(actor?.profile_path)}
                alt="Actor Image"
              />
            </div>
            <div className="actorDetails w-full text-left bg-white/10 py-5 flex flex-col md:flex-row justify-between md:items-center">
              <div className="actorData">
                <p className="actorName">
                  <span className="text-gray-400 px-2">Name</span>
                  {actor?.name}
                </p>
                {actor?.character && (
                  <p className="actorCharacter">
                    <span className="text-gray-400 px-2">Character</span>
                    {actor?.character}
                  </p>
                )}
              </div>
              
            </div>
          </li>
        );
      })}
    </ul>
  );
};

FilteActors.propTypes = {
  actors: propTypes.array,
  departments: propTypes.array,
};
