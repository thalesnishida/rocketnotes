import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { FiArrowLeft, FiUser, FiLock, FiMail, FiCamera } from "react-icons/fi";
import { Link } from "react-router-dom";

import { Container, Form, Avatar } from "./styles";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  async function handleUpdade() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    await updateProfile({ user });
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img
            src="https://github.com/thalesnishida.png"
            alt="Imagem do usúario"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          onChange={(e) => setPasswordNew(e.target.value)}
          icon={FiLock}
        />

        <Input
          placeholder="Senha Atual"
          type="password"
          onChange={(e) => setPasswordOld(e.target.value)}
          icon={FiLock}
        />

        <Button title="Salvar" onClick={handleUpdade} />
      </Form>
    </Container>
  );
}
