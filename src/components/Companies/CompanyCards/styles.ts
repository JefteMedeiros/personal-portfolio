import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 0.5rem;

  background-color: ${(props) => props.theme["white"]};

  img {
    object-fit: contain;
  }
`;
