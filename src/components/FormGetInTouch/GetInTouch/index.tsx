import Image from "next/image";
import { contactOptions } from "../../../data/contact";
import { ContactOption } from "./ContactOption";
import { SocialMedia } from "./SocialMedia";
import { ContactOptionContainer, Container, PinkDots } from "./styles";
import { GetInTouchTitle } from "./styles";

export function GetInTouch() {
  return (
    <Container>
      <GetInTouchTitle>
        Get in Touch
      </GetInTouchTitle>
      <ContactOptionContainer>
        {contactOptions.map((contactOption, key) => {
          return (
            <ContactOption key={key} icon={contactOption.icon} info={contactOption.info} />
          )
        })}
      </ContactOptionContainer>
      <SocialMedia />
    </Container>
  )
}