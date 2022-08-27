import { FormEventHandler } from "react";

export interface UserProps {
  name: string;
  role: string;
  company: string;
  pic: string
  clickedUser: number
}

export interface WorkCardProps {
  name: string;
  image: string;
}

export interface ServiceCardProps {
  icon: string;
  name: string;
}

export interface ContactProps {
  icon: string;
  info: string;
}

export interface FormDataProps {
  fullName: string;
  email: string;
  subjects: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit: FormEventHandler<HTMLFormElement>;
}
