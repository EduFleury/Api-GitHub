import React from 'react'
import Proptypes from 'prop-types'
import { Container, Selector, Cleaner} from './styles';

function Filter({languages, currentLanguage, onClick}) {
  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected' : ''}
      onClick={() => onClick && onClick(name)}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ));

  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick(undefined)}>Limpar</Cleaner>
    </Container>
  )
}

Filter.defaultProps = {
  currentLanguage: null,
  onClick: null,
};

Filter.propTypes = {
  languages: Proptypes.arrayOf(
    Proptypes.shape({
      name: Proptypes.string.isRequired,
      count: Proptypes.number.isRequired,
      color: Proptypes.string,
    }).isRequired
  ).isRequired,
  currentLanguage: Proptypes.string,
  onClick: Proptypes.func,
};

export default Filter
