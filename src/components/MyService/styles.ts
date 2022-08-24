import styled from "styled-components";
import { Button, SectionTitle } from "../../styles/Global/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.125rem;
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 19.5rem);
  max-width: 82.5rem;

  gap: 1.5rem;
`;
