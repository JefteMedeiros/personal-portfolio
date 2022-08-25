import Image from "next/image";
import { ContactProps } from "../../../../@types/props";
import { ContactInfo, Container } from "./styles";
import { ContactIcon } from "./styles";

export function ContactOption(props: ContactProps) {
  return (
    <Container>
      <ContactIcon>
        <Image src={props.icon} layout="fixed" width={32} height={32} />
      </ContactIcon>
      <ContactInfo>{props.info}</ContactInfo>
    </Container>
  );
}
