import { ArrowIcon } from '../../styles/Global/ArrowIcon';
import { Container, HireMeButton, HireMeTitle, Together } from './styles';

export function HireMe() {
  return (
    <Container>
      <HireMeTitle>
        Got someting in mind? Let's make <br /> something awesome <Together>together.</Together>
      </HireMeTitle>
      <HireMeButton>
          SAY HI
          <span>
            <ArrowIcon />
          </span>
        </HireMeButton>
    </Container>
  );
}
