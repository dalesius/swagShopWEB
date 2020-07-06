let instance = null;
var wishlist = [];

class DataService {
  constructor(){
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  addItemToWishlist(item){
    wishlist.push(item);
  }

  removeItemFromWishlist(item){
    for (var x = 0, len = wishlist.length; x < len ; x++){
      if (wishlist[x]._id === item._id) {
        wishlist.splice(x, 1);
        break;
      }
    }
  }
}