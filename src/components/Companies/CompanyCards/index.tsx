import Image from "next/image";
import { companies } from "../../../data/companies";
import { ArrowIcon } from "../../../styles/Global/ArrowIcon";
import { HoverButton } from "../../../styles/Global/styles";
import { CompaniesContainer } from "../styles";
import { Container } from "./styles";

export function CompanyCards() {
  return (
    <CompaniesContainer>
      {companies.map((company, key) => {
        return (
          <Container key={key}>
            <Image src={company.logo} layout="fixed" width={60} height={60} />
          </Container>
        );
      })}
      <Container>
        <HoverButton>
          <ArrowIcon />
        </HoverButton>
      </Container>
    </CompaniesContainer>
  );
}
