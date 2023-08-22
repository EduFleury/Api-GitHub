import React from 'react'

import Profile from './Profile'
import Filter from './Filter'
import Repositories from '../Repositories'

import { Container, SideBar, Main } from './styles'

function RepositoriesPages() {

  const user ={
    login: "EduFleury",
    avatar_url: "https://avatars.githubusercontent.com/u/114586500?v=4",
    followers: 0,
    following: 0,
    name: "Eduardo Pina Fleury Fortuna",
    company: null,
    blog: "https://edufleury.github.io/Portifolio2.0/",
    location: "Brazil, GO, Goiânia",
  }

  return (
    <Container>
      <SideBar>
       <Profile user={user}/>
       <Filter/>
      </SideBar>
      <Main>
        <Repositories/>
      </Main>
    </Container>
  )
}

export default RepositoriesPages
