import { Link } from "react-router-dom";

export const NewsFeed = ({ parties }) => {
  const latestParties = [...parties].sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)).slice(0, 5);

  return (
    <div className="w-full lg:w-1/4">
      <h2 className="text-2xl font-bold mb-6">Latest Events</h2>
      {latestParties.length > 0 ? (
        <div className="space-y-4">
          {latestParties.map((party) => (
            <Link to={`/parties/${party.id}`} key={party.id}>
              <div className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer hover:bg-gray-800 transition duration-300">
                <div className="h-32 overflow-hidden">
                  <img src={party.urlImageSmall || party.urlImageMedium} alt={party.nameParty} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg truncate">{party.nameParty}</h3>
                  <p className="text-purple-400 text-sm">{party.nameOrganizer}</p>
                  <p className="text-gray-400 text-xs mt-2">{new Date(party.dateStart).toLocaleDateString()}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="bg-gray-900 rounded-lg p-8 text-center">No recent events available.</div>
      )}
    </div>
  );
};
