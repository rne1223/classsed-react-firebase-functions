const admin = require('firebase-admin');

admin.initializeApp();

const db = admin.firestore();

const firebase = require("firebase");
const auth = require("firebase/auth");
const config = require("./config");
firebase.initializeApp(config);

module.exports = { admin, db, firebase, auth };
