import React, { Component } from 'react';
import './product.css';
import DataService from '../services/data-service';

let dataService = new DataService();

class Product extends Component {
  constructor(props){
    super(props);

    // BINDINGS
    this.onButtonclicked = this.onButtonclicked.bind(this);
  }

  onButtonclicked = () => {
    dataService.addItemToWishlist(this.props.product);
  }

  render() {
    return (
      <div className="card product">
        <img
          className="card-img-top"
          src={this.props.imgUrl}
          alt="Product"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{this.props.product.title}</h5>
          <p className="card-text">Price: ${this.props.product.price}</p>
          <button className="btn btn-primary" onClick={() => this.onButtonclicked()} >
            Add to wishlist
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
