import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding: 6.25rem;
  justify-content: center;
  gap: 1.5rem;

  @media screen and (max-width: 1366px) {
    padding: 3.25rem;
  }

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    padding: 2.1875rem;
  }
`;

export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  
  border-radius: 0.5rem;
  padding: 3rem;
  background: ${props => props.theme["white"]};
`;