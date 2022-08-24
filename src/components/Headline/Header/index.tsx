import { Container } from "../styles";
import { HeaderLink, HeaderNav } from "./styles";

export function Header() {
  return (
    <Container>
      <HeaderNav>
        <li>
          <HeaderLink href="#">ABOUT</HeaderLink>
        </li>
        <li>
          <HeaderLink href="#">SERVICES</HeaderLink>
        </li>
        <li>
          <HeaderLink href="#">WORKS</HeaderLink>
        </li>
        <li>
          <HeaderLink href="#">CONTACT</HeaderLink>
        </li>
      </HeaderNav>
    </Container>
  );
}
