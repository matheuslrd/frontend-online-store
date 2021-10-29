import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { buttonContainer, link, shoppingCartIcon } from './ButtonCartClassName';

export default function ButtonCart() {
  return (
    <div className={ buttonContainer }>
      <Link className={ link } to="/cart">
        <button type="button" data-testid="shopping-cart-button">
          <ShoppingCartIcon className={ shoppingCartIcon } />
        </button>
      </Link>
    </div>
  );
}
