import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.25rem;

  padding: 6.25rem;
  margin-top: 7.875rem;

  @media screen and (max-width: 1600px) {
    padding: 3.25rem;
  }

  @media screen and (max-width: 1366px) {
    margin-top: 0;
  }
`;

export const TestimonialContainer = styled.div`
  position: relative;

  display: flex;
  gap: 2.75rem;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const UserRating = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  font-size: 1.125rem;
  line-height: 1.75rem;
  color: ${(props) => props.theme["black"]};

  svg {
    color: #ff8718;
  }
`;

export const UserComment = styled.h1`
  margin-top: 1.5rem;
  
  font-size: 2rem;
  font-weight: 400;
  color: ${(props) => props.theme["black"]};
  line-height: 160%;
`;

export const QuoteIcon = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`;
