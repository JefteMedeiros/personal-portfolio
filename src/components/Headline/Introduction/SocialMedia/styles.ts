import styled from "styled-components";
import { Button } from "../../../../styles/Global/styles";

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

export const SocialMediaSquareIcon = styled(Button)`
  display: flex;
  padding: 0.625rem;
  background: ${(props) => props.theme["white"]};
  border-radius: 3px;
  transition: all 0.2s;

  svg {
    color: ${(props) => props.theme["black"]};
  }
`;
