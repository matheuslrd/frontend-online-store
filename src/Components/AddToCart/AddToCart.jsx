import React from 'react';
import PropTypes from 'prop-types';
import { button } from './AddToCartClassName';

function addToStorage(selectedProduct) {
  let newCart = [];
  const cartList = JSON.parse(localStorage.getItem('cart'));
  if (cartList !== null) {
    newCart = [...cartList];
  }
  newCart.push(selectedProduct);
  localStorage.setItem('cart', JSON.stringify(newCart));
}

export default function AddToCart(props) {
  const { selectedProduct, dataTestId } = props;
  return (
    <button
      className={ button }
      data-testid={ dataTestId }
      type="button"
      onClick={ () => {
        addToStorage(selectedProduct);
      } }
    >
      Add
    </button>
  );
}

AddToCart.propTypes = {
  selectedProduct: PropTypes.shape(),
}.isRequired;
