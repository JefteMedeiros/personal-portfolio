import { Form } from './Form';
import { GetInTouch } from './GetInTouch';
import { FormProvider } from 'react-hook-form';
import { Container } from './styles';
import {useForm} from 'react-hook-form';
import { FormDataProps } from '../../@types/props';
import { useState } from 'react';

export function FormGetInTouch() {
  const [formData, setFormData] = useState<FormDataProps | null>();

  const messageForm = useForm<FormDataProps>({
    defaultValues: {
      fullName: '',
      email: '',
      subjects: '',
      message: '',
    },
  });

  const { handleSubmit, reset} = messageForm;

  const handleSetSubmit = (data: FormDataProps) => {
    setFormData(data);
    reset();
    alert('Message sent successfuly!');
  };

  return (
    <Container>
      <FormProvider {...messageForm}>
        <Form onSubmit={handleSubmit(handleSetSubmit)} />
      </FormProvider>
      <GetInTouch />
    </Container>
  );
}
