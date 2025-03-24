import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export const PartyMap = ({ latitude, longitude, name, location }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={10}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]}>
        <Popup>
          <strong>{name}</strong> <br />
          {location}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
