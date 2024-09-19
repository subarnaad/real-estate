import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.scss";
import "leaflet/dist/leaflet.css";
import Pin from "../pin/Pin";

function Map({ items }) {
  return (
    <MapContainer
      center={
        items.length === 1 ? [items[0].latitude, items[0].longitude] : [27, 85]
      }
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      {items.map((item) => (
        <Marker position={[item.latitude, item.longitude]}>
          <Popup>{item.title}</Popup>
        </Marker>
      ))}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item) => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
