import React from 'react'

import Profile from './Profile'
import Filter from './Filter'

import { Container, SideBar, Main } from './styles'

function RepositoriesPages() {
  return (
    <Container>
      <SideBar>
       <Profile/>
       <Filter/>
      </SideBar>
      <Main>
        Main
      </Main>
    </Container>
  )
}

export default RepositoriesPages
