import { Button, PinkTitle } from "../../styles/Global/styles";
import { Container, HireMeContainer, HireMeTitle, Together } from "./styles";

export function HireMe() {
  return (
    <Container>
      <HireMeTitle>
        Got someting in mind? Let's make <br /> something awesome{" "}
        <Together>together.</Together>
      </HireMeTitle>
      <Button>HIRE ME</Button>
    </Container>
  );
}
