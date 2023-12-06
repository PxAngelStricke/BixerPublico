import React from 'react'
import { Head, Link } from '@inertiajs/react'
import Contenedor from '@/Components/Bixer/Contenedor'
import Boton from '@/Components/Bixer/Boton'

function Usuario() {
  return (
    <>
      <Head title='Usuario'/>
      <main className='container mx-auto text-center py-12'>
        <Contenedor>
          <h1 className='text-4xl font-bold mb-5'>Usuario</h1>
          <form action="" className='grid gap-4 text-left'>
            <label className='mx-5' htmlFor="name">Nombre</label>
            <input className='mx-5 mb-3 rounded-md text-black' type="text" id='name' name='name'/>

            <label className='mx-5' htmlFor="lastname">Apellidos</label>
            <input className='mx-5 mb-3 rounded-md text-black' type="text" id='lastname' name='lastname'/>

            <label className='mx-5' htmlFor="email">Correo electronico</label>
            <input className='mx-5 mb-3 rounded-md text-black' type="text" id='email' name='email'/>

            <label className='mx-5' htmlFor="phone">Telefono</label>
            <input className='mx-5 mb-10 rounded-md text-black' type="text" id='phone' name='phone'/>
          </form>
          <div className='space-x-5'>
            <Boton url='inicio' text='Volver'/>
            <Boton>
              <Link href={route('logout')} className='uppercase' method='post' as='button'>Cerrar sesion</Link>
            </Boton>
          </div>
        </Contenedor>
      </main>
    </>
  )
}

export default Usuario