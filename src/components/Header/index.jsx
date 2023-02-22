import { RiShutDownLine } from "react-icons/ri"

import { Container, Profile, Logout } from './styles';


export function Header(){
  return (
    <Container>
      <Profile to="/profile">
        <img  
          src='https://github.com/thalesnishida.png'
          alt='Imagem do usúario'
        />

        <div>
          <span>Bem-vindo</span>
          <strong>Thales Nishida</strong>
        </div>  
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}