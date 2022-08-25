import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding: 6.25rem 0;
  justify-content: center;
  gap: 1.5rem;
`;

export const WhiteBox = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  padding: 3rem;
  background: ${props => props.theme["white"]};
`;