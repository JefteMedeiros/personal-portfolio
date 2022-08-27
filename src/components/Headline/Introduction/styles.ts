import styled from "styled-components";
import {
  Button,
  SectionDescription,
  SectionTitle,
} from "../../../styles/Global/styles";

export const IntroContainer = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.875rem;

  height: calc(100vh - 20.875rem);
  margin-top: 14.875rem;
  margin-left: 18.75rem;

  line-height: 6.125rem;

  @media screen and (max-width: 1600px) {
    margin-top: 6.25rem;
    margin-left: 6.25rem;
  }

  @media screen and (max-width: 1366px) {
    margin-top: 6.25rem;
    margin-left: 3.25rem;
  }

  @media screen and (max-width: 960px) {
    margin: 0;
    padding: 1.875rem 2.1875rem;

    line-height: 3.5rem;
  }
`;

export const Intro = styled(SectionTitle)`
  @media screen and (max-width: 960px) {
    font-size: 2.5rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.875rem;
  }
`;

export const Bio = styled(SectionDescription)`
  margin-top: 0.625rem;
  color :${props => props.theme["gray-500"]};

  &:after {
    content: "";
    position: absolute;
    inset: 0;

    opacity: 0.7;
    z-index: -1;

    background: ${(props) => props.theme["black"]};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const HireMeButton = styled(Button)`
  letter-spacing: 0.02em;
  font-weight: 600;

  @media screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`;

export const ViewWorkButton = styled(Button)`
  letter-spacing: 0.02em;
  font-weight: 600;

  a {
    font-weight: 600;
  }

  @media screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`;
