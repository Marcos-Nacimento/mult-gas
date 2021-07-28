import * as firebase from 'firebase'
require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyDF7t9OFp1_RQIk26HoLN8Zi3-Asz50Lpo",
    authDomain: "multgas-26417.firebaseapp.com",
    projectId: "multgas-26417",
    storageBucket: "multgas-26417.appspot.com",
    messagingSenderId: "470250218047",
    appId: "1:470250218047:web:257236c2dbf0caa47e4e8a",
    measurementId: "G-CBTQS9Z1KR",
};

firebase.initializeApp(firebaseConfig);

export const Firebase = firebase;
