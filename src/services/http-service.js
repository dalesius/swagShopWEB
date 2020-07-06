import 'whatwg-fetch';

let instance = null;

class HttpService {
  // SINGLETON
  constructor(){
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  getProducts = () => {
    var promise = new Promise((resolve, reject) => {
      fetch('http://localhost:3000/product')
      .then(response => {
        resolve(response.json());
      });
    });

    return promise;
  };
}

export default HttpService;
