import styled, { createGlobalStyle } from "styled-components";
import { visibilityOptions, VisibilityProps } from "../../@types/testimonial";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif
  }

  img {
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  body {
    display: flex;
    flex-direction: column;

    font-family: "Inter", sans-serif;
    background-color: ${(props) => props.theme["black"]};
    color: ${(props) => props.theme["white"]};
  }

  p {
    @media screen and (max-width: 1600px) {
      font-size: 0.75rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1rem;
  line-height: 3.5rem;
  letter-spacing: 2%;
  padding: 0 2rem;
  border-radius: 4px;

  position: relative;
  transition: all 200ms;
  outline: none;
  text-align: center;

  border: 1px solid transparent;

  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["white"]};

  a {
    color: ${(props) => props.theme["black"]};
  }

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme["white"]};
    background-color: ${(props) => props.theme["purple"]};

    a {
      color: ${(props) => props.theme["white"]};
    }
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all 300ms ease-out;
    will-change: transform;
  }

  &:hover span {
    transform: translate3d(1rem, 0, 0);
  }

  svg {
    opacity: 0;
    position: absolute;
    right: 0.5rem;
    transition: all 200ms ease-out;
    will-change: right, opacity;

    * {
      strokeWidth: 3;
      -webkit-text-stroke-color: transparent;
    }
  }

  &:hover svg {
    opacity: 1;
    right: -1.8rem;
  }

  &:focus {
    border: 1px solid ${props => props.theme["pink"]};
  }
`;

export const HoverButton = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  transition: all 0.2s;
  background-color: transparent;

  svg {
    position: relative;
    right: 79%;
    transition: all 0.2s;
  }

  span {
    position: relative;
    left: -0.625rem;
    transition: all 0.2s;
    opacity: 0;
  }

  &:hover {
    color: ${(props) => props.theme["pink"]};
    cursor: pointer;

    svg {
      right: 0;
      color: ${(props) => props.theme["pink"]};
    }

    span {
      left: 0;
      opacity: 1;
    }
  }
`;

export const SectionTitle = styled.h1`
  font-weight: 400;
  font-size: 5rem;
  color: ${(props) => props.theme["white"]};
`;

export const SectionTitleUnderline = styled(SectionTitle)`
  position: relative;
  text-align: center;
  font-size: 2.5rem;
  line-height: 3rem;

  &::after {
    position: absolute;
    bottom: -1rem;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    content: "";
    height: 0.1875rem;
    border-radius: 9999px;
    width: 5rem;
    background-color: ${(props) => props.theme["pink"]};
  }
`;

export const SectionDescription = styled.p`
  position: relative;
  font-size: 1.25rem;
  margin-top: 2rem;
  max-width: 42.0625rem;
  line-height: 2rem;
  color: ${(props) => props.theme["white"]};
`;

export const CardBox = styled.div`
  padding: 2rem;

  background-color: #dfe3eb;
  border-radius: 6px;
  width: 100%;
  transition: all 200ms;

  &:hover {
    background-color: ${(props) => props.theme["white"]};
  }
`;

export const CardTitle = styled(SectionTitle)`
  position: relative;
  font-size: 2rem;
  color: ${(props) => props.theme["black"]};
  line-height: 2.5rem;
  margin-bottom: 40px;

  &::after {
    position: absolute;
    bottom: -1rem;
    opacity: 0.5;
    left: 0;
    content: "";
    background-color: ${(props) => props.theme["pink"]};
    border-radius: 9999px;
    width: 4rem;
    height: 0.1875rem;
  }
`;

export const PinkTitle = styled.span`
  font-size: 3.5rem;
  line-height: 4rem;
  font-weight: 400;
  color: ${(props) => props.theme["pink"]};
`;

export const PurpleUnderlinedTitle = styled.span`
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

export const TestimonialContainer = styled.div<VisibilityProps>`
  position: absolute;
  right: 0;

  max-width: 60.25rem;
  width: 100%;
  height: 25.75rem;
  padding: 3.125rem;

  background-color: ${(props) => props.theme["white"]};
  border-radius: 0.1875rem;

  transition: all 200ms;
  
  ${(props) => {
    return `opacity: ${visibilityOptions[props.visibility]}`;
  }};

  &::after {
    content: "";
    position: absolute;
    top: 14.25rem;
    left: -1.25rem;
    z-index: 9999;

    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    border-right: 30px solid ${(props) => props.theme["white"]};
  }

  @media screen and (max-width: 1600px) {
    max-width: 60.25rem;
    overflow-y: scroll;
  }
`;
