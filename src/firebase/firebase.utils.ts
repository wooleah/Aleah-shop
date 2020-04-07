import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'

firebase.initializeApp({
  apiKey: "AIzaSyCvD2BLLuTNnS9NtjBPqNQ_a5j4E1mWk0A",
  authDomain: "aleahshop-524ef.firebaseapp.com",
  databaseURL: "https://aleahshop-524ef.firebaseio.com",
  projectId: "aleahshop-524ef",
  storageBucket: "aleahshop-524ef.appspot.com",
  messagingSenderId: "407869597839",
  appId: "1:407869597839:web:e94e78f42db4eb78e4e8fa"
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// Specify Oauth2.0 scopes
provider.addScope('profile');
provider.addScope('email');
// Make user select an account
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
