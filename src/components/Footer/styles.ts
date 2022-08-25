import styled from 'styled-components';
import { SectionDescription } from '../../styles/Global/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
  margin-top: 3.3125rem;
  margin-bottom: 10.75rem;
`;

export const FooterImage = styled.div`
  position: relative;
  width: 16.4375rem;
  height: 3.6875rem;
`;

export const FooterText = styled(SectionDescription)`
  font-size: 0.875rem;
  margin-top: 0;
  color: ${props => props.theme["gray-500"]};
  line-height: 1.25rem;
`;

export const PurpleLogo = styled.span`
  color: ${props => props.theme["purple"]};
`;

export const PinkHeart = styled.span`
  color: ${props => props.theme["pink"]};
`;