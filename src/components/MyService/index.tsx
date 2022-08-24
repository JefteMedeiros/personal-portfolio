import { SectionTitleUnderline } from "../../styles/Global/styles";

import { UIUIXDesign } from "./UIUXDesign";
import { ProductDesign } from "./ProductDesign";
import { BrandingDesign } from "./BrandingDesign";
import { FrontEndDevelopment } from "./FrontEndDevelopment";

import {
  CardsContainer,
  Container,
} from "./styles";


export function MyService() {
  return (
    <Container>
      <SectionTitleUnderline>My Sevice</SectionTitleUnderline>
      <CardsContainer>
        <UIUIXDesign />
        <ProductDesign />
        <BrandingDesign />
        <FrontEndDevelopment />
      </CardsContainer>
    </Container>
  );
}
