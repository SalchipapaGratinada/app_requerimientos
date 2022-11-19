import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Admin from './components/Admin';
import Inicio from './components/Inicio';
import Login from './components/Login';
import NavBar from './components/NavBar';
import { auth } from './firebase';

function App() {

  const [firebaseUser, setFirebaseUser]= useState(false)

  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
      if(user){
        setFirebaseUser(user)
      }else{
        setFirebaseUser(false)
      }
    })
  },[])

  return (
    <Router>
    <div className='container'>
      <NavBar autenticacionUser={firebaseUser} />
      <Routes>
        <Route path='/' element={<Inicio autenticacionUser={firebaseUser}></Inicio>}/>
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/admin' element={<Admin></Admin>}/>
      </Routes>
    </div>
    </Router>
  ) 
  ;
}

export default App;
