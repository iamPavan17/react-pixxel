import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

export default function AreaSelect({ handleSelectedAreaLocation }) {
  const map = useMap();

  useEffect(() => {
    if (!map.selectArea) return;

    map.selectArea.enable();

    map.on("areaselected", (e) => {
      // .bounds.toBBoxString() contains long, lat of northEast and southWest
      const bounds = e.bounds.toBBoxString().split(",");
      const selectedArea = {
        northEast: bounds.slice(0, 2),
        southWest: bounds.slice(2),
      };
      handleSelectedAreaLocation(selectedArea); // lon, lat, lon, lat
      L.rectangle(e.bounds, { color: "blue", weight: 1 }).addTo(map);
    });

    // You can restrict selection area like this:
    const bounds = map.getBounds().pad(-0.25); // save current map bounds as restriction area
    // // check restricted area on start and move
    map.selectArea.setValidate((layerPoint) => {
      return bounds.contains(this._map.layerPointToLatLng(layerPoint));
    });

    // now switch it off
    map.selectArea.setValidate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
