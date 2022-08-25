import Image from "next/image";
import { PinkTitle } from "../../styles/Global/styles";
import { Container, FooterImage, FooterText, PinkHeart, PurpleLogo } from "./styles";

export function Footer() {
  return (
    <Container>
      <FooterImage>
        <Image src="/images/logo/Logo.png" layout="fill" />
      </FooterImage>
      <FooterText>
        Made with <PinkHeart>&#10084;</PinkHeart> by Jeff and <PurpleLogo>Hypesoft</PurpleLogo>
      </FooterText>
    </Container>
  );
}
