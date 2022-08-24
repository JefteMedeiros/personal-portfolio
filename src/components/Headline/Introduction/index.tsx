import {
  Container,
  Intro,
  Role,
  Bio,
  ButtonContainer,
  ViewWorkButton,
  HireMeButton,
  IntroContainer,
} from "./styles";

import { SocialMedia } from "./SocialMedia";

export function Introduction() {
  return (
    <Container>
      <IntroContainer>
        <Intro>Hello, I'm Jeff, a</Intro>
        <Role>Frontend Engineer.</Role>
        <Bio>
          Jr. Frontend Engineer and web developer based in Brazil. Over
          the past 2 years, as a solo developer, I’ve worked on multiple
          portfolio and freelancing projects.
        </Bio>
        <ButtonContainer>
          <HireMeButton>
            <a href="#">HIRE ME</a>
          </HireMeButton>
          <ViewWorkButton>
            <a href="#">VIEW WORK</a>
          </ViewWorkButton>
        </ButtonContainer>
      </IntroContainer>
      <SocialMedia />
    </Container>
  );
}
