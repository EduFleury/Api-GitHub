import React from 'react'

import { Container, Name , Description , Footer , Lang , Link } from './styles'

function Repository() {
  return (
    <Container color="#f37272">
      <Name>Nome</Name>
      <Description>Desc</Description>
      <Footer color="#f37272">
       <Lang>Java</Lang>
       <Link href="https://github.com/EduFleury" target="_blank">ver</Link>
      </Footer>
    </Container>
  )
}

export default Repository
