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

  // const repositories = [
  //   {
  //     name: 'Repo 1', description: 'Descrição1', html_url: 'https://edufleury.github.io/Portifolio2.0/', language: 'HTML5'
  //   },
  //   {
  //     name: 'Repo 2', description: 'Descrição2', html_url: 'https://edufleury.github.io/Portifolio2.0/', language: 'CSS3'
  //   },
  //   {
  //     name: 'Repo 3', description: 'Descrição3', html_url: 'https://edufleury.github.io/Portifolio2.0/', language: 'Oracle'
  //   },
  //   {
  //     name: 'Repo 4', description: 'Descrição3', html_url: 'https://edufleury.github.io/Portifolio2.0/', language: 'Java'
  //   }
  // ]

  // calculo dos filters
  const languages = [
    {name: "Oracle", count: 4, color: '#f75755'},
    {name: "JavaScript", count: 3, color: '#f1c40f'},
    {name: "Java", count: 2, color: '#f1130f'},
    {name: "React", count: 1, color: '#437bff'}
  ]

  return (
    <Container>
      <SideBar>
       <Profile user={user}/>
       <Filter languages={languages}/>
      </SideBar>
      <Main>
        <Repositories/>
      </Main>
    </Container>
  )
}

export default RepositoriesPages
