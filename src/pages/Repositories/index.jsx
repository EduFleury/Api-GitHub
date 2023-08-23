import React from 'react'
import Proptypes from 'prop-types'

import { Container } from './styles'
import Repository from './Repository'

function Repositories( {repositories, currentLanguage}) {

  if (!repositories) {
    return <div>No repositories available.</div>;
  }

  const repos = repositories
    .filter((repository) => currentLanguage === undefined || repository.language === currentLanguage)
    .map((repository) =>(
      <Repository key={repository.id} repository={repository}/>
  ));

  return <Container>{repos}</Container>
}

Repositories.defaultProps = {
  currentLanguage: undefined,
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
  currentLanguage: Proptypes.string,
}

export default Repositories
