import styled from "styled-components";
import { SectionTitle } from "../../../styles/Global/styles";
import { WhiteBox } from "../styles";

export const Container = styled(WhiteBox)`
  position: relative;
  max-width: 33.5rem;

  @media screen and (max-width: 1366px) {
    max-width: 100%;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    padding: 2rem;
  }

  @media screen and (max-width: 480px) {
    padding: 1.5rem;
  }

  &::after {
    content: "";
    position: absolute;
    top: -2.1875rem;
    right: -4.8125rem;

    max-width: 9.5rem;
    width: 100%;
    height: 4.25rem;

    background-image: url("images/backgrounds/PinkDots.pwebp");
    background-repeat: no-repeat;

    @media screen and (max-width: 1600px) {
      display: none;
    }
  }
`;

export const GetInTouchTitle = styled(SectionTitle)`
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.5rem;
  color: ${(props) => props.theme["black"]};
  margin-bottom: 1.5rem;
`;

export const PinkDots = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ContactOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5625rem;
`;
