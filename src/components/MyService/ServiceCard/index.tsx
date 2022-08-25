import Image from "next/image";
import { ServiceCardProps } from "../../../@types/props";
import { ArrowIcon } from "../../../styles/Global/ArrowIcon";

import {
  HoverButton,
} from "../../../styles/Global/styles";
import { Container, ServiceCardTitle } from "./styles";

import { ServiceCardIcon } from "./styles";

export function ServiceCard(props: ServiceCardProps) {
  return (
    <Container>
      <ServiceCardIcon>
        <Image src={props.icon} layout="fixed" width={40} height={40} />
      </ServiceCardIcon>
      <ServiceCardTitle>
        {props.name}
      </ServiceCardTitle>
      <HoverButton>
        <ArrowIcon />
      </HoverButton>
    </Container>
  );
}
