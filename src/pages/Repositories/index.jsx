import React from 'react'
import Proptypes from 'prop-types'

import { Container } from './styles'
import Repository from './Repository'

function Repositories( {repositories}) {

  if (!repositories) {
    return <div>No repositories available.</div>;
  }

  const repos = repositories.map((repository) =>(
    <Repository key={repository.id} repository={repository}/>
  ));

  return <Container>{repos}</Container>
}

Repositories.propTypes = {
  repositories: Proptypes.arrayOf(
    Proptypes.shape({
      id: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired,
      description: Proptypes.string.isRequired,
      html_url: Proptypes.string.isRequired,
      language: Proptypes.string.isRequired
    }).isRequired
  ).isRequired,
}

export default Repositories
