import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyBnf4lX8T1-jmLgxNUGcr97_60R5Pdn66M',
  authDomain: 'expresscal-7267c.firebaseapp.com',
  databaseURL: 'https://expresscal-7267c.firebaseio.com',
  projectId: 'expresscal-7267c',
  storageBucket: 'expresscal-7267c.appspot.com',
  messagingSenderId: '412665527858'
};
firebase.initializeApp(config);

//store data
export const database = firebase.database().ref('posts/');

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default config;
