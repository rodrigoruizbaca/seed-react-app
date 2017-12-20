import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyA3Mlv4IdZpMmmr2kG96c99TlRVjfSuOOI",
    authDomain: "react-f632d.firebaseapp.com",
    databaseURL: "https://react-f632d.firebaseio.com",
    projectId: "react-f632d",
    storageBucket: "react-f632d.appspot.com",
    messagingSenderId: "98777063988"
};

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};