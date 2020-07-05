import React, { Component } from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {
  render() {
    return (
      <li className="list-group-item">
        <a className='btn btn-outline-danger' href='#'>X</a>
        <span>{this.props.product.name} | ${this.props.product.price}</span>
      </li>
    );
  }
}

export default ProductCondensed;
