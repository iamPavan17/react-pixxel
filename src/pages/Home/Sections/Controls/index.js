/* react-google-autocomplete won't work in reactv18 */
// https://github.com/ErrorPro/react-google-autocomplete/issues/160
import { usePlacesWidget } from "react-google-autocomplete";

import { GOOGLE_API_KEY } from "constants";
import { Text, Button } from "components/UI";
import { Section, Input, Info, Details } from "./styles";

export function Controls() {
  const { ref } = usePlacesWidget({
    apiKey: GOOGLE_API_KEY,
    onPlaceSelected: (place) => {
      const {
        geometry: { location },
      } = place;
      console.log(location.lat(), location.lng());
    },
  });

  return (
    <Section>
      <Input ref={ref} placeholder="Search location" />

      <Info>
        <Text>To select the area on the map, Hold the control button.</Text>
      </Info>
      <Button>Get geo details</Button>
      <Details>
        <Text>Details section...</Text>
      </Details>
    </Section>
  );
}
