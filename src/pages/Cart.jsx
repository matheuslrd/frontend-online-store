import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCart from '../Components/ProductCart/ProductCart';

class Cart extends Component {
  constructor(props) {
    super(props);

    this.importFromStorage = this.importFromStorage.bind(this);
    this.mapProducts = this.mapProducts.bind(this);
    this.recoveryTotalPrice = this.recoveryTotalPrice.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.state = {
      totalPrice: 0,
      shoppingCart: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('cart') === null) {
      localStorage.setItem('cart', JSON.stringify([]));
    } else {
      this.importFromStorage();
    }
  }

  importFromStorage() {
    const shoppingCart = JSON.parse(localStorage.getItem('cart'));
    this.setState({
      shoppingCart,
    }, () => this.recoveryTotalPrice());
  }

  recoveryTotalPrice() {
    const { shoppingCart } = this.state;
    const totalPrice = shoppingCart.reduce((acc, product) => {
      acc += product.price;
      return acc;
    }, 0);

    this.setState({ totalPrice });
  }

  removeProduct({ target }) {
    target.parentNode.parentNode.removeChild(target.parentNode);
  }

  mapProducts() {
    const { shoppingCart } = this.state;
    return shoppingCart.map((product) => (
      <ProductCart
        key={ product.id }
        product={ product }
        removeProduct={ this.removeProduct }
      />
    ));
  }

  render() {
    const emptyCartMessage = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
    );
    const { totalPrice, shoppingCart } = this.state;
    const priceConverted = (
      new Intl.NumberFormat('pr-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(totalPrice)
    );
    return (
      <main className="shopping-cart-page">
        <header className="header-cart">
          <Link to="/">
            Voltar
          </Link>
          <h1>Carrinho de Compras</h1>
        </header>
        <section className="products">
          { shoppingCart.length === 0 ? emptyCartMessage : this.mapProducts() }
        </section>
        <section className="total-price">
          <p>
            { `Valor total da compra: ${priceConverted}` }
          </p>
        </section>
        <button type="button"> Finalizar Compra </button>
      </main>
    );
  }
}

export default Cart;
