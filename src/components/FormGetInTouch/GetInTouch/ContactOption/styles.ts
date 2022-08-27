import styled from "styled-components";
import { SectionDescription } from "../../../../styles/Global/styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const ContactIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 5rem;
  height: 5rem;
  padding: 1.375rem;

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

  @media screen and (max-width: 1600px) {
    width: 4rem;
    height: 4rem;
  }
`;

export const ContactInfo = styled(SectionDescription)`
  color: ${(props) => props.theme["black"]};
  font-size: 1.125rem;
  line-height: 1.75rem;
  
  max-width: 21.25rem;
  margin-top: 0;

  @media screen and (max-width: 600px) {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`;
