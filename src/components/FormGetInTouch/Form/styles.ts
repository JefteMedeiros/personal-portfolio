import styled from "styled-components";
import { Button, SectionTitle } from "../../../styles/Global/styles";
import { WhiteBox } from "../styles";

export const Container = styled(WhiteBox)`
  max-width: 47.5rem;
`;

export const FormTitle = styled(SectionTitle)`
  color: ${(props) => props.theme["black"]};
  line-height: 2.5rem;
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

export const GridContainer = styled.div`
  display: grid;
  row-gap: 1rem;
`;

export const DoubleColumn = styled(GridContainer)`
  grid-template-columns: repeat(2, 20.25rem);
  column-gap: 1rem;
`;

export const SingleColumn = styled(GridContainer)`
  grid-template-columns: 1fr;
`;

export const FormInput = styled.input`
  font-size: 1rem;
  line-height: 1.5rem;

  padding: 0.875rem 1.25rem;
  border: 1px solid ${(props) => props.theme["gray-100"]};
  border-radius: 4px;
  color: ${(props) => props.theme["black"]};
  outline: none;
  transition: all 200ms;

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  &:focus {
    border-color: ${(props) => props.theme["pink"]};
  }
`;

export const FormTextarea = styled.textarea`
  font-size: 1rem;
  line-height: 1.5rem;

  border-radius: 4px;
  padding: 0.875rem 1.25rem;
  border: 1px solid ${(props) => props.theme["gray-100"]};
  color: ${(props) => props.theme["black"]};
  min-height: 9.5rem;
  outline: none;

  transition: all 200ms;

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  &:focus {
    border-color: ${(props) => props.theme["pink"]};
  }
`;

export const FormButton = styled(Button)`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  margin-top: 2rem;

  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["purple"]};
  align-self: flex-start;

  &:hover {
    background-color: ${(props) => props.theme["pink"]};
  }
`;
