import { Introduction } from './Introduction';
import { Header } from './Header';
import { Container, PurpleRectangle } from './styles';
import { ProfileImage } from './ProfileImage';

export function Headline() {
  return (
    <Container>
      <Header />
      <ProfileImage />
      <Introduction />
      <PurpleRectangle />
    </Container>
  );
}
