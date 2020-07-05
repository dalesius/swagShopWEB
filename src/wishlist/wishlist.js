import React, { Component } from 'react';
import './wishlist.css';
import '../product-condensed/product-condensed';
import ProductCondensed from '../product-condensed/product-condensed';

class Wishlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishlist: [
        {
          name: 'LALALA',
          price: 15.44,
          _id: '1k3h13lh13',
        },
        {
          name: 'LALALA',
          price: 15.44,
          _id: '1k3hd3lh13',
        },
        {
          name: 'LALALA',
          price: 15.44,
          _id: '1k3113bh13',
        },
      ],
    };

    // BINDINGS
    this.createWishlist = this.createWishlist.bind(this);
  }

  createWishlist = () => {
    const list = this.state.wishlist.map((product) => (
      <ProductCondensed product={product} key={product._id} />
    ));
    return list;
  };

  render() {
    return (
      <div className="card wishlist">
        <div className="card-header">Wishlist</div>
        <ul className="list-group list-group-flush">{this.createWishlist()}</ul>
      </div>
    );
  }
}

export default Wishlist;
