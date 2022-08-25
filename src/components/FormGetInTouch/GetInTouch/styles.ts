import styled from 'styled-components';
import { SectionTitle } from '../../../styles/Global/styles';
import { WhiteBox } from '../styles';

export const Container = styled(WhiteBox)`
  position: relative;
  max-width: 33.5rem;

  &::after {
    position: absolute;
    content: "";
    width: 9.5rem;
    height: 4.25rem;
    top: -2.1875rem;
    right: -4.8125rem;
    background-image: url("images/backgrounds/PinkDots.png");
    background-repeat: no-repeat;
  }
`;

export const GetInTouchTitle = styled(SectionTitle)`
  color: ${props => props.theme["black"]};
  margin-bottom:1.5rem;
  font-weight: 500;
  font-size: 2rem;
  line-height: 2.5rem;
`;

export const PinkDots = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const ContactOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5625rem;
`;
