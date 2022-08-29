import styled from "styled-components";

export const CompaniesContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(5, 10.5rem);

  @media screen and (max-width: 1600px) {
    flex: 1;
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  width: 100%;
  border-radius: 0.5rem;
  padding: 0.625rem;

  @media screen and (max-width: 1180px) {
    min-height: 8.75rem;
  }

  background-color: ${(props) => props.theme["white"]};

  img {
    object-fit: contain;
  }
`;

export const ButtonContainer = styled(Container)`
  svg {
    font-size: 2rem;
    color: ${props => props.theme["black"]};
    transition: all 200ms;

    &:hover {
      color: ${props => props.theme["purple"]};
      cursor: pointer;
    }
  }
  
  @media screen and (max-width: 1180px) {
    min-height: 8.75rem;
  }
`;
