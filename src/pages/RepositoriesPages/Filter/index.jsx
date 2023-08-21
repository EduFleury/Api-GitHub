import React from 'react'

import { Container, Selector, Cleaner} from './styles';

function Filter() {

  const langs = [
    {name: "JavaScript", count: 5, color: '#f1c40f'},
    {name: "Java", count: 2, color: '#f1130f'},
    {name: "React", count: 1, color: '#437bff'}
  ]

  const selectors = langs.map((lang) => (
    <Selector key={lang.name.toLowerCase} color={lang.color}>
      <span>{lang.name}</span>
      <span>{lang.count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner>
       Limpar
      </Cleaner>
    </Container>
  )
}

export default Filter
