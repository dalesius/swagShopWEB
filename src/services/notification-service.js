// PATRON OBSERVER IMPLEMENTADO
// ----------------------------
// LA IDEA DEL SERVICIO ES MANIPULAR LOS EVENTOS
// CREADOS POR EL DATA-SERVICE, PARA ESO DEBO CREAR
// UNA LISTA CON LOS DIFERENTES EVENTOS Y DENTRO DE 
// CADA UNO DE ESTOS EVENTOS AGREGAR A SUS OBSERVADORES
// PARA QUE HAGAN ALGO CUANDO ESE EVENTO SE DISPARA.
// CUANDO SUCEDEN, RECORRO LA LISTA DE OBSERVADORES
// DENTRO DE ESE EVENTO EN PARTICULAR Y EJECUTO LA
// ACCION (CALLBACK) QUE QUIEREN HACER USANDO LA DATA
// PROVISTA.

// CONSTANTES GLOBALES DE NOTIFICACIONES
export const NOTIF_WISHLIST_CHANGED = 'notif_wishlist_changed';

let instance = null;
let observers = {};

class NotificationService {
  // SINGLETON
  constructor(){
    if (!instance) {
      instance = this;
    }
    return instance;
  }
  
  postNotification = (notifName, data) => {
    // NOTIFICO A TODOS LOS OBSERVADORES DE ESTE EVENTO QUE HUBO UN CAMBIO PARA QUE EJECUTEN SU ACCION
    let obs = observers[notifName];
    for (let i = 0, len = obs.length; i < len; i++) {
      const obj = obs[i];
      obj.callback(data);
    }
  }

  // CHEQUEA QUE EL OBSERVADOR EXISTA Y LO REMUEVE.
  removeObserver = (observer, notifName) => {
    let obs = observers[notifName];
    if (obs) {
      for (var i = 0, len = obs.length; i < len; i++) {
        if (observer === obs[i].observer) {
          observers[notifName].splice(i, 1);
        }
      }
    }
  }

  // CHEQUEA QUE EL OBSERVADOR EXISTA, SI NO, LO CREA.
  addObserver = (notifName, observer, callback) => {
    let obs = observers[notifName];
    if (!obs) {
      observers[notifName]= [];
    }

    let obj = {observer: observer, callback: callback};
    observers[notifName].push(obj);
  }
}

export default NotificationService;