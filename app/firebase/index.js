import firebase from "firebase";

try {
    var config = {
        apiKey: "AIzaSyBl0g7eQIuX9piMUS8yswvkWSl75l524sU",
        authDomain: "bojan-todo-app.firebaseapp.com",
        databaseURL: "https://bojan-todo-app.firebaseio.com",
        storageBucket: "bojan-todo-app.appspot.com",
        messagingSenderId: "34940307097"
    };
    firebase.initializeApp(config);
} catch (e) {

}
export var firebaseRef = firebase.database().ref();
export default firebase;
