import React from 'react'

import { Container, Header , Avatar, Login, Name} from './styles'


function Profile() {
  return (
   <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/114586500?v=4"/>
      <Login>EduFleury</Login>
      <Name>Eduardo Fleury</Name>
    </Header>
   </Container>
  )
}

export default Profile
