import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCMdbba8KijSwAb82LEbxdSj1qzY7P-SoY",
  authDomain: "crud-56946.firebaseapp.com",
  projectId: "crud-56946",
  storageBucket: "crud-56946.appspot.com",
  messagingSenderId: "402496006645",
  appId: "1:402496006645:web:0d56644f668ca6f61b18bc"
};


app.initializeApp(firebaseConfig);
const baseDatos = app.firestore()
const auth = app.auth()

export{baseDatos, auth, app}
