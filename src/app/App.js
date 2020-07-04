import React from 'react';
import './App.css';
import HttpService from '../services/http-service';
import Product from '../product/product';

const http = new HttpService();

function App() {
  http.getProducts().then(
    (products) => {
      console.log(products);
    },
    (error) => {}
  );

  return (
    <div className="App">
      <div className="container App-main">
        <div className="row">
          <Product
            className="col-sm-4"
            price="25.55"
            title="Cool toy gun"
            imgUrl="https://images.freeimages.com/images/large-previews/a03/deep-fried-spring-chicken-in-golden-lemon-batter-with-salad-1632218.jpg"
          />
          <Product
            className="col-sm-4"
            price="25.55"
            title="Cool toy gun"
            imgUrl="https://images.freeimages.com/images/large-previews/a03/deep-fried-spring-chicken-in-golden-lemon-batter-with-salad-1632218.jpg"
          />
          <Product
            className="col-sm-4"
            price="25.55"
            title="Cool toy gun"
            imgUrl="https://images.freeimages.com/images/large-previews/a03/deep-fried-spring-chicken-in-golden-lemon-batter-with-salad-1632218.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
