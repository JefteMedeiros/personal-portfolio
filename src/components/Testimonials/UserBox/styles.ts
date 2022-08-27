import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;

  border: 1px solid transparent;
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme["white"]};
  
  padding: 1.4375rem;
  
  outline: none;
  transition: all 200ms;

  &:hover {
    cursor: pointer;
    border: 1px solid ${props => props.theme["pink"]};
  }

  &:focus {
    border: 1px solid ${props => props.theme["pink"]};
  }
`;

export const UserPic = styled.div`
  position: relative;
  width: 3.25rem;
  height: 3.25rem;

  img {
    border-radius: 9999px;
    object-fit: cover;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  
  width: 100%;
`;

export const UserName = styled.h1`
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.75rem;
  color: ${(props) => props.theme["black"]};
`;

export const UserRole = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${(props) => props.theme["gray-500"]};
`;

export const UserCompany = styled.span`
  font-weight: 400;
  color: ${(props) => props.theme["pink"]};
`;
