import React from 'react';
import PropTypes from 'prop-types';
import {
  container,
  asideContainer,
  aside,
  h5,
  input,
} from './CategoriesClassName';

export default function Categories(props) {
  const { categories, handleChange } = props;
  if (categories.length === 0) {
    return null;
  }
  return (
    <div className={ container }>
      <div className={ asideContainer }>
        <aside className={ aside }>
          <h5 className={ h5 }>Categorias:</h5>
          <ul>
            {categories.map((category) => (
              <li key={ category.id }>
                <input
                  className={ input }
                  data-testid="category"
                  name="selectedCategory"
                  onClick={ handleChange }
                  type="button"
                  value={ category.name }
                  id={ category.id }
                />
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.arrayOf(),
  handleChange: PropTypes.func,
}.isRequired;
