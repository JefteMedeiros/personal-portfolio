import { FormEventHandler } from 'react';
import { useFormContext } from 'react-hook-form';
import { Container, DoubleColumn, FormButton, FormContainer, FormInput, FormTextarea, FormTitle, GridContainer, SingleColumn } from './styles';

interface ContactFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export function Form(props: ContactFormProps) {
  const { register } = useFormContext();

  return (
    <Container>
      <FormTitle>Let me know here.</FormTitle>
      <FormContainer onSubmit={props.onSubmit}>
        <GridContainer>
          <DoubleColumn>
            <FormInput {...register('fullName')} placeholder="Full name" type="text" required />
            <FormInput {...register('email')} placeholder="Email address" type="email" required />
          </DoubleColumn>
          <SingleColumn>
            <FormInput {...register('subjects')} placeholder="Subjects" type="text" required />
          </SingleColumn>
          <SingleColumn>
            <FormTextarea {...register('message')} placeholder="Message" required />
          </SingleColumn>
        </GridContainer>
        <FormButton type="submit">
          SEND MESSAGE
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 2L11 13" stroke="#DFE3EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#DFE3EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </FormButton>
      </FormContainer>
    </Container>
  );
}
