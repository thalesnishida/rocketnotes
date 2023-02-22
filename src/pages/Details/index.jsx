import { Container, Links, Content} from "./styles";

import { Header } from "../../components/Header/index";
import { Button } from "../../components/Button/index";
import { Section } from "../../components/Section/index";
import { Tag } from "../../components/Tag/index";
import { ButtonText } from "../../components/ButtonText/index";

export function Details(){

  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>

          <h1>Introdução ao React</h1>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            A similique maxime totam quam, sapiente nisi tempora dicta officiis perferendis 
            A similique maxime totam quam, sapiente nisi tempora dicta officiis perferendis 
            7blanditiis quidem sequi deserunt est quo dolor ipsum nulla labore laboriosam.
          </p>

          <Section title="Link">
            <Links>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
              <li><a href="#">https://www.rocketseat.com.br/</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="nodejs"/>
            <Tag title="express"/>
          </Section>


          <Button title="Voltar" />  
        </Content>
      </main>

    </Container>
  )
}