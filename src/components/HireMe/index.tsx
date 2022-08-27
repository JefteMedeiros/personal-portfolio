import { Button } from '../../styles/Global/styles';
import { Container, HireMeButton, HireMeTitle, Together } from './styles';

export function HireMe() {
  return (
    <Container>
      <HireMeTitle>
        Got someting in mind? Let's make <br /> something awesome <Together>together.</Together>
      </HireMeTitle>
      <HireMeButton>HIRE ME</HireMeButton>
    </Container>
  );
}
