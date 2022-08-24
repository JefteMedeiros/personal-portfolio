import Image from "next/image";
import { ImageContainer } from "./styles";

export function ProfileImage() {
  return (
    <ImageContainer>
      <Image src="/Me.jpg" layout="fill" />
    </ImageContainer>
  );
}
