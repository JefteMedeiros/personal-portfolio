import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  padding: 6.25rem 0;
  flex-direction: column;
  align-items: center;
  gap: 3.25rem;
`;

export const SelectedWorkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 26.5rem);
  gap: 1.5rem;
`;
