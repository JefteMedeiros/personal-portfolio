import styled from "styled-components";
import {
  PurpleUnderlinedTitle,
  SectionTitle,
} from "../../styles/Global/styles";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  gap: 3.5rem;

  @media screen and (max-width: 1600px) {
    justify-content: space-between;
    padding: 0 6.25rem;
  }

  @media screen and (max-width: 1366px) {
    justify-content: space-between;
    padding: 3.25rem;
  }

  @media screen and (max-width: 1180px) {
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    padding: 2.1875rem;
  }
`;

export const CompaniesTitle = styled(SectionTitle)`
  font-size: 2rem;
  width: 100%;
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
