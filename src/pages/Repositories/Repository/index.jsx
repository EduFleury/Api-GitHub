import React from 'react'
import Proptypes from 'prop-types'

import { Container, Name , Description , Footer , Lang , Link } from './styles'

import { langColors } from '../../../services/config'

function Repository({repository}) {

  const color = langColors[repository.language && repository.language.toLowerCase()]

  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
       <Lang>{repository.language}</Lang>
       <Link href={repository.html_url} target="_blank">ver</Link>
      </Footer>
    </Container>
  )
}

Repository.propTypes = {
  repository: Proptypes.shape({
      id: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired,
      html_url: Proptypes.string.isRequired,
      language: Proptypes.string.isRequired
    }).isRequired,
}

export default Repository
