import { userTestimonials } from '../../data/userTestimonials';
import { useWindowSize } from '../../hooks/useWindowSize';
import { SectionTitleUnderline } from '../../styles/Global/styles';
import { TestimonialAccordion } from './TestimonialAccordion';

import { Container, TestimonialContainer, UserContainer } from './styles';
import { Testimonial } from './Testimonial';
import { UserBox } from './UserBox';

export function Testimonials() {
  const windowSize = useWindowSize();

  return (
    <Container>
      <SectionTitleUnderline>Testimonial</SectionTitleUnderline>
      {!!windowSize.width && windowSize.width > 1366 ? (
        <TestimonialContainer>
          <UserContainer>
            {userTestimonials.map((user, key) => {
              return <UserBox key={key} name={user.name} clickedUser={key} pic={user.pic} role={user.role} company={user.company} />;
            })}
          </UserContainer>
          <Testimonial />
        </TestimonialContainer>
      ) : (
        <TestimonialAccordion />
      )}
    </Container>
  );
}
