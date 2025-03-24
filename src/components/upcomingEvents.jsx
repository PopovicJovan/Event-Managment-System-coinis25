import { Link } from "react-router-dom";

export const UpcomingEvents = ({ parties }) => {
  const upcomingParties = parties
    .filter((party) => new Date(party.dateStart) > new Date())
    .sort((a, b) => new Date(a.dateStart) - new Date(b.dateStart))
    .slice(0, 3);

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {upcomingParties.map((party) => (
          <div key={party.id} className="bg-gray-900 rounded-lg overflow-hidden">
            <div className="h-48 overflow-hidden">
              <img src={party.urlImageMedium} alt={party.nameParty} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2">{party.nameParty}</h3>
              <p className="text-purple-400">{party.nameOrganizer} - {party.nameCountry}, {party.nameTown}</p>
              <p className="text-gray-400 mb-1.5">{new Date(party.dateStart).toLocaleDateString()}</p>
              <Link to={`/parties/${party.id}`}>
                <button className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-4 rounded-full transition duration-300 w-full cursor-pointer">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
