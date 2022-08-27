import Image from 'next/image';
import { ArrowIcon } from '../../styles/Global/ArrowIcon';

import { PinkTitle } from '../../styles/Global/styles';

import {
  AboutContainer,
  Container,
  DetailedAboutDescription,
  DetailedAboutTitle,
  ExperienceContainer,
  ExperienceDescription,
  HighlightedText,
  ImageContainer,
  SayHiButton,
} from './styles';

export function DetailedAbout() {
  return (
    <Container>
      <ImageContainer>
        <Image priority layout="fill" src="/images/backgrounds/Setup.webp" />
      </ImageContainer>
      <AboutContainer>
        <DetailedAboutTitle>A dedicated Web Developer who is passionate about what it does.</DetailedAboutTitle>
        <DetailedAboutDescription>
          I have been studying web development for about a year. Since my first plain html website, i've figured out that this is what i love to do. I
          love learning new stuff and helping others to grow. Without a doubt, this is my area :)
        </DetailedAboutDescription>
        <ExperienceContainer>
          <div>
            <HighlightedText>1+</HighlightedText>
            <ExperienceDescription>Years of experience</ExperienceDescription>
          </div>
          <div>
            <HighlightedText>15+</HighlightedText>
            <ExperienceDescription>Completed projects</ExperienceDescription>
          </div>
        </ExperienceContainer>
        <SayHiButton>
          SAY HI
          <span>
            <ArrowIcon />
          </span>
        </SayHiButton>
      </AboutContainer>
    </Container>
  );
}
