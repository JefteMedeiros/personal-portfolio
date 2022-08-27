import { ServiceCard } from './ServiceCard';

import { CardsContainer, Container, MyServiceTitle } from './styles';
import { myService } from '../../data/myService';

export function MyService() {
  return (
    <Container>
      <MyServiceTitle>My Service</MyServiceTitle>
      <CardsContainer>
        {myService.map((service, key) => {
          return <ServiceCard key={key} icon={service.icon} name={service.name} />;
        })}
      </CardsContainer>
    </Container>
  );
}
