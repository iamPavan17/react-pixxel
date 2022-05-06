import { Text, Button } from "components/UI";
import { Section, Input, Info, Details } from "./styles";

export function Controls() {
  return (
    <Section>
      <Input placeholder="Search location" />
      <Info>
        <Text>To select the area on the map, Hold the control button.</Text>
      </Info>
      <Button>Get geo details</Button>
      <Details>
        <Text>Details section.</Text>
      </Details>
    </Section>
  );
}
