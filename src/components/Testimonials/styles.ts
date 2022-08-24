import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding: 6.25rem 0;
  flex-direction: column;
  align-items: center;
  gap: 4.25rem;
  margin-top: 7.875rem;
`;

export const TestimonialContainer = styled.div`
  display: flex;
  gap: 2.75rem;
`;

export const TestimonialBox = styled.div`
  position: relative;
  background-color: ${(props) => props.theme["white"]};
  height: 25.75rem;
  width: 60.25rem;
  padding: 3.125rem;
  border-radius: 0.1875rem;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => props.theme["white"]};
  border-radius: 0.25rem;
  padding: 1.5rem;
`;

export const UserPic = styled.div`
  border-radius: 624.9375rem;
  width: 3.25rem;
  background-color: ${(props) => props.theme["gray-500"]};
  height: 3.25rem;
`;

export const UserInfo = styled.div``;

export const UserName = styled.h1`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75rem;
  color: ${(props) => props.theme["black"]};
`;

export const UserRole = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme["gray-500"]};
`;

export const UserCompany = styled.span`
  color: ${(props) => props.theme["pink"]};
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
  color: ${props => props.theme["black"]};
  font-weight: 400;
  font-size: 2rem;
  line-height: 160%;
`;

export const QuoteIcon = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
`;
