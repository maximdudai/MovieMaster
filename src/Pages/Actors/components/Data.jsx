import propTypes from "prop-types";

export const Data = ({ title, content }) => {
  console.log(content);
  return (
    content != null && (
      <div className="actor-details__data text-2xl">
        <h3 className="actor-details__data-title bg-black/30 p-2 rounded-md">{title}</h3>
        <p className="actor-details__data-content bg-white/30 p-2 rounded-md">{content} Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel qui numquam modi repudiandae aspernatur, dicta explicabo consequuntur ratione quis excepturi.</p>
      </div>
    )
  );
};

Data.propTypes = {
  title: propTypes.string,
  content: propTypes.string,
};
