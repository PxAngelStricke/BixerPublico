import { useEffect, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Contenedor from '@/Components/Bixer/Contenedor';
import Boton from '@/Components/Bixer/Boton';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
        telefono: '',
        professional_id: '',
        specialty:'',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    const key = '6LceOiopAAAAAETuhhN3lD4OLDys4mgmplcNpL6D'

    const [capchatIsDone, setCaptchaDone] = useState(false)

    function onChange() {
        console.log('changed')
        setCaptchaDone(true)
    }

    return (
        <>
        <Head>
          <title>Software de goniometria: Registro</title>
          <meta name="description" content="La aplicacion web de goniometría Bixer esta destinada a profesionistas y espcialistas con cedula profesional; con el objetivo de proporcionarles una herramienta para maximizar sus precisión al diagnosticar." />
          <meta name="keywords" content="registro, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" />
          <meta name="author" content="byLastLine_" />
        </Head>
        <Head title='Registro'/>
        <main className='flex items-center justify-center py-5'>
            <Contenedor>
            <h1 className='text-4xl font-bold'>Registro</h1>
                <p>Porfavor, ingresa tus datos</p>
                <form onSubmit={submit} className='grid gap-4 text-left mt-3'>
                    <div className='grid space-y-3'>
                        <label className='mx-5' htmlFor="name">Nombre</label>
                        <input 
                            className='mx-5 mb-3 rounded-md text-black'
                            type='text' 
                            id='name'
                            name='name'
                            value={data.name}
                            autoComplete='name'
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder='Ingresa tu nombre'
                            required
                        />
                        <InputError message={errors.name} className='mt-2'/>
                    </div>

                    <div className='grid space-y-3'>
                        <label className='mx-5' htmlFor="lastname">Apellidos</label>
                        <input 
                            className='mx-5 mb-3 rounded-md text-black' 
                            type="text" 
                            placeholder='Ingresa tus apellidos' 
                            id='lastname' 
                            name='lastname'
                            value={data.lastname}
                            autoComplete='lastname'
                            isFocused={true}
                            onChange={(e) => setData('lastname', e.target.value)}
                            required
                        />
                        <InputError message={errors.lastname} className='mt-2'/>
                    </div>

                    <div className='grid space-y-3'>
                        <label className='mx-5' htmlFor="email">Correo electronico</label>
                        <input 
                            className='mx-5 mb-3 rounded-md text-black' 
                            type="email" 
                            placeholder='Ingresa tu correo electronico' 
                            id='email' 
                            name='email'
                            value={data.email}
                            autoComplete='username'
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className='mt-2'/>
                    </div>

                    <div className='grid space-y-3'>
                        <label className='mx-5' htmlFor="password">Contraseña</label>
                        <input 
                            className='mx-5 mb-3 rounded-md text-black' 
                            type="password" 
                            placeholder='Crea una contraseña' 
                            id='password' 
                            name='password'
                            value={data.password}
                            autoComplete='new-password'
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className='mt-2'/>
                    </div>

                    <div className="grid space-y-3">
                        <label className='mx-5' htmlFor="password_confirmation">Confirma tu contraseña</label>
                        <input 
                            className='mx-5 mb-3 rounded-md text-black' 
                            type="password" 
                            placeholder='Confirma tu contraseña' 
                            id='password_confirmation' 
                            name='password_confirmation'
                            value={data.password_confirmation}  
                            autoComplete='new-password'
                            onChange={(e) => setData('password_confirmation', e.target.value)}  
                        />
                        <InputError message={errors.password_confirmation} className='mt-2'/>
                    </div>
                
                    <div className="grid space-y-3">
                        <label className='mx-5' htmlFor="telefono">Ingresa tu telefono</label>
                        <input 
                            className='mx-5 mb-10 rounded-md text-black' 
                            type="text" 
                            placeholder='Numero de telefono' 
                            id='telefono' 
                            name='telefono'
                            value={data.tel}
                            onChange={(e) => setData('telefono', e.target.value)}
                        />
                        <InputError message={errors.telefono} className='mt-2'/>
                    </div>
                    <div className="grid space-y-3">
                        <label className='mx-5' htmlFor="professional_id">Ingresa tu cedula profesional</label>
                        <input 
                            className='mx-5 mb-10 rounded-md text-black' 
                            type="text" 
                            placeholder='Cedula Profesional' 
                            id='professional_id' 
                            name='professional_id'
                            value={data.professional_id}
                            onChange={(e) => setData('professional_id', e.target.value)}
                        />
                        <InputError message={errors.professional_id} className='mt-2'/>
                    </div>
                    <div className="grid space-y-3">
                        <label className='mx-5' htmlFor="specialty">Ingresa tu especialidad</label>
                        <input 
                            className='mx-5 mb-10 rounded-md text-black' 
                            type="text" 
                            placeholder='Especialidad' 
                            id='specialty' 
                            name='specialty'
                            value={data.specialty}
                            onChange={(e) => setData('specialty', e.target.value)}
                        />
                        <InputError message={errors.specialty} className='mt-2'/>
                    </div>

                    <div className='mt-3 flex items-center justify-center'>
                        <ReCAPTCHA
                            sitekey={key}
                            onChange={onChange}
                        />
                    </div>
                    { capchatIsDone && <Boton type='submit' text='Registrate'/>}
                    
                    </form>
                    <Boton url={route('login')} text='Regresar'/>
                <img className='mx-auto w-24 h-24' src="./img/BixerLogo2.png" alt="Logo Bixer" />
            </Contenedor>
        </main>
        </>
    );
}
