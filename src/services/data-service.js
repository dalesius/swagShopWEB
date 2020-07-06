import NotificationService, {NOTIF_WISHLIST_CHANGED} from './notification-service';

var notificationService = new NotificationService();
let instance = null;
var wishlist = [];

class DataService {
  constructor() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  addItemToWishlist(item) {
    wishlist.push(item);
    notificationService.postNotification(NOTIF_WISHLIST_CHANGED, wishlist);
  }

  removeItemFromWishlist(item) {
    for (var x = 0, len = wishlist.length; x < len; x++) {
      if (wishlist[x]._id === item._id) {
        wishlist.splice(x, 1);
        notificationService.postNotification(NOTIF_WISHLIST_CHANGED, wishlist);
        break;
      }
    }
  }
}

export default DataService;
