import React from 'react'
import Boton from '@/Components/Bixer/Boton'
import { Head } from '@inertiajs/react'

function Index() {
  return (
    <>
        <Head title='Bienvenido'/>
        <main className='flex items-center justify-center h-screen'>
          <div className='text-center'>
            <img className='mx-auto mb-5' src="./img/BixerLogo.png" alt="Logo Bixer" />
            <Boton url={route('login')} text='Inicio'/>
          </div>
        </main>
    </>
  )
}

export default Index