import styled from "styled-components";

export const ImageContainer = styled.div`
  position: absolute;
  right: 10.4375rem;
  top: calc(100vh - (100vh - 6rem));
  
  z-index: -1;

  width: 54.375rem;
  height: calc(100vh - 6rem);

  img {
    object-fit: cover;
  }

  @media screen and (max-width: 1600px) {
    top: calc(100vh - (100vh - 6rem));

    width: 29.375rem;
    height: calc(100vh - 6rem);
  }

  @media screen and (max-width: 1180px) {
    right: 3.75rem;
    
    width: 32.75rem;
  }

  @media screen and (max-width: 960px) {
    display: none;
  }
`;