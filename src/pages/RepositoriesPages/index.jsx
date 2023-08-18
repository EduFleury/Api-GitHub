import React from 'react'

import Profile from './Profile'

import { Container, SideBar, Main } from './styles'

function RepositoriesPages() {
  return (
    <Container>
      <SideBar>
       <Profile/>
      </SideBar>
      <Main>
        Main
      </Main>
    </Container>
  )
}

export default RepositoriesPages
