import styled from "styled-components";
import { PinkTitle, SectionTitle } from "../../styles/Global/styles";

export const Container = styled.div`
  position: relative;
  margin: auto;
  max-width: 82.5rem;

  background-image: url('Shapes.png');
  background-repeat: no-repeat;

  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  margin-top: 4.25rem;
  padding: 4rem;

  text-align: center;

  img {
    position: absolute;
  }
`;

export const HireMeContainer = styled.div``;

export const HireMeTitle = styled(SectionTitle)`
  font-weight: 400;
  font-size: 2rem;
  line-height: 150%;
`;

export const Together = styled(PinkTitle)`
  font-weight: 400;
  font-size: 2rem;
  line-height: 150%;
`;
