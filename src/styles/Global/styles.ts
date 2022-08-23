import styled, { createGlobalStyle } from "styled-components";

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
    font-family: "Inter", sans-serif;
    background-color: ${(props) => props.theme["black"]};
    color: ${(props) => props.theme["white"]};
  }
`;

export const Button = styled.button`
  line-height: 3.5rem;
  padding: 0 1.875rem;
  font-size: 1rem;
  border: 2px solid transparent;
  border-radius: 5px;
  outline: none;
  transition: all 0.2s;

  a {
    outline: none;
    color: ${(props) => props.theme["black"]};
  }

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme["purple"]};

    svg {
      color: ${(props) => props.theme["white"]};
    }

    a {
      color: ${(props) => props.theme["white"]};
    }
  }

  &:focus {
    border: 2px solid ${(props) => props.theme["pink"]};
  }
`;

export const SectionTitle = styled.h1`
  font-weight: 400;
  font-size: 5rem;
  color: ${(props) => props.theme["white"]};
`;

export const SectionDescription = styled.p`
  position: relative;
  font-size: 1.25rem;
  margin-top: 2rem;
  max-width: 42.0625rem;
  line-height: 2rem;
  color: ${(props) => props.theme["white"]};
`;
