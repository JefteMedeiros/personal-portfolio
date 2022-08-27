import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.25rem;
  
  padding: 6.25rem;

  @media screen and (max-width: 1366px) {
    padding: 3.25rem;
  }

  @media screen and (max-width: 600px) {
    padding: 2.1875rem;
  }
`;

export const SelectedWorkContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, 26.5rem);
  gap: 1.5rem;
  width: 100%;

  @media screen and (max-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
