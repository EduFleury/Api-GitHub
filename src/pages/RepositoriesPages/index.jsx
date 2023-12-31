import React, {useEffect, useState} from 'react'

import { useParams } from 'react-router-dom'

import Profile from './Profile'
import Filter from './Filter'
import Repositories from '../Repositories'

import { Container, SideBar, Main, Loading } from './styles'

import {getUser, getRepos, getLanguages} from '../../services/api'


function RepositoriesPages() {
  const {login} = useParams();
  const [user, setUser] = useState();
  const [repositories, setRepositories] = useState();
  const [languages, setLanguages] = useState();
  const [currentLanguage, setCurrentLanguage] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async() => {
      const [userResponse, repositoriesResponse] = await Promise.all([
        getUser(login),
        getRepos(login),
      ]);

      setUser(userResponse.data);
      setRepositories(repositoriesResponse.data);
      setLanguages(getLanguages(repositoriesResponse.data));

      setLoading(false);
    };
    loadData();
  }, []);

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
