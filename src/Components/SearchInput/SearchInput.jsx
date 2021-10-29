import React from 'react';
import PropTypes from 'prop-types';
import { SearchIcon } from '@heroicons/react/solid';
import {
  form,
  inputContainer,
  input,
  button,
  searchIcon,
} from './SearchInputClassName';

export default function SearchInput(props) {
  const { query, handleChange, handleSubmit } = props;
  return (
    <form className={ form } onSubmit={ handleSubmit }>
      <div className={ inputContainer }>
        <input
          className={ input }
          name="query"
          value={ query }
          placeholder="Pesquisar produtos..."
          onChange={ handleChange }
          data-testid="query-input"
        />
        <button className={ button } type="submit" data-testid="query-button">
          <SearchIcon className={ searchIcon } />
        </button>
      </div>
    </form>
  );
}

SearchInput.propTypes = {
  stateHome: PropTypes.shape({
    query: PropTypes.string,
    products: PropTypes.arrayOf(),
  }),
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
}.isRequired;
