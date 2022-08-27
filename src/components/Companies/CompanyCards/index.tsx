import Image from 'next/image';
import { ArrowRight } from 'phosphor-react';
import { companies } from '../../../data/companies';
import { ButtonContainer, CompaniesContainer } from './styles';
import { Container } from './styles';

export function CompanyCards() {
  return (
    <CompaniesContainer>
      {companies.map((company, key) => {
        return (
          <Container key={key}>
            <Image priority src={company.logo} layout="fixed" width={60} height={60} />
          </Container>
        );
      })}
      <ButtonContainer>
        <ArrowRight />
      </ButtonContainer>
    </CompaniesContainer>
  );
}
