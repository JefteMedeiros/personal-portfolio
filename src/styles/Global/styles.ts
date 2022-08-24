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
    display: flex;
    flex-direction: column;

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

export const ServiceCard = styled.div`
  padding: 2rem;

  background-color: #dfe3eb;
  border-radius: 6px;
  width: 100%;
  transition: all 200ms;

  &:hover {
    background-color: ${(props) => props.theme["white"]};
  }
`;

export const ServiceCardIcon = styled.div`
  margin-bottom: 100px;

  svg {
    color: black;
  }
`;

export const ServiceCardRole = styled(SectionTitle)`
  position: relative;
  font-size: 2rem;
  color: ${(props) => props.theme["black"]};
  font-weight: 400;
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

export const DiscussNowButton = styled(Button)`
  display: flex;
  padding: 0;
  line-height: normal;
  background: transparent;

  &:hover {
    background: transparent;

    svg {
      color: ${(props) => props.theme["pink"]};
    }
  }
`;
