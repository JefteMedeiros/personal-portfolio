import styled from "styled-components";
import { CardBox, CardTitle, HoverButton } from "../../../styles/Global/styles";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectedWorkCard = styled(CardBox)`
  background-color: ${props => props.theme["white"]};
  padding: 1.5rem;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;

export const SelectedWorkTitle = styled(CardTitle)`
  margin-bottom: 10px;
  font-size: 1.5rem;
  line-height: 150%;

  &::after {
    display: none;
  }
`;

export const WorkImage = styled.div`
  background-color: ${(props) => props.theme["white"]};
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  position: relative;
  width: 26.5rem;
  height: 20.75rem;

  img {
    position: absolute;
    object-fit: cover;
    border-top-right-radius: 6px;
    border-top-left-radius: 6px;
  }
`;

export const ViewProject = styled(HoverButton)`
  
`;