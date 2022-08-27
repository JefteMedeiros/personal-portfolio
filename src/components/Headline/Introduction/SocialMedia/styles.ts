import styled from "styled-components";

export const SocialMediaContainer = styled.div`
  margin-bottom: 1rem;
`;

export const FollowMe = styled.h1`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 400;

  margin-bottom: 0.75rem;
`;

export const SocialMediaRow = styled.ul`
  display: flex;
  gap: 0.75rem;
`;

export const SocialMediaSquareIcon = styled.div`
  display: flex;

  padding: 0.6875rem;
  border: 1px solid transparent;
  border-radius: 3px;
  
  background: ${(props) => props.theme["white"]};
  transition: all 0.2s;

  svg {
    color: ${(props) => props.theme["black"]};
  }

  &:hover {
    background-color: ${(props) => props.theme["purple"]};

    svg {
      color: ${props => props.theme["white"]};
    }
  }

  &:focus {
    border: 1px solid ${(props) => props.theme["pink"]};
  }
`;
