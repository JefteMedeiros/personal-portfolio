import Image from 'next/image';
import { ImageContainer } from './styles';

export function ProfileImage() {
  return (
    <ImageContainer>
      <Image priority src="/images/backgrounds/Me.webp" layout="fill" />
    </ImageContainer>
  );
}
