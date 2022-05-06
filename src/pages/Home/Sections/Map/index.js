import { Fragment, useRef, useEffect } from "react";
import PropTypes from "prop-types";

import "leaflet/dist/leaflet.css";
import "leaflet-area-select";
import { MapContainer, TileLayer } from "react-leaflet";

const ZOOM = 13;

export function Map({ location }) {
  const mapRef = useRef();

  // Updating the map on location change
  useEffect(() => {
    const { current } = mapRef;
    if (current)
      current.flyTo(location, ZOOM, {
        duration: 2,
      });
  }, [location]);

  return (
    <Fragment>
      <MapContainer
        center={location}
        zoom={ZOOM}
        scrollWheelZoom={false}
        style={{ height: "100vh" }}
        ref={mapRef}
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
