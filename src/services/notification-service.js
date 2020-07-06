let instance = null;
var observers = {};

// OBSERVER PATTERN + SINGLETON
class NotificationService {
  // SINGLETON
  constructor(){
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  removeObserver = (observer, notifName) => {
    // CHEQUEA QUE EL TIPO DE OBSERVADOR EXISTA Y LO REMUEVE.
    let obs = observers[notifName];
    if (obs) {
      for (var index = 0, len = obs.length; index < len; index++) {
        if (observer === obs[index].observer) {
          observers[notifName].splice(index, 1);
        }
      }
    }
  }

  addObserver = (notifName, observer, callback) => {
    // CHEQUEA QUE EL TIPO DE OBSERVADOR ESTE CREADO, SI NO, LO CREA.
    let obs = observers[notifName];
    if (!obs) {
      observers[notifName]= [];
    }

    // METO EL NUEVO OBSERVADOR A LA LISTA CORRESPONDIENTE.
    let obj = {observer: observer, callback: callback};
    observers[notifName].push(obj);
  }
}

export default NotificationService;