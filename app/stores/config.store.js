import firebase from 'firebase';

/**
 * Add code copied from firebase console
 */
let firebaseConfig = {
  apiKey: 'AIzaSyDPOktKtyqA2fcuERhztyx1o5S73Xtatgw',
  authDomain: 'dinder-56536.firebaseapp.com',
  databaseURL: 'https://dinder-56536.firebaseio.com',
  projectId: 'dinder-56536',
  storageBucket: 'dinder-56536.appspot.com',
  messagingSenderId: '72905376175',
  appId: '1:72905376175:web:a5c5979b5f46c54259ef5a',
  measurementId: 'G-FH8HXFRVR1',
};

export default class ConfigStore {
  constructor() {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    // firebase.analytics();

    this.splashTime = 3000;
    this.splashImage = require('../../images/splash.jpg');
    this.loginBG = require('../../images/login.jpg');
  }

  get SplashImage() {
    return this.splashImage;
  }

  get SplashTime() {
    return this.splashTime;
  }

  get LoginBG() {
    return this.loginBG;
  }
}
