import Image from "next/image";
import { WorkCardProps } from "../../../@types/props";

import { ArrowIcon } from "../../../styles/Global/ArrowIcon";

import {
  CardContainer,
  SelectedWorkCard,
  SelectedWorkTitle,
  WorkImage,
} from "./styles";

export function WorkCard(props: WorkCardProps) {
  return (
    <CardContainer>
      <WorkImage>
        <Image layout="fill" src={props.image} />
      </WorkImage>
      <SelectedWorkCard>
        <SelectedWorkTitle>{props.name}</SelectedWorkTitle>
        <ArrowIcon />
      </SelectedWorkCard>
    </CardContainer>
  );
}
