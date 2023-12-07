import React from 'react'
import Boton from '@/Components/Bixer/Boton'
import { Head } from '@inertiajs/react'

function Index() {
  return (
    <>
        <Head>
          <title>Software de goniometria: Inicio</title>
          <meta name="description" content="Bixer es una aplicación web de gestión y graficación avanzada en tiempo real de los datos recabados por el goniómetro digital Bixer; con el objetivo de facilitar el seguimiento a los casos clinicos de los fisioterapeutas." />
          <meta name="keywords" content="inicio, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" />
          <meta name="author" content="byLastLine_" />
        </Head>
        <main className='flex items-center justify-center h-screen'>
          <div className='text-center'>
            <img className='mx-auto mb-5' src="./img/BixerLogo.webp" alt="Logo Bixer" />
            <Boton url={route('login')} text='Inicio'/>
          </div>
        </main>
    </>
  )
}

export default Index