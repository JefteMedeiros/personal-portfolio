import styled from "styled-components";
import {
  Button,
  SectionDescription,
  SectionTitle,
} from "../../../styles/Global/styles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 65vh;

  margin-top: 14.875rem;
  margin-left: 18.75rem;
  line-height: 6.125rem;
`;

export const Intro = styled(SectionTitle)``;

export const Role = styled.h2`
  position: relative;
  font-size: 5rem;
  font-weight: 400;
  color: ${(props) => props.theme["purple"]};

  &::after {
    position: absolute;
    opacity: 0.2;
    content: "";
    width: 37.125rem;
    height: 2.25rem;
    bottom: 0;
    left: 0.9375rem;
    background-color: ${(props) => props.theme["purple"]};
  }
`;

export const Bio = styled(SectionDescription)`
  &:after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.5;
    z-index: -1;
    background: ${(props) => props.theme["black"]};
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
`;

export const HireMeButton = styled(Button)`
  letter-spacing: 0.02em;
  font-weight: 600;
`;

export const ViewWorkButton = styled(Button)`
  color: ${(props) => props.theme["black"]};
  letter-spacing: 0.02em;
  font-weight: 600;
`;
