import { Link } from "react-router-dom";
import placeholderImage from "../assets/placeholder.png";

export const CardComponent = ({
  title,
  organizer,
  image,
  dateStart,
  dateEnd,
  id,
}) => {
  return (
    <div className="bg-darkGray shadow-lg rounded-2xl overflow-hidden w-80 p-4 mx-auto mt-4 flex flex-col h-full">
      <img
        src={image ? image : placeholderImage}
        alt={title}
        className="w-full h-48 object-cover rounded-xl"
        onError={(e) => (e.target.src = placeholderImage)}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <h4 className="font-semibold text-white">
          Start Date: {new Date(dateStart).toLocaleString()}
        </h4>
        <h4 className="font-semibold text-white">
          End Date: {new Date(dateEnd).toLocaleString()}
        </h4>
        <p className="text-xl text-lightGray mt-2">{organizer}</p>
        <div className="mt-auto">
          <Link to={`/parties/${id}`}>
            <button className="w-full px-4 py-2 bg-primaryPurple text-white rounded-lg hover:bg-opacity-80 transition cursor-pointer">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
