import React, { Component } from 'react';
import './product-condensed.css';
import DataService from '../services/data-service';

let dataService = new DataService();

class ProductCondensed extends Component {
  constructor(props) {
    super(props);

    // BINDINGS
    this.onButtonClicked = this.onButtonClicked.bind(this);
  }

  onButtonClicked = () => {
    dataService.removeItemFromWishlist(this.props.product);
  }

  render() {
    return (
      <li className="list-group-item">
        <button className='btn btn-outline-danger' onClick={this.onButtonClicked}>X</button>
        <span> {this.props.product.title} | ${this.props.product.price}</span>
      </li>
    );
  }
}

export default ProductCondensed;
