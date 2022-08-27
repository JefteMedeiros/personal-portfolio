import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  min-height: 100vh;

  @media screen and (max-width: 960px) {
    min-height: 39.875rem;
  }
`;

export const PurpleRectangle = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  z-index: -9999;
  margin-left: auto;
  
  min-height: 100vh;
  min-width: 45.25rem;

  opacity: 0.5;
  background-color: ${(props) => props.theme["purple"]};

  @media screen and (max-width: 1600px) {
    min-width: 32.75rem;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
