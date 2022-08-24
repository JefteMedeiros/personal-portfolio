import styled from "styled-components";
import {
  PurpleUnderlinedTitle,
  SectionTitle,
} from "../../styles/Global/styles";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 6.25rem 0;
  margin-top: 4.25rem;
  margin-bottom: 5rem;
  gap: 4.5rem;
`;

export const CompaniesTitle = styled(SectionTitle)`
  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 400;
  max-width: 19.5rem;
`;

export const CompaniesNumber = styled(PurpleUnderlinedTitle)`
  font-size: 2rem;
  color: ${(props) => props.theme["pink"]};
  line-height: 2.5rem;
  font-weight: 400;

  &::after {
    max-width: 5.5rem;
  }
`;

export const CompanyContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(5, 10.5rem);
`;

export const CompanyCard = styled.div`
  display: flex;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;

  background-color:  ${props => props.theme["white"]};

  svg {
    color: ${props => props.theme["black"]};
  }
`;

