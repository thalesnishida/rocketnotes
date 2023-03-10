import { useState, useEffect } from "react";

import { api } from "../../services/api";

import { FiPlus, FiSearch } from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header/index";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Nota } from "../../components/Notas";
import { Section } from "../../components/Section";

export function Home() {
  const [tags, setTags] = useState([]);
  const [tagsSelected, setTagsSelected] = useState([]);

  function handleTagSelected(tagName) {
    const alreadySelected = tagsSelected.includes(tagName);

    if (alreadySelected) {
      const filterSelectTag = tagsSelected.filter((tag) => tag !== tagName);
      setTagsSelected(filterSelectTag);
    } else {
      setTagsSelected((prevState) => [...prevState, tagName]);
    }
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/tags");
      setTags(response.data);
    }

    fetchTags();
  }, []);
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>
        {tags &&
          tags.map((tag) => (
            <li key={String(tag.id)}>
              <ButtonText
                title={tag.name}
                onClick={() => handleTagSelected(tag.name)}
                isActive={tagsSelected.includes(tag.name)}
              />
            </li>
          ))}
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo titulo" icon={FiSearch} />
      </Search>

      <Content>
        <Section>
          <Nota
            data={{
              title: "React",
              tags: [
                { id: "1", name: "react" },
                { id: "2", name: "nodejs" },
              ],
            }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar Nota
      </NewNote>
    </Container>
  );
}
