import React from 'react'
import { Head } from '@inertiajs/react'
import Boton from '@/Components/Bixer/Boton'
import Contenedor from '@/Components/Bixer/Contenedor'

function Login() {
  return (
    <>
        <Head title='Login'/>
        <main className='container mx-auto'>
            <Contenedor>
                <h1 className='text-4xl font-bold'>Iniciar sesión</h1>
                <p>Porfavor, ingresa tus datos</p>
                <form action="" className='grid gap-4 text-left'>
                    <label className='mx-5' htmlFor="correo">Correo</label>
                    <input className='mx-5 mb-3 rounded-md text-black' type="text" placeholder='Ingresa tu correo' id='correo' name='correo' required/>

                    <label className='mx-5' htmlFor="password">Contraseña</label>
                    <input className='mx-5 mb-10 rounded-md text-black' type="password" placeholder='Ingresa tu contraseña' id='password' name='password' required/>

                    <Boton url='inicio' text='Iniciar sesion'/>
                </form>
                <p>¿No tienes una cuenta? <a href='registro' className='underline text-[#18ead8]'>Registrate aquí</a></p>
                <img className='mx-auto w-24 h-24' src="./img/BixerLogo2.png" alt="" />
            </Contenedor>
        </main>
    </>
  )
}

export default Login