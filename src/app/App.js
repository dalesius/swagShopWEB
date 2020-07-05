import React, { Component } from 'react';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product';

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
        <div className="container App-main">
          <div className="row">{this.productsList()}</div>
        </div>
      </div>
    );
  }
}

export default App;
