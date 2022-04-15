import auth from '@react-native-firebase/auth';

export function singIn({email, password}) {
    return auth().signInWithEmailAndPassword(email, password)
}

export function singUp({email, password}) {
    return auth().createUserWithEmailAndPassword(email, password)
}

export function subscribeAuth(callback) {
    return auth().onAuthStateChanged(callback)
}

export function signOut () {
    return auth().signOut();
}