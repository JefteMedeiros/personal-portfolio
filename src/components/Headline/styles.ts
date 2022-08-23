import styled from "styled-components";

export const HeadlineContainer = styled.div`
  position: relative;
`;

export const ImageContainer = styled.div`
  position: absolute;
  z-index: -1;
  right: 11.25rem;
  top: calc(100vh - (100vh - 6rem));
  width: 54.375rem;
  height: calc(100vh - 6rem);

  img {
    object-fit: cover;
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
`;
