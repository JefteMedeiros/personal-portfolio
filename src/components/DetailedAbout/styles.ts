import styled from "styled-components";

import {
  Button,
  PinkTitle,
  SectionDescription,
  SectionTitle,
} from "../../styles/Global/styles";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: 3.5rem;

  margin-top: 10.8125rem;
  margin-bottom: 7.5625rem;
  padding: 0 6.25rem;

  @media screen and (max-width: 1600px) {
    justify-content: space-between;

    padding: 25vh 6.25rem;
    padding-bottom: 6.25rem;
    margin: 0;
  }

  @media screen and (max-width: 1366px) {
    padding: 25vh 3.25rem;
    padding-bottom: 6.25rem;
  }

  @media screen and (max-width: 1220px) {
    padding-bottom: 0;
  }

  @media screen and (max-width: 960px) {
    padding: 3.25rem;
    padding-bottom: 0;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;

    padding: 2rem 2.1875rem;
    margin-top: 2rem;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  bottom: 2rem;
  right: 2rem;
  width: 35rem;
  height: 33.875rem;

  transition: all 0.2s;

  img {
    object-fit: cover;
    border-radius: 0.625rem;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    top: 2rem;
    left: 2rem;

    width: 35rem;
    height: 33.875rem;

    background: ${(props) => props.theme["white"]};
    border-radius: 10px;
  }

  @media screen and (max-width: 1600px) {
    width: 22.5rem;
    height: 21.375rem;
    inset: 0;
    margin-bottom: 2rem;

    &::before {
      width: 22.5rem;
      height: 21.375rem;
    }
  }

  @media screen and (max-width: 1220px) {
    display: none;

    &::before {
      display: none;
    }
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  max-width: 42rem;
  flex-direction: column;
`;

export const DetailedAboutTitle = styled(SectionTitle)`
  font-size: 3rem;
  line-height: 3.5rem;

  @media screen and (max-width: 1600px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.375rem;
    line-height: 1.75rem;
  }
`;

export const DetailedAboutDescription = styled(SectionDescription)`
  margin-top: 1.25rem;
  color: ${(props) => props.theme["gray-500"]};
  font-size: 1.125rem;
  line-height: 1.75rem;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  gap: 3.125rem;
  
  max-width: 31.6875rem;
  margin-top: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ExperienceDescription = styled.span`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
`;

export const HighlightedText = styled(PinkTitle)`
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const SayHiButton = styled(Button)`
  align-self: flex-start;
  margin-top: 2rem;
  background-color: ${(props) => props.theme["purple"]};
  color: ${(props) => props.theme["white"]};

  &:hover {
    padding-right: 4rem;
  }

  svg {
    color: ${(props) => props.theme["white"]};
  }
`;
