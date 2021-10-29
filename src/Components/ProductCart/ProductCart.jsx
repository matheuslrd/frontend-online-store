import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './productCart.css';

class ProductCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberProductsCart: 1,
      totalPrice: 0,
    };
    this.productIncreaseQuantity = this.productIncreaseQuantity.bind(this);
    this.productDecreaseQuantity = this.productDecreaseQuantity.bind(this);
    this.handlePrice = this.handlePrice.bind(this);
    this.multiplyPrice = this.multiplyPrice.bind(this);
  }

  componentDidMount() {
    this.handlePrice();
  }

  handlePrice() {
    const {
      product: { price },
    } = this.props;
    this.setState({ totalPrice: price });
  }

  productIncreaseQuantity() {
    this.setState(
      (_prevState) => ({
        numberProductsCart: _prevState.numberProductsCart + 1,
      }),
      () => {
        this.multiplyPrice();
      },
    );
  }

  productDecreaseQuantity() {
    const { numberProductsCart } = this.state;
    this.setState(
      (_prevState) => ({
        numberProductsCart: _prevState.numberProductsCart - 1,
      }),
      () => {
        if (numberProductsCart <= 0) return this.setState({ numberProductsCart: 0 });
        // Talvez seja interessante chamar a função removeProduct quando a quantidade for zero;
        this.multiplyPrice();
      },
    );
  }

  multiplyPrice() {
    const { numberProductsCart } = this.state;
    const {
      product: { price },
    } = this.props;
    this.setState({ totalPrice: numberProductsCart * price });
  }

  render() {
    const {
      props: { product, removeProduct },
      state: { numberProductsCart, totalPrice },
    } = this;
    const { title, thumbnail, id } = product;
    return (
      <div className="product-cart-body" id={ id }>
        <button
          type="button"
          className="button-remove-product"
          onClick={ removeProduct }
        >
          X
        </button>
        <section className="body-product">
          <img
            width="150px"
            src={ thumbnail }
            alt={ `Imagem do produto ${title}` }
          />
        </section>
        <section className="product-name">
          <p data-testid="shopping-cart-product-name">{title}</p>
        </section>
        <section className="add-product-body">
          <button
            type="button"
            className="btn-product btn-decrease"
            data-testid="product-decrease-quantity"
            onClick={ this.productDecreaseQuantity }
          >
            -
          </button>
          <p
            className="number-products-cart"
            data-testid="shopping-cart-product-quantity"
          >
            {numberProductsCart}
          </p>
          <button
            type="button"
            className="btn-product btn-add"
            data-testid="product-increase-quantity"
            onClick={ this.productIncreaseQuantity }
          >
            +
          </button>
        </section>
        <section className="price-body">{`R$ ${totalPrice}`}</section>
      </div>
    );
  }
}

ProductCart.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default ProductCart;
