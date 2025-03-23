export const CardComponent = ({
  title,
  organizer,
  image,
  dateStart,
  dateEnd,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden w-80">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <h4 lassName="font-semibold text-gray-800">
          Datum Pocetka:
          {new Date(dateStart).toLocaleString()}
        </h4>
        <h4 lassName="font-semibold text-gray-800">
          Datum Zavrsetka:
          {new Date(dateEnd).toLocaleString()}
        </h4>
        <p className="text-xl text-gray-600 mt-2">{organizer}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Learn More
        </button>
      </div>
    </div>
  );
};
