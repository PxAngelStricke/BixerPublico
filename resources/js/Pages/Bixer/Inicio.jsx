import React from 'react'
import { Head } from '@inertiajs/react'
import Contenedor2 from '@/Components/Bixer/Contenedor/Contenedor2'
import Contenedor from '@/Components/Bixer/Contenedor'
import Card from '@/Components/Bixer/Cards'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'


function Inicio({ auth }) {
  return (
    <>
    <AuthenticatedLayout user={auth.user}>

    <Head>
        <title>Software de goniometria: Menu principal</title>
        <meta name="description" content="La aplicación web de goniometría de Bixer es posible gestionar pacientes y graficar en tiempo real los movimientos realizados durante la sesión de fisioterapia o rehabilitación." />
        <meta name="keywords" content="menu, menu principal, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" />
        <meta name="author" content="byLastLine_" />
    </Head>
      <div className='flex justify-center items-center xl:py-20'>
        <Contenedor>
          <div className='flex flex-col justify-center px-3 items-center lg:flex-row lg:space-x-8'>
            <Card img='./img/Pacientes.png' text='Pacientes' description='Gestionar pacientes' url='pacientes'/>
            <Card img='./img/Graph.png' text='Graficador' description='Iniciar un muestreo' url='graficador'/>
          </div>
        </Contenedor>
      </div>
    </AuthenticatedLayout>
    </>
  )
}


export default Inicio