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
        <Image layout="fill" src="/images/backgrounds/Setup.jpg" />
      </ImageContainer>
      <AboutContainer>
        <DetailedAboutTitle>
          A dedicated Web Developer who is passionate about what it does.
        </DetailedAboutTitle>
        <DetailedAboutDescription>
         I have been studying web development for about a year. Since my first
         plain html website, i've figured out that this is what i love to do. I love
         learning new stuff and helping others to grow. Without a doubt, this is my area :)
        </DetailedAboutDescription>
        <ExperienceContainer>
          <div>
            <PinkTitle>1+</PinkTitle>
            <ExperienceDescription>Years of experience</ExperienceDescription>
          </div>
          <div>
            <PinkTitle>15+</PinkTitle>
            <ExperienceDescription>Completed projects</ExperienceDescription>
          </div>
        </ExperienceContainer>
        <SayHiButton>
          <a href="#">
            SAY HI <span>--&gt;</span>
          </a>
        </SayHiButton>
      </AboutContainer>
    </Container>
  );
}
