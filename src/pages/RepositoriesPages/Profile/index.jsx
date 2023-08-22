import React from 'react'
import Proptypes from 'prop-types'

import {MdGroup, MdLocationCity, MdWork, MdLink} from 'react-icons/md'

import { Container, Header , Avatar, Login, Name, Inner, Data} from './styles'


function Profile({user}) {
  return (
   <Container>
    <Header>
      <Avatar src={user.avatar_url}/>
      <Login>{user.login}</Login>
      <Name>{user.name}</Name>
    </Header>
    <Inner>
      <Data>
        <MdGroup size={20}/>
        {user.following}&nbsp;<i>seguidores</i>&nbsp;&middot;&nbsp;{user.followers}&nbsp;<i>seguindo</i>
      </Data>
      {user.company && (
        <Data>
        <MdWork size={20}/>
        {user.company}
      </Data>
      )}
      {user.location && (
        <Data>
        <MdLocationCity size={20}/>
        {user.location}
      </Data>
      )}
      {user.blog && (
        <Data>
        <MdLink size={20}/>&nbsp;
        <a href={`\\${user.blog}`}>Blog</a>
      </Data>
      )}
    </Inner>
   </Container>
  )
}

Profile.propTypes = {
  user: Proptypes.shape({
    login: Proptypes.string.isRequired,
    avatar_url: Proptypes.string.isRequired,
    followers: Proptypes.number.isRequired,
    following: Proptypes.number.isRequired,
    name: Proptypes.string.isRequired,
    company: Proptypes.string.isRequired,
    blog: Proptypes.string.isRequired,
    location: Proptypes.string.isRequired,
  }).isRequired
};

export default Profile
