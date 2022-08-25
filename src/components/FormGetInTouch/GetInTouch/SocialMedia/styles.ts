import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  margin-top: 1.5625rem;
  gap: 0.75rem;
`;

export const SocialMediaCircle = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${(props) => props.theme["gray-100"]};
  border-radius: 9999px;
  padding: 1.25rem;
  transition: all 200ms;

  svg {
    color: ${(props) => props.theme["black"]};
  }

  &:hover {
    background: ${(props) => props.theme["purple"]};
    cursor: pointer;

    svg {
      color: ${(props) => props.theme["white"]};
    }
  }

  &:focus {
    border: 1px solid ${(props) => props.theme["pink"]};
  }
`;
