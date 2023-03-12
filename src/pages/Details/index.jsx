import { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";

import { Container, Links, Content } from "./styles";

import { Link } from "react-router-dom";

import { Header } from "../../components/Header/index";
import { Button } from "../../components/Button/index";
import { Section } from "../../components/Section/index";
import { Tag } from "../../components/Tag/index";
import { ButtonText } from "../../components/ButtonText/index";
import { api } from "../../services/api";

export function Details() {
  const [data, setData] = useState("");

  const navigate = useNavigate();

  const params = useParams();

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remove a nota?");

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      navigate("/");
    }
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" onClick={handleRemove} />

          <h1>{data.title}</h1>

          <p>{data.desciption}</p>

          {data.links && (
            <Section title="Link">
              {data.links.map((link) => (
                <Links>
                  <li key={String(link.id)}>
                    <a href={link.url}>{link.url}</a>
                  </li>
                </Links>
              ))}
            </Section>
          )}

          {data.tags && (
            <Section title="Marcadores">
              {data.tags.map((tag) => (
                <Tag key={String(tag.id)} title={tag.name} />
              ))}
            </Section>
          )}

          <Link to="/">
            <Button title="Voltar" />
          </Link>
        </Content>
      </main>
    </Container>
  );
}
