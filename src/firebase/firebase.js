import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


// remove keys before pushing updates to github
// Initialize Firebase

var prodConfig = {

};

var devConfig = {

};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};