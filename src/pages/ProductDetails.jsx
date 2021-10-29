import React from 'react';
import AddToCart from '../Components/AddToCart/AddToCart';
import ButtonCart from '../Components/ButtonCart/ButtonCart';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
    this.retrieveFromLocalStorage = this.retrieveFromLocalStorage.bind(this);
  }

  componentDidMount() {
    this.retrieveFromLocalStorage();
  }

  retrieveFromLocalStorage() {
    const selectedProduct = localStorage.getItem('selectedProduct');
    const product = JSON.parse(selectedProduct);
    this.setState({ product });
    // aqui talves tenha que apagar o produto do local storage depois
  }

  render() {
    const {
      product: { title, thumbnail, price }, product,
    } = this.state;
    return (
      <main className="product-details-page">
        <header className="header-product-details">
          <ButtonCart />
        </header>
        <div data-testid="product-detail-name">
          <p>{title}</p>
          <img width="100px" src={ thumbnail } alt={ title } />
          <p>
            {new Intl.NumberFormat('pr-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(price)}
          </p>
          <AddToCart
            selectedProduct={ product }
            dataTestId="product-detail-add-to-cart"
          />
        </div>
      </main>
    );
  }
}

export default ProductDetails;
