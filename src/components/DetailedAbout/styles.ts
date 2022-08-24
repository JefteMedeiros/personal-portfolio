import styled from "styled-components";
import { Button, SectionDescription, SectionTitle } from "../../styles/Global/styles";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 6.25rem 0;
  gap: 3.5rem;
`;

export const ImageContainer = styled.div`
  position: relative;
  bottom: 2rem;
  right: 2rem;
  width: 35rem;
  height: 33.875rem;

  img {
    object-fit: cover;
    border-radius: 0.625rem;
  }

  &::before {
    position: absolute;
    content: "";
    border-radius: 10px;
    background: ${(props) => props.theme["white"]};
    width: 35rem;
    height: 33.875rem;
    inset: 0;
    top: 2rem;
    left: 2rem;
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
`;

export const DetailedAboutDescription = styled(SectionDescription)`
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
`;

export const ExperienceDescription = styled.span`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 400;
`;

export const SayHiButton = styled(Button)`
  margin-top: 2rem;
  align-self: flex-start;
  transition: all 200ms;

  span {
    visibility: hidden;
    display: none;
    padding-right: -26px;
  }

  &:hover {
    span {
      display: inline-block;
      visibility: visible;
    }
  }
`;
