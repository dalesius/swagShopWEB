import React, { Component } from 'react';
import './product-condensed.css';

class ProductCondensed extends Component {
  render() {
    return (
      <li className="list-group-item">
        <button className='btn btn-outline-danger'>X</button>
        <span>{this.props.product.name} | ${this.props.product.price}</span>
      </li>
    );
  }
}

export default ProductCondensed;
