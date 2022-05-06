import { Fragment } from "react";

import "leaflet/dist/leaflet.css";
import "leaflet-area-select";
import { MapContainer, TileLayer } from "react-leaflet";

export function Map() {
  return (
    <Fragment>
      <MapContainer
        center={[53.483, -2.244]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100vh" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Fragment>
  );
}
