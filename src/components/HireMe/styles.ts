import styled from "styled-components";
import { Button, PinkTitle, SectionTitle } from "../../styles/Global/styles";

export const Container = styled.section`
  position: relative;
  
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  background-image: url("images/backgrounds/Shapes.webp");
  background-repeat: no-repeat;
  background-position: center;

  margin: auto;

  margin-top: 4.25rem;
  padding: 4rem 6.25rem;

  text-align: center;

  @media screen and (max-width: 1366px) {
    margin: 0 3.25rem;
  }

  @media screen and (max-width: 1280px) {
    background-image: none;
    

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      
      width: 100%;
      opacity: 0.1;
      border-radius: 6px;
      background-color: ${(props) => props.theme["purple"]};
    }
  }

  @media screen and (max-width: 600px) {
    align-items: flex-start;
    margin: 0;
    padding: 2.1875rem;
    margin: 3.25rem 0;

    &::after {
      display: none;
    }
  }
`;

export const HireMeTitle = styled(SectionTitle)`
  font-weight: 400;
  font-size: 2rem;
  line-height: 150%;

  @media screen and (max-width: 800px) {
    text-align: left;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    text-align: left;
    font-size: 1.125rem;
  }
`;

export const Together = styled(PinkTitle)`
  font-weight: 400;
  font-size: 2rem;
  line-height: 150%;

  @media screen and (max-width: 800px) {
    text-align: left;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 480px) {
    text-align: left;
    font-size: 1.125rem;
  }
`;

export const HireMeButton = styled(Button)`
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
