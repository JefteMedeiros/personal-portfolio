import styled from "styled-components";
import { Button, SectionTitle } from "../../../styles/Global/styles";
import { WhiteBox } from "../styles";

export const Container = styled(WhiteBox)`
  max-width: 47.5rem;

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

  @media screen and (max-width: 1366px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export const SingleColumn = styled(GridContainer)`
  grid-template-columns: 1fr;
`;

export const FormInput = styled.input`
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 0.875rem 1.25rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme["gray-100"]};
  color: ${(props) => props.theme["black"]};
  outline: none;

  transition: all 200ms;

  &::placeholder {
    color: ${(props) => props.theme["gray-500"]};
  }

  &:focus {
    border-color: ${(props) => props.theme["pink"]};
  }

  @media screen and (max-width: 400px) {
    padding: 0.875rem 0.425rem;
  }
`;

export const FormTextarea = styled.textarea`
  font-size: 1rem;
  line-height: 1.5rem;

  resize: none;

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

  @media screen and (max-width: 400px) {
    padding: 0.875rem 0.425rem;
  }
`;

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  transition: all 0.2s;
  border: none;
  border-radius: 5px;
  line-height: 3.5rem;
  font-size: 1rem;
  padding: 0 2rem;

  margin-top: 2rem;

  color: ${(props) => props.theme["white"]};
  background-color: ${(props) => props.theme["purple"]};
  align-self: flex-start;

  &:hover {
    cursor: pointer;
    transform: scale(0.97);
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    font-size: 0.625rem;
  }
`;

export const FormContainer = styled.form``;
