export const Modal = ({ isOpen, onClose, party }) => {
    if (!isOpen || !party) return null;
  
    return (
      <div className="fixed inset-0 bg-#333 bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50">
        <div className="bg-gray-900 rounded-lg shadow-xl w-full max-w-2xl p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white font-bold text-xl hover:text-purple-700 cursor-pointer"
          >
            &times;
          </button>
  
          {/* Image */}
          <img
            src={party.urlImageFull}
            alt={party.nameParty}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
  
          {/* Details */}
          <h2 className="text-2xl font-bold mb-2 text-purple-600">{party.nameParty}</h2>
          <p className="text-sm text-gray-600 mb-1">
           <span className="text-purple-400"> Organized by: </span> <span className="font-semibold">{party.nameOrganizer}</span>
          </p>
          <p className="text-sm text-gray-600 mb-1"><span className="text-purple-400">Type: </span>{party.nameType}</p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="text-purple-400">Start: </span> {new Date(party.dateStart).toLocaleString()}
          </p>
          <p className="text-sm text-gray-600 mb-1">
            <span className="text-purple-400">End: </span> {new Date(party.dateEnd).toLocaleString()}
          </p>
          <p className="text-sm text-white-600 mb-1">
            <span className="text-purple-400">Location: </span> {party.nameTown}, {party.nameCountry}
          </p>
  
          {party.urlOrganizer && (
            <a
              href={party.urlOrganizer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-700 underline mt-4 inline-block"
            >
              Visit Organizer Website
            </a>
          )}
        </div>
      </div>
    );
  };
  