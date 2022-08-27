import Image from 'next/image';
import { ArrowRight } from 'phosphor-react';
import { ServiceCardProps } from '../../../@types/props';

import { Container, DiscussNow, ServiceCardTitle } from './styles';

import { ServiceCardIcon } from './styles';

export function ServiceCard(props: ServiceCardProps) {
  return (
    <Container>
      <ServiceCardIcon>
        <Image priority src={props.icon} layout="fixed" width={40} height={40} />
      </ServiceCardIcon>
      <ServiceCardTitle>{props.name}</ServiceCardTitle>
      <DiscussNow>
        <span>DISCUSS NOW</span>
        <ArrowRight width={36} />
      </DiscussNow>
    </Container>
  );
}
