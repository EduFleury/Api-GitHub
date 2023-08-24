import React, {useEffect, useState} from 'react'

import Profile from './Profile'
import Filter from './Filter'
import Repositories from '../Repositories'

import { Container, SideBar, Main, Loading } from './styles'

import {getUser, getLanguages} from '../../services/api'


function RepositoriesPages() {
  const [user, setUser] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async() => {
      const [userResponse] = await Promise.all([
        getUser('EduFleury'),
      ]);
      setUser(userResponse.data);
      setLoading(false);
    };

    loadData();
  }, []);

  // const user ={
  //   login: "EduFleury",
  //   avatar_url: "https://avatars.githubusercontent.com/u/114586500?v=4",
  //   followers: 0,
  //   following: 0,
  //   name: "Eduardo Pina Fleury Fortuna",
  //   company: null,
  //   blog: "https://edufleury.github.io/Portifolio2.0/",
  //   location: "Brazil, GO, Goiânia",
  // }

 // eslint-disable-next-line no-unused-vars
  const repositories = [
    {
      id: '1', name: 'Repo 1', description: 'Descrição1', html_url: 'https://edufleury.github.io/Portifolio2.0/', language: 'HTML5'
    },
    {
      id: '2',name: 'Repo 2', description: 'Descrição2', html_url: 'https://edufleury.github.io/Portifolio2.0/', language: 'JavaScript'
    },
    {
      id: '3',name: 'Repo 3', description: 'Descrição3', html_url: 'https://edufleury.github.io/Portifolio2.0/', language: 'SQL'
    },
    {
      id: '4', name: 'Repo 4', description: 'Descrição4', html_url: 'https://edufleury.github.io/Portifolio2.0/', language: 'Java'
    },
    {
      id: '5',name: 'Repo 5', description: 'Descrição5', html_url: 'https://edufleury.github.io/Portifolio2.0/', language: 'Phyton'
    }
  ];

  const languages = getLanguages(repositories);

  const onFilterClick = (language) =>{
    setCurrentLanguage(language);
  };

  if(loading){
    return <Loading>Carregando dados da Aplicação...</Loading>;
  }

  return (
    <Container>
      <SideBar>
       <Profile user={user}/>
       <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilterClick}/>
      </SideBar>
      <Main>
        <Repositories repositories={repositories} currentLanguage={currentLanguage}/>
      </Main>
    </Container>
  )
}

export default RepositoriesPages
