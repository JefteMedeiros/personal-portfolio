import { Button } from "../../../styles/Global/styles";
import {
  Container,
  DoubleColumn,
  FormButton,
  FormInput,
  FormTextarea,
  FormTitle,
  GridContainer,
  SingleColumn,
} from "./styles";

export function Form() {
  return (
    <Container>
      <FormTitle>Let me know here.</FormTitle>
      <GridContainer>
        <DoubleColumn>
          <FormInput placeholder="Full name" type="text" />
          <FormInput placeholder="Email address" type="text" />
        </DoubleColumn>
        <SingleColumn>
          <FormInput placeholder="Subjects" type="text" />
        </SingleColumn>
        <SingleColumn>
          <FormTextarea placeholder="Message" />
        </SingleColumn>
      </GridContainer>
      <FormButton>
        SEND MESSAGE
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 2L11 13"
            stroke="#DFE3EB"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 2L15 22L11 13L2 9L22 2Z"
            stroke="#DFE3EB"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </FormButton>
    </Container>
  );
}
