import './firebase'; // инициализировать Firebase
import { getAuth } from 'firebase/auth';

const auth = getAuth();
// export auth functions

export function signInWithEmail(email, password) {
  return auth.signInWithEmailAndPassword(email, password); 
}

export function signOut() {
  return auth.signOut();
}


