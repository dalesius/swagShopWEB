import React, { Component } from 'react';
import './wishlist.css';
import ProductCondensed from '../product-condensed/product-condensed';
import DataService from '../services/data-service';
import NotificationService, { NOTIF_WISHLIST_CHANGED } from '../services/notification-service';

let notificationService = new NotificationService();

class Wishlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      wishlist: [],
    };

    // BINDINGS
    this.createWishlist = this.createWishlist.bind(this);
    this.onWishlistChanged = this.onWishlistChanged.bind(this);
  }

  componentDidMount() {
    notificationService.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishlistChanged);
  }

  componentWillUnmount() {
    notificationService.removeObserver(this, NOTIF_WISHLIST_CHANGED);
  }

  onWishlistChanged = (newWishlist) => {
    this.setState({wishlist: newWishlist});
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
