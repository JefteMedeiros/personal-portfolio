import styled from "styled-components";
import { SectionTitleUnderline } from "../../styles/Global/styles";

export const Container = styled.section`
  margin-top: 4.25rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.125rem;
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 19.5rem);
  max-width: 82.5rem;

  gap: 1.5rem;
`;

export const MyServiceTitle = styled(SectionTitleUnderline)`

`;