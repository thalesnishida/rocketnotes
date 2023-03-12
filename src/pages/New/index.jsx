import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { api } from "../../services/api";

import { Textarea } from "../../components/Textarea";
import { NewItem } from "../../components/NewItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Container, Form } from "./styles";
import { ButtonText } from "../../components/ButtonText";

export function New() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTags(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Você não digitou o título! Digite o título da nota");
    }

    if (newLink) {
      return alert(
        "Vocẽ deixou um link para adicionar, mas nao clicou para adicionar. Clique para adicionar ou deixe o campo vazio!"
      );
    }

    if (newTag) {
      return alert(
        "Vocẽ deixou um tag para adicionar, mas nao clicou para adicionar. Clique para adicionar ou deixe o campo vazio!"
      );
    }

    await api.post("/notes", {
      title,
      description,
      tags: tags,
      links: links,
    });

    alert("Nota criada com sucesso!");
    navigate("/");
  }

  function handleBack() {
    navigate(-1);
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <ButtonText title={"Voltar"} onClick={handleBack} />
          </header>

          <Input
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observações"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Links uteis">
            {links.map((link, index) => (
              <NewItem
                key={String(index)}
                value={link}
                onClick={() => handleRemoveLink(link)}
              />
            ))}

            <NewItem
              isNew
              placeholder="Novo link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              {tags.map((tag, index) => (
                <NewItem
                  key={String(index)}
                  value={tag}
                  onClick={() => {
                    handleRemoveTags(tag);
                  }}
                />
              ))}
              <NewItem
                isNew
                placeholder="node"
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
              />
            </div>
          </Section>

          <Button title="Salvar" onClick={handleNewNote} />
        </Form>
      </main>
    </Container>
  );
}
