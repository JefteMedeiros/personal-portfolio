import { CompanyCards } from "./CompanyCards";
import { CompaniesNumber, CompaniesTitle, Container } from "./styles";

export function Companies() {
  return (
    <Container>
      <CompaniesTitle>
        I worked with <CompaniesNumber>289+</CompaniesNumber> Companies all over
        the world;
      </CompaniesTitle>
      <CompanyCards />
    </Container>
  );
}
