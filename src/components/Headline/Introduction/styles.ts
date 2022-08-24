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

  @media screen and (max-width: 960px) {
    margin: 0;
    line-height: 3.5rem;
    padding: 1.875rem 2.1875rem;
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

    @media screen and (max-width: 960px) {
      max-width: 17rem;
    }
  }

  @media screen and (max-width: 960px) {
    font-size: 2.125rem;
  }

  @media screen and (max-width: 420px) {
    font-size: 1.875rem;
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

  @media screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`;

export const ViewWorkButton = styled(Button)`
  color: ${(props) => props.theme["black"]};
  letter-spacing: 0.02em;
  font-weight: 600;

  @media screen and (max-width: 420px) {
    font-size: 0.75rem;
  }
`;
