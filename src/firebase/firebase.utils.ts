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

export const signInWithGoogle = () => {
  return auth.signInWithPopup(provider);
};

export const createUserProfileDocument = async (userAuth: firebase.User | null, additionalData?: {}) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error(error.toString());
    }
  }

  return userRef;
}

export default firebase;
