import React from 'react'
import Proptypes from 'prop-types'
import { Container, Selector, Cleaner} from './styles';

function Filter({languages}) {

  const selectors = languages.map((lang) => (
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

Filter.propTypes ={
  languages: Proptypes.arrayOf(
    Proptypes.shape({
      name: Proptypes.string.isRequired,
      count: Proptypes.number.isRequired,
      color: Proptypes.string
    }).isRequired
  ).isRequired
}

export default Filter
