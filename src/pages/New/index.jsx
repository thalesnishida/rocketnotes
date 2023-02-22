import { Link } from "react-router-dom";

import { Textarea }  from '../../components/Textarea';
import { NewItem }  from '../../components/NewItem';
import { Section }  from '../../components/Section';
import { Button }  from '../../components/Button';
import { Header } from '../../components/Header';
import { Input }  from '../../components/Input';

import { Container, Form } from './styles';

export function New(){
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/"> Voltar</Link>
          </header>

          <Input placeholder="Título"/>
          <Textarea placeholder="Observações" />


          <Section title="Links uteis">
            <NewItem value="https://github.com/thalesnishida"/>
            <NewItem isNew placeholder="Novo link"/>
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              <NewItem value="react"/>
              <NewItem isNew placeholder="node"/>
            </div>
          </Section>

          <Button title="Salvar"/>
          </Form>
        </main>
    </Container>
  )
}