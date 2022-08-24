import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4.25rem;
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.25rem;
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 19.5rem);
  max-width: 82.5rem;

  gap: 1.5rem;
`;
