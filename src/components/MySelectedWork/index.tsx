import Image from "next/image";
import { ArrowIcon } from "../../styles/Global/ArrowIcon";
import { HoverButton, SectionTitleUnderline } from "../../styles/Global/styles";
import {
  Container,
  SelectedWorkCard,
  SelectedWorkTitle,
  SelectedWorkContainer,
  CardContainer,
  WorkImage,
} from "./styles";

export function MySelectedWork() {
  return (
    <Container>
      <SectionTitleUnderline>My Selected Work</SectionTitleUnderline>
      <SelectedWorkContainer>
      <CardContainer>
          <WorkImage>
            <Image layout="fill" src="/Me.jpg" />
          </WorkImage>
          <SelectedWorkCard>
            <SelectedWorkTitle>Huma Marketing Agency</SelectedWorkTitle>
            <HoverButton>
              <ArrowIcon />
            </HoverButton>
          </SelectedWorkCard>
        </CardContainer>
        <CardContainer>
          <WorkImage>
            <Image layout="fill" src="/Me.jpg" />
          </WorkImage>
          <SelectedWorkCard>
            <SelectedWorkTitle>Huma Marketing Agency</SelectedWorkTitle>
            <HoverButton>
              <ArrowIcon />
            </HoverButton>
          </SelectedWorkCard>
        </CardContainer>
        <CardContainer>
          <WorkImage>
            <Image layout="fill" src="/Me.jpg" />
          </WorkImage>
          <SelectedWorkCard>
            <SelectedWorkTitle>Huma Marketing Agency</SelectedWorkTitle>
            <HoverButton>
              <ArrowIcon />
            </HoverButton>
          </SelectedWorkCard>
        </CardContainer>
        <CardContainer>
          <WorkImage>
            <Image layout="fill" src="/Me.jpg" />
          </WorkImage>
          <SelectedWorkCard>
            <SelectedWorkTitle>Huma Marketing Agency</SelectedWorkTitle>
            <HoverButton>
              <ArrowIcon />
            </HoverButton>
          </SelectedWorkCard>
        </CardContainer>
        <CardContainer>
          <WorkImage>
            <Image layout="fill" src="/Me.jpg" />
          </WorkImage>
          <SelectedWorkCard>
            <SelectedWorkTitle>Huma Marketing Agency</SelectedWorkTitle>
            <HoverButton>
              <ArrowIcon />
            </HoverButton>
          </SelectedWorkCard>
        </CardContainer>
        <CardContainer>
          <WorkImage>
            <Image layout="fill" src="/Me.jpg" />
          </WorkImage>
          <SelectedWorkCard>
            <SelectedWorkTitle>Huma Marketing Agency</SelectedWorkTitle>
            <HoverButton>
              <ArrowIcon />
            </HoverButton>
          </SelectedWorkCard>
        </CardContainer>
      </SelectedWorkContainer>
    </Container>
  );
}
