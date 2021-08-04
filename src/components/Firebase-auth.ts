import firebase from "firebase";
import "firebase/auth";
import "firebase/analytics";

var firebaseConfig = {
    apiKey: "AIzaSyBFncs5IIsEjar3G8_NvIPY12enj4mKCXI",
    authDomain: "sharestash2.firebaseapp.com",
    projectId: "sharestash2",
    storageBucket: "sharestash2.appspot.com",
    messagingSenderId: "730310464041",
    appId: "1:730310464041:web:94b5681f778c99b1a7c238",
    measurementId: "G-14YVBNWRNN"
};

// Initialize Firebase
const InitializeFirebase = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
}

async function loginWithGoogle() {
    return new Promise(async function (resolve, reject) {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(async (result) => {
            console.log(result)
            resolve(result)
        }).catch((error) => {
            console.error(error)
            reject(error)
        });
    });
}

async function createUser(_email: string, _password: string) {
    return new Promise(async function (resolve, reject) {
        firebase.auth().createUserWithEmailAndPassword(_email, _password).then(async (result) => {
            resolve(result)
        }).catch((error) => {
            console.log('ERR Create user', error)
            reject(error)
        });
    });
}

async function loginWithFacebook() {

    return new Promise(async function (resolve, reject) {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider).then(async (result) => {
            console.log(result)
            resolve(result)
        }).catch((error) => {
            console.error(error)
            reject(error)
        });
    });
}

async function updateDisplayName(_displayName) {
    return new Promise(async function (resolve, reject) {
        if (firebase.auth().currentUser == null)
            reject();

        firebase.auth().currentUser.updateProfile({
            displayName: _displayName
        }).then(async (result) => {
            resolve(result)
        })
    })
}

async function loginWithPassword(email: any, password: any) {
    return new Promise(async function (resolve, reject) {
        firebase.auth().signInWithEmailAndPassword(email, password).then(async (result: any) => {
            console.log(result)
            //   var user = fbauth.currentUser;
            //   console.log(user.refreshToken)
            let token = await firebase.auth().currentUser.getIdToken(true);
            result.token = token;
            resolve(result)
        }).catch((error) => {
            console.log('ERR loginWithPassword', error)
            reject(error)
        });
    });
}

async function logout() {
    return new Promise(async function (resolve, reject) {
        firebase.auth().signOut().then(() => {
            resolve()
        }).catch((error) => {
            reject(error)
        });
    });
}



export { loginWithGoogle, loginWithPassword, loginWithFacebook, logout, createUser, updateDisplayName, InitializeFirebase };