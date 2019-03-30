import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAxLmrHcGVj7WRi16eOtF5Kbf79-BmMICw",
    authDomain: "react-app-8ba5e.firebaseapp.com",
    databaseURL: "https://react-app-8ba5e.firebaseio.com",
    projectId: "react-app-8ba5e",
    storageBucket: "react-app-8ba5e.appspot.com",
    messagingSenderId: "68850405975"
  };
  export default firebase.initializeApp(config);

  export const checkAuth = () => {
	return firebase.auth().currentUser;
	//const user = await firebaseApp.auth().onAuthStateChanged()
	//return user
  }