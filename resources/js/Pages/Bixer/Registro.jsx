import React from 'react'
import { Head } from '@inertiajs/react'
import Contenedor from '@/Components/Bixer/Contenedor'
import Boton from '@/Components/Bixer/Boton'

function Registro() {
  return (
    <>
        <Head title='Registro'/>
        <main className='container mx-auto text-center py-5'>
            <Contenedor>
                <h1 className='text-4xl font-bold'>Registro</h1>
                <p>Porfavor, ingresa tus datos</p>
                <form action="" className='grid gap-4 text-left mt-3'>
                    <label className='mx-5' htmlFor="name">Nombre</label>
                    <input className='mx-5 mb-3 rounded-md text-black' type="text" placeholder='Ingresa tu nombre' id='name' name='name'/>

                    <label className='mx-5' htmlFor="lastname">Apellidos</label>
                    <input className='mx-5 mb-3 rounded-md text-black' type="text" placeholder='Ingresa tus apellidos' id='lastname' name='lastname'/>

                    <label className='mx-5' htmlFor="email">Correo electronico</label>
                    <input className='mx-5 mb-3 rounded-md text-black' type="text" placeholder='Ingresa tu correo electronico' id='email' name='email'/>

                    <label className='mx-5' htmlFor="password1">Contraseña</label>
                    <input className='mx-5 mb-3 rounded-md text-black' type="password" placeholder='Crea una contraseña' id='password1' name='password1'/>

                    <label className='mx-5' htmlFor="password2">Confirma tu contraseña</label>
                    <input className='mx-5 mb-3 rounded-md text-black' type="password" placeholder='Confirma tu contraseña' id='password2' name='password2'/>
                
                    <label className='mx-5' htmlFor="telefono">Ingresa tu telefono</label>
                    <input className='mx-5 mb-10 rounded-md text-black' type="text" placeholder='Numero de telefono' id='telefono' name='telefono'/>

                    <Boton url='sesion' text='Registrate'/>
                </form>

                <img className='mx-auto w-24 h-24' src="./img/BixerLogo2.png" alt="Logo Bixer" />
            </Contenedor>
        </main>
    </>
  )
}

export default Registro