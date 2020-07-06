// LA IDEA DEL SERVICIO ES MANIPULAR LAS INTERACCIONES 
// CREADAS POR EL DATA-SERVICE, PARA ESO DEBO CREAR UNA
// LISTA CON LAS DIFERENTES INTERACCIONES Y DENTRO DE 
// CADA UNA DE ELLAS AGREGAR A SUS OBSERVADORES, O, MEJOR
// DICHO, A LOS QUE QUIEREN HACER ALGO CUANDO ESA INTERACCION
// SUCEDE. CUANDO SUCEDEN, RECORRO LA LISTA DE OBSERVADORES
// DENTRO DE ESA INTERACCION EN PARTICULAR Y EJECUTO LA
// ACCION QUE QUIEREN HACER USANDO LA DATA PROVISTA.

// CONSTANTES GLOBALES DE NOTIFICACIONES
export const NOTIF_WISHLIST_CHANGED = 'notif_wishlist_changed';

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
  
  postNotification = (notifName, data) => {
    // NOTIFICO A TODOS LOS OBSERVADORES DE ESTE EVENTO QUE HUBO UN CAMBIO.
    let obs = observers[notifName];
    for (let index = 0; index < obs.length; index++) {
      const obj = obs[index];
      obj.callback(data);
    }
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