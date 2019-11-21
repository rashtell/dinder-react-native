import {observable, action, decorate} from 'mobx';
import firebase from 'firebase';

class AuthStore {
  authUser = null;

  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      this.authUser = user;
    });
  }

  signIn({email, password}) {
    if (this.authUser) {
      return Promise.resolve(this.authUser);
    }
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
}

export default decorate(AuthStore, {
  authUser: observable,
  signIn: action,
});
