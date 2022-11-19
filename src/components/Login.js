import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import swal from 'sweetalert'
import { auth, baseDatos } from '../firebase'
import './style/styleInicio.css'



const Login = () => {
  const [modoRegistro, setModoRegistro]=useState(false)
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const [error, setError]= useState('')
  const navigate =useNavigate()

  const cambiarModo=()=>{
    setModoRegistro(!modoRegistro)
    setError('')
    setEmail('')
    setPassword('')}

  const guardarData=(e)=>{
    e.preventDefault()
    if (!email.trim()) {
      setError('Por favor, introduzca un Email')
    } else if(!password.trim()){
      setError('Por favor, introduzca una contraseña')
    } else if(password.length<=6){
      setError('La contraseña debe ser mayor a 6 caractéres')
    } else if(modoRegistro){
        registrar()
    } else{
      ingresar()
    }
  }

  const ingresar=useCallback(async ()=>{
        try {
          const res= await auth.signInWithEmailAndPassword(email, password)
          navigate('/admin')
          setError('')
          setEmail('')
          setPassword('')

        } catch (error) {
          if (error.code==="auth/invalid-email") {
            setError('Email no valido')
          }else if(error.code==="auth/wrong-password"){
            setError('Contraseña invalida')
          }else if(error.code==='auth/user-not-found'){
            setError('El correo ingresado no se encuentra registrado')
          }
        }
  }, [email, password, navigate])

  const registrar=useCallback(async ()=>{
        try {
          const res= await auth.createUserWithEmailAndPassword(email, password)
          await baseDatos.collection('usuariosLogin').doc(res.user.email).set({
            email:res.user.email, 
            id:res.user.uid
          })
          swal({
            title: "La cuenta se ha registrado con éxito",
            icon:"success",
            timer:2000
          });
          navigate('/')
          await baseDatos.collection(res.user.email).add()
          setEmail('')
          setPassword('')
          setError('')
        } catch (error) {
          if (error.code==="auth/invalid-email") {
            setError('Email no valido')
          } else if(error.code==='auth/email-already-in-use'){
            setError('El correo ingresado ya existe')
          }
        }
  }, [email, password, navigate])
  return (
    <div className='div-inicio'>
      <div className='container border shadow-sm p-3 mb-5 bg-body h-100 align-items-center d-flex flex-column'>
      <h3 className='text-center lead fs-2 mt-3 mb-2'>
        {
          modoRegistro ? 'REGISTRO DE USUARIO' : 'INICIAR SESIÓN'
        }
      </h3>
      <div className='row justify-content-center  col-5 h-50'>
        <form onSubmit={guardarData} className='col-11 mt-4'>
          {
            error ? <div className="alert alert-danger text-center" role="alert">
                       {error}
                    </div>
                    : null
          }
          <input type='email'
          className='form-control mb-3'
          placeholder='Ingrese e-mail'
          onChange={e=>setEmail(e.target.value)}
          value={email} />
          <input type='password'
          className='form-control mb-3'
          placeholder='Ingrese contraseña'
          onChange={e=>setPassword(e.target.value)}
          value={password} />
          <div className='d-grid gap-2'>
            <button className='btn btn-success'
            type='submit'>
              {
                modoRegistro ? 'REGISTRARSE' : 'INGRESAR'
              }
              </button>
            <button className='btn btn-secondary'
            onClick={()=>cambiarModo()}
            type='button'>
            {
              modoRegistro ? 'YA TENGO CUENTA' : 'CREAR CUENTA'
            }
            </button>
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Login