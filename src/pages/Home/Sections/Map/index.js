import { Fragment } from "react";
import PropTypes from "prop-types";

import "leaflet/dist/leaflet.css";
import "leaflet-area-select";
import { MapContainer, TileLayer } from "react-leaflet";

export function Map({ location }) {
  console.log(location, "**");
  return (
    <Fragment>
      <MapContainer
        center={location}
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

Map.defaultProps = {
  location: [53.483, -2.244],
};

Map.propTypes = {
  location: PropTypes.array.isRequired,
};
