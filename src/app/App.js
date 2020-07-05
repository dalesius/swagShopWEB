import React, { Component } from 'react';
import './App.css';

// SERVICES
import HttpService from '../services/http-service';

// COMPONENTS
import Product from '../product/product';
import Wishlist from '../wishlist/wishlist';

const http = new HttpService();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
    // BINDINGS
    this.loadData = this.loadData.bind(this);
    this.productsList = this.productsList.bind(this);

    this.loadData();
  }

  loadData = () => {
    var self = this;
    http.getProducts().then(
      (productsFromDB) => {
        self.setState({
          products: productsFromDB,
        });
      },
      (error) => {}
    );
  };

  productsList = () => {
    const list = this.state.products.map((product) => (
      <div className="col-sm-4" key={product._id}>
        <Product
          title={product.title}
          price={product.price}
          imgUrl="https://images.freeimages.com/images/large-previews/a03/deep-fried-spring-chicken-in-golden-lemon-batter-with-salad-1632218.jpg"
        />
      </div>
    ));
    return list;
  };

  render() {
    return (
      <div className="App">
        <div className="container-fluid App-main">
          <div className="row">
            <div className="col-sm-8">
              <div className="row">{this.productsList()}</div>
            </div>
            <div className="col-sm-4">
              <Wishlist />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
