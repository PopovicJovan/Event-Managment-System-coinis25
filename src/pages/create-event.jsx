export const CreateEventPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 py-10 bg-gray-900 text-white rounded-xl shadow-xl mt-3">
      <h1 className="text-3xl sm:text-4xl font-bold text-primaryPurple text-center mb-8">
        Create Event
      </h1>
      <form className="space-y-6 text-lg text-lightGray">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="nameParty"
            placeholder="Party Name"
            className="p-3 rounded-lg w-full bg-gray-800 text-white"
            required
          />
          <input
            type="url"
            name="urlImageFull"
            placeholder="Image URL"
            className="p-3 rounded-lg w-full bg-gray-800 text-white"
            required
          />
          <input
            type="text"
            name="nameOrganizer"
            placeholder="Organizer Name"
            className="p-3 rounded-lg w-full bg-gray-800 text-white"
            required
          />
          <input
            type="datetime-local"
            name="dateStart"
            className="p-3 rounded-lg w-full bg-gray-800 text-white"
            required
          />
          <input
            type="datetime-local"
            name="dateEnd"
            className="p-3 rounded-lg w-full bg-gray-800 text-white"
            required
          />
          <input
            type="text"
            name="nameTown"
            placeholder="Town"
            className="p-3 rounded-lg w-full bg-gray-800 text-white"
            required
          />
          <input
            type="text"
            name="nameCountry"
            placeholder="Country"
            className="p-3 rounded-lg w-full bg-gray-800 text-white"
            required
          />
          <input
            type="text"
            name="nameType"
            placeholder="Event Type"
            className="p-3 rounded-lg w-full bg-gray-800 text-white"
            required
          />
          <input
            type="text"
            name="textEntryFee"
            placeholder="Entry Fee"
            className="p-3 rounded-lg w-full bg-gray-800 text-white"
          />
        </div>
        <textarea
          name="textMore"
          placeholder="Event Description"
          className="p-3 rounded-lg w-full bg-gray-800 text-white"
          rows="4"
        ></textarea>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="url"
            name="urlOrganizer"
            placeholder="Organizer URL"
            className="p-3 rounded-lg w-full bg-gray-800 text-white"
          />
          <input
            type="url"
            name="urlParty"
            placeholder="Event Page URL"
            className="p-3 rounded-lg w-full bg-gray-800 text-white"
          />
        </div>
        <button
          type="submit"
          className="text-lg font-semibold bg-primaryPurple text-white py-2 px-4 rounded-lg shadow-md transition duration-300 hover:scale-105 hover:bg-purple-600 transform hover:shadow-xl w-full"
        >
          Create Event
        </button>
      </form>
    </div>
  );
};
