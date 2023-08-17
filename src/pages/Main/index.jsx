import React, {useState} from "react";
import {MdSearch} from "react-icons/md"
import { Container, Logo, Title, Form, Input, Button } from "./styles";

import githublogo from '../../assets/images/github-logo.svg'

function Main() {

  const [login, setLogin] = useState('');

  return (
    <Container>
      <Logo src={githublogo} alt="Api GitHub"/>
      <Title>API Github</Title>
      <Form>
        <Input placeholder="Usuário"
               value={login}
               onChange={(event) => setLogin(event.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} color="White"/>
        </Button>
      </Form>
    </Container>
  );
}

export default Main;
