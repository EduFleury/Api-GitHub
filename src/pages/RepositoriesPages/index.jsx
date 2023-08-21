import React from 'react'

import Profile from './Profile'
import Filter from './Filter'
import Repositories from '../Repositories'

import { Container, SideBar, Main } from './styles'

function RepositoriesPages() {
  return (
    <Container>
      <SideBar>
       <Profile/>
       <Filter/>
      </SideBar>
      <Main>
        <Repositories/>
      </Main>
    </Container>
  )
}

export default RepositoriesPages
