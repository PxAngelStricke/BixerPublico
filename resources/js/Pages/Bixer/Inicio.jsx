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

      <Head title='Inicio'/>
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