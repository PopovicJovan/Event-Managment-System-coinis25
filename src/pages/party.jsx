import { useParty } from "../hooks/use-party";
import placeholderImage from "../assets/placeholder.png";
import { PartyMap } from "../components/party-map";
export const Party = () => {
  const { party, loading, error } = useParty();

  if (loading) {
    return <h2 className="text-center text-xl text-purple-700">Loading...</h2>;
  }

  if (error) {
    return (
      <h2 className="text-center text-xl text-red-600">
        Error loading party details: {error.message}
      </h2>
    );
  }

  if (!party) {
    return (
      <h2 className="text-center text-xl text-purple-700">Party not found</h2>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-6 py-10 bg-gray-900 text-white rounded-xl shadow-xl mt-3">
      {/* Party Title and Image */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-primaryPurple bg-clip-text text-transparent mb-4">
          {party.nameParty}
        </h1>
        <img
          src={party.urlImageFull || placeholderImage}
          alt={party.nameParty}
          className="w-full h-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Party Details */}
      <div className="space-y-6 text-lg text-lightGray">
        <div className=" p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-purple-700">Organizer</h2>
          <p className="text-white">{party.nameOrganizer}</p>
        </div>

        <div className="p-6 rounded-xl shadow-lg flex flex-col md:flex-row justify-between items-center">
          <div className="space-y-3 text-white w-200">
            <h2 className="text-2xl font-semibold text-purple-700">
              Event Details
            </h2>
            <p>
              <span className="font-semibold">Start Date:</span>{" "}
              {new Date(party.dateStart).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">End Date:</span>{" "}
              {new Date(party.dateEnd).toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Location:</span> {party.nameTown},{" "}
              {party.nameCountry}
            </p>
            <p>
              <span className="font-semibold">Event Type:</span>{" "}
              {party.nameType}
            </p>
            <p>
              <span className="font-semibold">Entry Fee:</span>{" "}
              {party.textEntryFee || "To be announced"}
            </p>
          </div>
          <PartyMap
            latitude={party.geoLat}
            longitude={party.geoLon}
            name={party.nameParty}
            location={`${party.nameTown}, ${party.nameCountry}`}
          />
        </div>

        {/* Description */}
        <div className="bg-darkGray p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-semibold text-purple-700">
            About the Event:
          </h3>
          <p className="text-white">
            {party.textMore
              ? party.textMore
              : "There is no text for this event"}
          </p>
        </div>

        {/* Links */}
        <div className="mt-8 space-y-3 text-center">
          <h3 className="text-2xl font-semibold text-white">More Info:</h3>
          <div className="space-y-4">
            <a
              href={party.urlOrganizer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold bg-primaryPurple text-white py-2 px-4 rounded-lg shadow-md transition duration-300 hover:scale-105 hover:bg-purple-600 transform hover:shadow-xl mx-2"
            >
              Facebook Event Page
            </a>
            <a
              href={party.urlParty}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold bg-primaryPurple text-white py-2 px-4 rounded-lg shadow-md transition duration-300 hover:scale-105 hover:bg-purple-600 transform hover:shadow-xl mx-2"
            >
              Goabase Party Page
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
