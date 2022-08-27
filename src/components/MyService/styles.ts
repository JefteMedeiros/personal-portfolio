import styled from "styled-components";
import { SectionTitleUnderline } from "../../styles/Global/styles";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.125rem;

  margin-top: 4.25rem;
  margin-bottom: 5rem;
  padding: 0 6.25rem;

  @media screen and (max-width: 1366px) {
    padding: 3.25rem;
    margin-top: 0;
  }

  @media screen and (max-width: 600px) {
    padding: 2.1875rem;
    margin-top: 0;
  }
`;

export const CardsContainer = styled.section`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(4, 19.5rem);
  
  max-width: 82.5rem;

  gap: 1.5rem;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1272px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const MyServiceTitle = styled(SectionTitleUnderline)``;
