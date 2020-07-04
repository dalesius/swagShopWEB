import React, { Component } from 'react';
import './product.css';

class Product extends Component {
  render() {
    return (
      <div className="card product">
        <img
          className="card-img-top"
          src={this.props.imgUrl}
          alt="Product"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">Price: ${this.props.price}</p>
          <a href="../app/App.js" className="btn btn-primary">
            Add to wishlist
          </a>
        </div>
      </div>
    );
  }
}

export default Product;
