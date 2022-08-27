import styled from "styled-components";
import { CardBox, CardTitle, HoverButton } from "../../../styles/Global/styles";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectedWorkCard = styled(CardBox)`
  background-color: ${(props) => props.theme["white"]};
  padding: 1.5rem;
  width: 100%;

  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;

export const SelectedWorkTitle = styled(CardTitle)`
  margin-bottom: 0.625rem;
  font-size: 1.5rem;
  line-height: 150%;

  &::after {
    display: none;
  }
`;

export const WorkImage = styled.div`
  position: relative;
  
  width: 100%;
  height: 15.625rem;

  background-color: ${(props) => props.theme["white"]};
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;

  img {
    position: absolute;
    object-fit: cover;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
`;

export const ViewProject = styled(HoverButton)`
  font-size: 18px;
  line-height: 1.25rem;

  svg {
    font-size: 1.5rem;
    right: 83%;
    margin-left: 0.625rem;
    line-height: 1.25rem;
    color: ${(props) => props.theme["pink"]};
  }
`;
