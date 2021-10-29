import React from 'react';
import PropTypes from 'prop-types';
import ProductNotFound from '../ProductNotFound/ProductNotFound';
import AddTocart from '../AddToCart/AddToCart';
import '../../pages/home.css';
import {
  container,
  button,
  h2,
  imageContainer,
  image,
  p,
} from './ProductCardClassName';

export default function ProductCard(props) {
  const { products, handleClick } = props;
  if (products.length === []) {
    return <ProductNotFound />;
  }
  return products.map((product) => (
    <div className={ container } key={ product.id }>
      <button
        className={ button }
        type="button"
        value={ product.title }
        data-testid="product-detail-link"
        onClick={ () => {
          handleClick(product);
        } }
      >
        <div data-testid="product">
          <h2 className={ h2 }>{product.title}</h2>
          <div className={ imageContainer }>
            <img
              className={ image }
              src={ product.thumbnail }
              alt={ product.title }
            />
          </div>
          <p className={ p }>
            {new Intl.NumberFormat('pr-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(product.price)}
          </p>
        </div>
      </button>
      <AddTocart selectedProduct={ product } dataTestId="product-add-to-cart" />
    </div>
  ));
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(),
}.isRequired;
