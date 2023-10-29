import propTypes from "prop-types";

export const FilteActors = ({ actors, departments }) => {

  const getDepartmentName = departments.map((department) => department.value);

  const actorLogo = (actor) =>
    actor !== null
      ? `https://image.tmdb.org/t/p/original/${actor}`
      : `https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png`;


  const getActorsKnownForDepartment = (selectedDepartments = []) => {
    if (selectedDepartments.length === 0) return actors;

    const actorsList = actors?.filter((actor) =>
      selectedDepartments?.includes(actor?.known_for_department)
    );

    return actorsList;
  };

  return (
    <ul className="grid grid-rows-2 md:grid-rows-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-10">
      {getActorsKnownForDepartment(getDepartmentName)?.map((actor, index) => {
        return (
          <li
            key={index}
            className="movieActor cursor-pointer border-[1px] flex flex-col justify-between items-center text-center rounded text-xs"
          >
            <div className="actorImage p-2">
              <img
                className="w-32 rounded"
                src={actorLogo(actor?.profile_path)}
                alt="Actor Image"
              />
            </div>
            <div className="actorDetails w-full bg-white/10 py-5">
              <p className="actorName">{actor?.name}</p>
              <p className="actorCharacter">{actor?.character}</p>
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
