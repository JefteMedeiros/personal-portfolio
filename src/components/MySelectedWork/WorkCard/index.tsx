import Image from 'next/image';
import { ArrowRight } from 'phosphor-react';
import { WorkCardProps } from '../../../@types/props';

import { CardContainer, SelectedWorkCard, SelectedWorkTitle, ViewProject, WorkImage } from './styles';

export function WorkCard(props: WorkCardProps) {
  return (
    <CardContainer>
      <WorkImage>
        <Image priority layout="fill" src={props.image} />
      </WorkImage>
      <SelectedWorkCard>
        <SelectedWorkTitle>{props.name}</SelectedWorkTitle>
        <ViewProject>
          <span>View project</span>
          <ArrowRight />
        </ViewProject>
      </SelectedWorkCard>
    </CardContainer>
  );
}
