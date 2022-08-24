import Image from "next/image";
import { PinkTitle } from "../../styles/Global/styles";
import {
  AboutContainer,
  Container,
  DetailedAboutDescription,
  DetailedAboutTitle,
  ExperienceContainer,
  ExperienceDescription,
  ImageContainer,
  SayHiButton,
} from "./styles";

export function DetailedAbout() {
  return (
    <Container>
      <ImageContainer>
        <Image layout="fill" src="/Me.jpg" />
      </ImageContainer>
      <AboutContainer>
        <DetailedAboutTitle>
          A dedicated Web Developer who is passionate about what it does.
        </DetailedAboutTitle>
        <DetailedAboutDescription>
          Morbi quam velit, euismod in imperdiet vitae, elementum et elit. Nunc
          finibus, felis sit amet sollicitudin sollicitudin, nisi magna feugiat
          enim, in maximus urna enim ac tortor. Nunc in volutpat ipsum, molestie
          commodo odio. Quisque auctor nisi mi. Aenean venenatis sapien et
          interdum interdum.
        </DetailedAboutDescription>
        <ExperienceContainer>
          <div>
            <PinkTitle>17+</PinkTitle>
            <ExperienceDescription>Years of experience</ExperienceDescription>
          </div>
          <div>
            <PinkTitle>325+</PinkTitle>
            <ExperienceDescription>Completed projects</ExperienceDescription>
          </div>
        </ExperienceContainer>
        <SayHiButton>
          <a href="#">
            Say hi <span>--&gt;</span>
          </a>
        </SayHiButton>
      </AboutContainer>
    </Container>
  );
}
