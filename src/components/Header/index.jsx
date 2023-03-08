import { RiShutDownLine } from "react-icons/ri";

import { useAuth } from "../../hooks/auth";

import { Container, Profile, Logout } from "./styles";

export function Header() {
  const { signOut } = useAuth();

  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/thalesnishida.png"
          alt="Imagem do usúario"
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Thales Nishida</strong>
        </div>
      </Profile>

      <Logout onClick={signOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
