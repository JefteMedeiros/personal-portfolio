import styled from "styled-components";
import { SectionDescription } from "../../../../styles/Global/styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

export const ContactIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 5rem;
  padding: 1.375rem;
  height: 5rem;

  border-radius: 9999px;

  outline: none;
  background-color: #f0edff;
  border: 1px solid none;

  transition: 200ms;

  &:hover {
    cursor: pointer;
    border: 1px solid ${(props) => props.theme["pink"]};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme["pink"]};
  }

  img {
    object-fit: contain;
  }
`;

export const ContactInfo = styled(SectionDescription)`
  color: ${(props) => props.theme["black"]};
  max-width: 21.25rem;
  margin-top: 0;
  font-size: 1.125rem;
  line-height: 1.75rem;
`;
