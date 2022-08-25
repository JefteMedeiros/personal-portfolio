import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: ${(props) => props.theme["white"]};
  border-radius: 0.25rem;
  padding: 1.5rem;
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
  width: 12.25rem
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
