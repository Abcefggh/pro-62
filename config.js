import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDXEeLE9UGSmHBaXqesUaKGJMOvWjHQteU",
  authDomain: "pro-60-3c285.firebaseapp.com",
  databaseURL: "https://pro-60-3c285-default-rtdb.firebaseio.com",
  projectId: "pro-60-3c285",
  storageBucket: "pro-60-3c285.appspot.com", 
  messagingSenderId: "101982242217",
  appId: "1:101982242217:web:30cfcfa983190417adb0b8"
};


if(!firebase.apps.length){
let app=firebase.initializeApp(firebaseConfig)
}

export default firebase.database();

