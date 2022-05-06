import { Text } from "components/UI";
import { Section, Input, Info, Details } from "./styles";

export function Controls() {
  return (
    <Section>
      <Input placeholder="Search location" />
      <Info>
        <Text>To select the area on the map, Hold the control button.</Text>
      </Info>
      <button>Get geo details</button>
      <Details>
        <Text>Details section.</Text>
      </Details>
    </Section>
  );
}
