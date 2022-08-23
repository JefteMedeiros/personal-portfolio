import Image from "next/image";
import { About } from "./About";
import { Header } from "./Header";
import { HeadlineContainer, ImageContainer, PurpleRectangle } from "./styles";

export function Headline() {
  return (
    <HeadlineContainer>
      <ImageContainer>
        <Image src="/Me.jpg" layout="fill" />
      </ImageContainer>
      <Header />
      <About />
      <PurpleRectangle />
    </HeadlineContainer>
  );
}
