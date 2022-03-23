import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyBOpPAb3VfIwJis3nqNlW60dr2pHppKyR8',
  authDomain: 'link-70e1c.firebaseapp.com',
  databaseURL:
    'https://link-70e1c-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'link-70e1c',
  storageBucket: 'link-70e1c.appspot.com',
  messagingSenderId: '356291168825',
  appId: '1:356291168825:web:094ccd87848867f2f8dbe8',
  measurementId: 'G-V46Z1VF42B',
});

export const auth = app.auth();
export const db=firebase.firestore()
export default app;
