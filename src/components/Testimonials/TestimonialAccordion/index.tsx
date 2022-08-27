import { userTestimonials } from '../../../data/userTestimonials';

import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from 'react-accessible-accordion';

import { TestimonialDescription } from './styles';

export function TestimonialAccordion() {
  return (
    <Accordion allowZeroExpanded>
      {userTestimonials.map((testimonial, key) => {
        return (
          <AccordionItem key={key}>
            <AccordionItemHeading>
              <AccordionItemButton>{testimonial.name}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <TestimonialDescription>{testimonial.testimonial}</TestimonialDescription>
            </AccordionItemPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
