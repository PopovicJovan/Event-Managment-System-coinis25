export const EventInput = ({ type, name, placeholder, required = false }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="p-3 rounded-lg w-full bg-gray-800 text-white"
      required={required}
    />
  );
};
