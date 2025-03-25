import { Link } from "react-router-dom";
import placeholderImage from "../assets/placeholder.png";

export const CardComponent = ({
  title,
  organizer,
  image,
  dateStart,
  dateEnd,
  id,
  country,
  isAdmin = false,
  onDelete = () => {},
}) => {
  return (
    <div className="bg-gray-900 shadow-lg rounded-2xl overflow-hidden w-80 p-4 mx-auto mt-4 flex flex-col h-full">
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
        <div className={`mt-auto  w-full flex-col justify-between`}>
          <p className="text-xl text-lightGray mt-2 pt-2">{organizer}</p>
          <p className="text-xl text-lightGray mt-2 pt-2">{country}</p>
          <button
            className={`px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-opacity-80 transition cursor-pointer mt-2 ${
              isAdmin ? "w-2/5" : "w-full"
            }`}
          >
            <Link to={`/parties/${id}`}>Learn More</Link>
          </button>
          {isAdmin && (
            <button
              onClick={onDelete}
              className={`px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-opacity-80 transition cursor-pointer ${
                isAdmin ? "w-2/5" : "w-full"
              }`}
            >
              Delete event
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
