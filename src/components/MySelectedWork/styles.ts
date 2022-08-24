import styled from 'styled-components';
import { CardBox, CardTitle } from '../../styles/Global/styles';

export const Container = styled.section`
  display: flex;
  padding: 6.25rem 0;
  flex-direction: column;
  align-items: center;
  gap: 3.25rem;
`;

export const SelectedWorkContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 26.5rem);
  gap: 1.5rem;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SelectedWorkCard = styled(CardBox)`
  border-top-right-radius: 0;
  border-top-left-radius: 0;
`;

export const SelectedWorkTitle = styled(CardTitle)`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  line-height: 150%;
  
  &::after {
    display: none;
  }
`;

export const WorkImage = styled.div`
   position: relative;
   width: 26.5rem;
   height: 20.75rem;
   
   img {
    position: absolute;
    object-fit: cover;
    border-top-right-radius: 6px;
  border-top-left-radius: 6px;
   }
`;
