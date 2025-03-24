import { useState } from "react";
import { Link } from "react-router-dom";

export const TopEvents = ({ events }) => {
  const oddEvents = events.filter((_, index) => index % 2 !== 0); // Get only odd-indexed events
  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  return (
    <div className="container mx-auto px-4 mt-8">
      <h2 className="text-2xl font-bold mb-6 text-white text-center">Top Events</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {oddEvents.slice(0, visibleCount).map((event) => (
          <div
            key={event.id}
            className="bg-gray-900 rounded-lg overflow-hidden flex items-center p-4"
          >
            {/* Event Image */}
            <img
              src={event.urlImageFull}
              alt={event.nameParty}
              className="w-40 h-32 object-cover rounded-lg"
            />

            {/* Event Details */}
            <div className="ml-4 text-white">
              <h3 className="text-lg font-bold">{event.nameParty}</h3>
              <p className="text-sm text-gray-300">{event.nameType}</p>
              <p className="text-sm">
                {event.nameCountry}, {event.nameTown}
              </p>
              <p className="text-xs text-gray-400">
                {new Date(event.dateStart).toLocaleString()} -{" "}
                {new Date(event.dateEnd).toLocaleString()}
              </p>

              <Link to={`/parties/${event.id}`}>
                <button className="mt-2 px-4 py-2 bg-purple-700 text-white rounded-lg hover:bg-opacity-80 transition cursor-pointer">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleCount < oddEvents.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-opacity-80 transition cursor-pointer"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};
