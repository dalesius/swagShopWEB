import React, { Component } from 'react';
import './product.css';
import DataService from '../services/data-service';
import NotificationService, { NOTIF_WISHLIST_CHANGED } from '../services/notification-service';

let dataService = new DataService();
let notificationService = new NotificationService();

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { onWishlist: dataService.itemInWishlist() };

    // BINDINGS
    this.onButtonclicked = this.onButtonclicked.bind(this);
    this.onWishlistChanged = this.onWishlistChanged.bind(this);
  }

  componentDidMount() {
    notificationService.addObserver(NOTIF_WISHLIST_CHANGED, this, this.onWishlistChanged);
  }

  componentWillUnmount() {
    notificationService.removeObserver(this, NOTIF_WISHLIST_CHANGED);
  }

  onWishlistChanged = (newWishlist) => {
    this.setState({onWishlist: dataService.itemInWishlist(this.props.product)});
  }

  onButtonclicked = () => {
    this.state.onWishlist
      ? dataService.removeItemFromWishlist(this.props.product)
      : dataService.addItemToWishlist(this.props.product);
  };

  render() {
    
    var btnClass = this.state.onWishlist ? 'btn btn-danger' : 'btn btn-primary';
    var btnText = this.state.onWishlist ? 'Remove from wishlist' : 'Add to wishlist';

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
          <button
            className={btnClass}
            onClick={() => this.onButtonclicked()}
          >
            {btnText}
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
