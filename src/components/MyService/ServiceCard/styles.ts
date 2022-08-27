import styled from "styled-components";
import { CardBox, CardTitle, HoverButton } from "../../../styles/Global/styles";

export const Container = styled(CardBox)`
  background-color: #f2f4f7;
`;

export const ServiceCardIcon = styled.div`
  position: relative;
  margin-bottom: 6.25rem;

  @media screen and (max-width: 1600px) {
    margin-bottom: 3.125rem;
  }
`;

export const ServiceCardTitle = styled(CardTitle)`
  word-spacing: 9999px;

  @media screen and (max-width: 1600px) {
    font-size: 1.5rem;
  }
`;

export const DiscussNow = styled(HoverButton)`
  svg {
    font-size: 1.5rem;
    color: ${(props) => props.theme["black"]};
  }
`;
