import React from 'react'

import {MdGroup, MdLocationCity, MdWork, MdLink} from 'react-icons/md'

import { Container, Header , Avatar, Login, Name, Inner, Data} from './styles'


function Profile() {
  return (
   <Container>
    <Header>
      <Avatar src="https://avatars.githubusercontent.com/u/114586500?v=4"/>
      <Login>EduFleury</Login>
      <Name>Eduardo Fleury</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20}/>
        30&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;10&nbsp;<i>seguindo</i>
      </Data>
      <Data>
        <MdWork size={20}/>
        Vatec
      </Data>
      <Data>
        <MdLocationCity size={20}/>
        Goiânia - GO
      </Data>
      <Data>
        <MdLink size={20}/>&nbsp;
        <a href='https://www.linkedin.com/in/eduardo-pina-fleury-fortuna-51a57021b/'>Linkedin</a>
      </Data>
    </Inner>
   </Container>
  )
}

export default Profile
