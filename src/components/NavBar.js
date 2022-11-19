import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { auth } from '../firebase'
import logoDev from './img/logo196.png'


const NavBar = ( {autenticacionUser} ) => {

  const navigate= useNavigate()

  const cerrarSesion=()=>{
    auth.signOut()
    .then(()=>{
      navigate('/login')
    })
  }

  return (
  <header className='navbar navbar-dark bg-dark px-3'>
      <Link to='/' className='navbar-brand'>{<img src={logoDev} className='w-25' alt='Logo de dev'></img>}</Link>
      <nav className='d-flex'>
        <Link to='/' className='btn btn-dark '>Inicio</Link>
        {
          autenticacionUser === false ?  (<Link to='/login' className='btn btn-dark '>Login</Link>): (<Link to='/admin' className='btn btn-dark '>Admin</Link>)
        }
        {
          autenticacionUser !== false ? (<button className='btn btn-dark'
          onClick={()=>cerrarSesion()}>Salir</button>):null
        }
      </nav>
  </header>
  )
}

export default NavBar