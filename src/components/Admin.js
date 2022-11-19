import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { auth } from '../firebase'
import Registro from './Registro'


const Admin = () => {
  const navigate= useNavigate()
  const [user, setUser]= useState(null)

  useEffect(()=>{
    if(auth.currentUser){
      setUser(auth.currentUser)
    }
  }, [])

  return (
    <div>
      {
        user&& 
        <Registro user={user} />
      }
    </div>
  )
}

export default Admin