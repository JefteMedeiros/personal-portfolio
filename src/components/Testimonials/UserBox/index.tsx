import { useContext, useState } from 'react';
import Image from 'next/image';
import { UserProps } from '../../../@types/props';
import { Container } from './styles';
import { UserCompany, UserInfo, UserName, UserPic, UserRole } from './styles';
import { ClickedUser } from '../../../context';

export function UserBox(props: UserProps) {
  const { handleSetClickedUser } = useContext(ClickedUser);

  return (
    <Container onClick={() => handleSetClickedUser(props.clickedUser)}>
      <UserPic>
        <Image priority layout="fill" src={props.pic} />
      </UserPic>
      <UserInfo>
        <UserName>{props.name}</UserName>
        <UserRole>
          {props.role} <UserCompany>{props.company}</UserCompany>
        </UserRole>
      </UserInfo>
    </Container>
  );
}
