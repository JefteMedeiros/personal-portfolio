import {
  Container,
  Intro,
  Role,
  Bio,
  ButtonContainer,
  ViewWorkButton,
  HireMeButton,
} from "./styles";

import { SocialMedia } from "./SocialMedia";

export function About() {
  return (
    <Container>
      <div>
        <Intro>Hello, I'm Jeff, a</Intro>
        <Role>Frontend Engineer.</Role>
        <Bio>
          Product Designer, UI/UX Designer, and developer based in Brazil. Over
          the past 17 years, as an art director and designer, I’ve worked with
          big companies and up-and-coming startups.
        </Bio>
        <ButtonContainer>
          <HireMeButton>
            <a href="#">HIRE ME</a>
          </HireMeButton>
          <ViewWorkButton>
            <a href="#">VIEW WORK</a>
          </ViewWorkButton>
        </ButtonContainer>
      </div>
      <SocialMedia />
    </Container>
  );
}
