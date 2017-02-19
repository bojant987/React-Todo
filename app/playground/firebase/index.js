import firebase from "firebase";

var config = {
    apiKey: "AIzaSyBl0g7eQIuX9piMUS8yswvkWSl75l524sU",
    authDomain: "bojan-todo-app.firebaseapp.com",
    databaseURL: "https://bojan-todo-app.firebaseio.com",
    storageBucket: "bojan-todo-app.appspot.com",
    messagingSenderId: "34940307097"
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();

firebaseRef.set({
    appName: "Todo App",
    isRunning: true,
    user: {
        name: "Bojan",
        age: 29
    }
});
