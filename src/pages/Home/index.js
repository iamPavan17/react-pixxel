import { useState } from "react";

import { Main } from "./styles";
import { Map, Controls } from "./Sections";

export default function Home() {
  const [location, setLocation] = useState([53.483, -2.244]);

  const handleLocation = (lat, lng) => {
    setLocation([lat, lng]);
  };

  return (
    <Main>
      <Map location={location} />
      <Controls handleLocation={handleLocation} />
    </Main>
  );
}
