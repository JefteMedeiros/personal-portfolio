import Image from "next/image";
import { ImageContainer } from "./styles";

export function ProfileImage() {
  return (
    <ImageContainer>
      <Image src="/images/backgrounds/Me.jpg" layout="fill" />
    </ImageContainer>
  );
}
