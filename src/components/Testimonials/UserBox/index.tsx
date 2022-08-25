import Image from "next/image";
import { UserProps } from "../../../@types/props";
import { Container } from "./styles";
import { UserCompany, UserInfo, UserName, UserPic, UserRole } from "./styles";

export function UserBox(props: UserProps) {
  return (
    <Container>
      <UserPic>
        <Image layout="fill" src={props.pic}/>
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
