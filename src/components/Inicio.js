import React from 'react'
import logoDev from './img/logo5122.png'
import logoCuc from './img/logocuc.png'
import './style/styleInicio.css'

const Inicio = ({ autenticacionUser }) => {
  const fech = new Date().toLocaleDateString()
  return (
    <div className='div-inicio'>
      {
        autenticacionUser !== false ? (<div className="alert alert-info text-center mt-3" role="alert">
          Iniciaste Seccion. Administra Servicios en la pestaña de Admin.
        </div>) : ''
      }
      <div className='container border shadow-sm p-3 mb-5 bg-body h-100'>
        <div className='container d-flex gap-3'>
          <h1 className='pt-2 '>BIENVENIDOS - DEVELOPBATS</h1>
          <div className='w-25'>
            <img src={logoDev} alt='Logo React' className='w-25'></img>
          </div>
        </div>
        <main className='container'>
          <div>
            <p className='mx-1 lead fs-4'>Universidad De La Costa - CUC - Mesa De Servicios-Requerimientos.</p>
            <div className='w-25'>
              <img src={logoCuc} alt='Logo React' className='w-25'></img>
            </div>
          </div>
          <section className='mt-4'>
            <h3 className='text-center mb-4'>Realiza Tu Requerimiento</h3>
            <div className='d-flex justify-content-evenly w-100 mt-5'>
              <div className="card border shadow-sm col-5">
                <div className="card-header text-center">
                  REQUERIMIENTO
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item"><strong>Categoria: </strong>Multimuebles</li>
                  <li className="list-group-item"><strong>Tipo: </strong>Aseo</li>
                  <li className="list-group-item"><strong>Lugar: </strong>Sotano</li>
                  <li className="list-group-item"><strong>Detalles: </strong>Los Baños Estan Sucios</li>
                  <li className="list-group-item"><strong>Fecha solicitud: </strong>{fech}</li>
                </ul>
              </div>
              <div className='border shadow-sm con-img col-5 bc-imagen'>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Inicio