import { useState } from "react";
import { Link } from "react-router-dom";
import placeholderImage from "../assets/placeholder.png";

export const TopEvents = ({ events }) => {
  const oddEvents = events.filter((_, index) => index % 2 !== 0); // Get only odd-indexed events
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">
        Top Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {oddEvents.slice(0, visibleCount).map((event) => (
          <div

          key={event.id}
          className="top-card bg-gray-900 rounded-lg overflow-hidden flex flex-col xl:flex-row items-center xl:items-start p-4 h-full"
        >
          {/* Event Image */}
          <img
            src={event.urlImageFull}
            alt={event.nameParty}
            className="w-40 h-32 object-cover rounded-lg"
          />
        
          {/* Event Details */}
          <div className="mt-4 xl:mt-0 xl:ml-4 flex flex-col text-white text-center xl:text-left h-full w-full">
            <h3 className="text-lg font-bold mb-1">{event.nameParty}</h3>
            <p className="text-sm text-gray-300 mb-1">{event.nameType}</p>
            <p className="text-sm mb-1">
              {event.nameCountry}, {event.nameTown}
            </p>
            <p className="text-xs text-gray-400 mb-3">
              {new Date(event.dateStart).toLocaleString()} -{" "}
              {new Date(event.dateEnd).toLocaleString()}
            </p>
        
            <div className="ml-auto mt-auto">

              <Link to={`/parties/${event.id}`}>
                <button className="glow-button w-full px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-opacity-80 transition cursor-pointer">
                  Learn More
                </button>
              </Link>
              
            </div>
            
          </div>
          
        </div>
        
        ))}
      </div>

      {/* Load More Button */}
{visibleCount < oddEvents.length && (
  <div className="mt-6 flex flex-col items-center">
    <button
      onClick={handleLoadMore}
      className="mb-4 px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-opacity-80 transition cursor-pointer"
    >
      Load More
    </button>

    {/* Fog Preview Section */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pointer-events-none opacity-40 blur-sm">
      {oddEvents.slice(visibleCount, visibleCount + 3).map((event) => (
        <div
          key={`fog-${event.id}`}
          className="bg-gray-800 rounded-lg h-16 overflow-hidden flex flex-col xl:flex-row items-center xl:items-start p-4"
        >
          <img
            src={event.urlImageFull || placeholderImage}
            alt={event.nameParty}
            className="w-40 h-32 object-cover rounded-lg"
          />
          <div className="mt-4 xl:mt-0 xl:ml-4 text-white text-center xl:text-left">
            <h3 className="text-lg font-bold">{event.nameParty}</h3>
            <p className="text-sm text-gray-300">{event.nameType}</p>
            <p className="text-sm">
              {event.nameCountry}, {event.nameTown}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

      
    </div>
  );
};
