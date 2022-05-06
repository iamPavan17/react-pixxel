import { useState } from "react";

import { Main } from "./styles";
import { Map, Controls } from "./Sections";

export default function Home() {
  const [location, setLocation] = useState([53.483, -2.244]);
  const [selectedAreaLocation, setSelectedAreaLocation] = useState({});

  const handleLocation = (lat, lng) => {
    setLocation([lat, lng]);
  };

  const handleSelectedAreaLocation = (data) => {
    setSelectedAreaLocation(data);
  };

  return (
    <Main>
      <Map
        location={location}
        handleSelectedAreaLocation={handleSelectedAreaLocation}
      />
      <Controls
        handleLocation={handleLocation}
        selectedAreaLocation={selectedAreaLocation}
      />
    </Main>
  );
}
