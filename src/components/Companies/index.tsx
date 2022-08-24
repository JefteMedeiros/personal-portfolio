import { YoutubeLogo } from "phosphor-react";
import { ArrowIcon } from "../../styles/Global/ArrowIcon";
import {
  CompaniesNumber,
  CompaniesTitle,
  CompanyCard,
  CompanyContainer,
  Container,
} from "./styles";

export function Companies() {
  return (
    <Container>
      <CompaniesTitle>
        I worked with <CompaniesNumber>289+</CompaniesNumber> Companies all over
        the world;
      </CompaniesTitle>
      <CompanyContainer>
        <CompanyCard>
          <YoutubeLogo weight="fill" size={32} />
        </CompanyCard>
        <CompanyCard>
          <YoutubeLogo weight="fill" size={32} />
        </CompanyCard>
        <CompanyCard>
          <YoutubeLogo weight="fill" size={32} />
        </CompanyCard>
        <CompanyCard>
          <YoutubeLogo weight="fill" size={32} />
        </CompanyCard>
        <CompanyCard>
          <ArrowIcon />
        </CompanyCard>
      </CompanyContainer>
    </Container>
  );
}
