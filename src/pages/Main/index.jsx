import React from "react";
import {MdSearch} from "react-icons/md"
import { Container, Logo, Title, Form, Input, Button } from "./styles";

import githublogo from '../../assets/images/github-logo.svg'

function Main() {
  return (
    <Container>
      <Logo src={githublogo} alt="Api GitHub"/>
      <Title>API Github</Title>
      <Form>
        <Input placeholder="Usuário"/>
        <Button>
          <MdSearch size={42} color="White"/>
        </Button>
      </Form>
    </Container>
  );
}

export default Main;
