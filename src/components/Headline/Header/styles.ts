import styled from "styled-components";

export const HeaderNav = styled.ul`
  display: flex;
  justify-content: flex-end;
  padding: 1.75rem 0;
  gap: 2.5rem;

  margin-right: 18.75rem;

  li {
    transition: all 200ms;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export const HeaderLink = styled.a`
  position: relative;
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  font-weight: 600;
  padding: 0.625rem 0;
  line-height: 2.5rem;
  color: ${(props) => props.theme["white"]};
`;
