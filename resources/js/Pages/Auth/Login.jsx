import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Contenedor from '@/Components/Bixer/Contenedor';
import Boton from '@/Components/Bixer/Boton';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <>
       <Head>
          <title>Software de goniometria: Login</title>
          <meta name="description" content="La aplicacion web de goniometría Bixer esta destinada a profesionistas y espcialistas con cedula profesional; con el objetivo de proporcionarles una herramienta para maximizar sus precisión al diagnosticar." />
          <meta name="keywords" content="menu, menu principa, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" />
          <meta name="author" content="byLastLine_" />
        </Head>
        <main className='flex items-center justify-center h-screen'>
            <Contenedor>
                <h1 className='text-4xl font-bold'>Iniciar sesión</h1>
                <p>Porfavor, ingresa tus datos</p>

                <form onSubmit={submit} className='grid gap-4 text-left'>
                    <div className='grid space-y-3'>
                        <label className='mx-5' htmlFor="correo">Correo</label>
                        <input 
                            className='mx-5 mb-3 rounded-md text-black'
                            id='email' 
                            type='email'
                            name='email'
                            value={data.email}
                            autoComplete='username'
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder='Ingresa tu correo' 
                            required/>
                        <InputError message={errors.email}/>
                    </div>

                    <div className='grid space-y-3'>
                        <label className='mx-5' htmlFor="password">Contraseña</label>
                        <input 
                            className='mx-5 mb-10 rounded-md text-black' 
                            id='password'
                            type='password'
                            name='password'
                            value={data.password}
                            autoComplete='current-password'
                            onChange={(e) => setData('password', e.target.value)}
                            placeholder='Ingresa tu contraseña'
                            required/>
                        <InputError message={errors.password}/>
                    </div>

                    <label className='flex items-center mx-5'>
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            />
                        <span className='mx-1'>Recordarme</span>
                    </label>

                    <Boton type='submit' text='Iniciar sesion'/>
                </form>
                <div className='flex items-center justify-center'>
                    <div className='grid space-y-3'>
                        <p>¿No tienes una cuenta? <a href={route('register')}><p className='underline text-[#18ead8]'>Registrate aquí</p></a></p>
                        <a href={route('bienvenida')}><img className='mx-auto w-24 h-24' src="./img/BixerLogo2.png" alt="" /></a>
                    </div>
                </div>
            </Contenedor>
        </main>
        </>
    );
}
