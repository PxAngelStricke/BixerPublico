import React, { useState } from 'react'
import { Head, useForm } from '@inertiajs/react'
import Contenedor from '@/Components/Bixer/Contenedor'
import Boton from '@/Components/Bixer/Boton'
import DatePicker from 'react-datepicker';
import InputError from '@/Components/InputError';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es/index.js';
import Paciente from '@/Components/Bixer/Paciente';

registerLocale('es', es);

function Pacientes({ pacientes, auth }) {
    /* FECHA */
    const [selectedDate, setSelectedDate] = useState(null);
    const [dateString, setDateString] = useState('');

    const handleDateChange = date => {
        setSelectedDate(date);

        const formattedDate = date ? date.toLocaleDateString() : '';
        setDateString(formattedDate);
        setData('date_birth', formattedDate);
    };

    setDefaultLocale('es');

    /* SAVE Paciente */
    const [adding, setAdding] = useState(false);

    const {data, setData, post, processing, reset, errors} = useForm({
        name: '',
        lastname: '',
        lastname2: '',
        CURP: '',
        weight: '',
        height: '',
        date_birth: '',
        userid: auth.user.id,
    })

    const handleAdding = (e) => {
        e.preventDefault()
        post(route('pacientes.store'), {onSuccess: () => reset()})
        setAdding(false)
        setSelectedDate(null)
    }

    const closeAdding = (e) => {
        e.preventDefault()
        setAdding(false)
        setSelectedDate(null)
    }

  return (
    <>
        <Head>
        <title>Software de goniometria: Pacientes</title>
        <meta name="description" content="La aplicación web de goniometría de Bixer es posible gestionar pacientes; permitiendo registrar, editar y elimanr pacientes para facilitar el proceso de la consulta" />
        <meta name="keywords" content="pacientes, paciente, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" />
        <meta name="author" content="byLastLine_" />
    </Head>
        <main className='flex justify-center items-center py-5'>
            <Contenedor>
                <h1 className='text-4xl font-bold mb-5'>{adding ? "Agregar paciente" : "Pacientes"}</h1>
                {
                    adding === false &&
                    
                    <div className='lg:flex text-left grid gap-4'>
                        <div className='grid justify-items-strech w-full'>
                            <Boton text='Agregar paciente' onClick={ () => setAdding(true) }/>
                        </div>
                        <div className='grid justify-items-stretch w-full'>
                            <label className='mx-5 mb-2' htmlFor="name">Buscar:</label>
                            <input
                                className='mx-5 mb-3 rounded-md text-black' 
                                type="text" 
                                placeholder='Nombre del paciente' 
                                id='namePaciente' 
                                name='namePaciente'/>
                        </div>
                    </div>
                }
                

                {
                    adding ?
                    <form onSubmit={handleAdding} className='grid gap-4 text-left'>
                        <label className='mx-5' htmlFor="name">Nombre</label>
                        <input 
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className='mx-5 mb-3 rounded-md text-black' 
                            type="text" 
                            placeholder='Nombre del paciente' 
                            id='name' 
                            name='name'
                            pattern="{1,}"
                            title="El campo no puede estar vacio"
                            required
                            />
                        <InputError className='mb-2' message={errors.name}/>

                        <div className='lg:flex'>
                            <div className='grid justify-items-stretch w-full'>
                                <label className='mx-5 mb-4' htmlFor="lastname">Apellido Paterno</label>
                                <input 
                                    value={data.lastname}
                                    onChange={e => setData('lastname', e.target.value)}
                                    className='mx-5 mb-3 rounded-md text-black' 
                                    type="text" 
                                    placeholder='Apellido paterno' 
                                    id='lastname' 
                                    name='lastname'
                                    pattern="{1,}"
                                    title="El campo no puede estar vacio"
                                    required
                                    />
                                <InputError className='mb-2' message={errors.lastname}/>
                            </div>

                            <div className='grid justify-items-stretch w-full'>
                                <label className='mx-5 mb-4' htmlFor="lastname">Apellido Materno</label>
                                <input 
                                    value={data.lastname2}
                                    onChange={e => setData('lastname2', e.target.value)}
                                    className='mx-5 mb-3 rounded-md text-black' 
                                    type="text" 
                                    placeholder='Apellido materno' 
                                    id='lastname2' 
                                    name='lastname2'
                                    pattern="{1,}"
                                    title="El campo no puede estar vacio"
                                    required
                                    />
                                <InputError className='mb-2' message={errors.lastname2}/>
                            </div>
                        </div>

                        <div className='grid justify-items-stretch w-full'>
                            <label className='mx-5 mb-4' htmlFor="CURP">CURP</label>
                            <input 
                                value={data.CURP}
                                onChange={e => setData('CURP', e.target.value)}
                                className='mx-5 mb-3 rounded-md text-black' 
                                type="text" 
                                placeholder='CURP' 
                                id='CURP' 
                                name='CURP'
                                pattern="^[A-Z]{4}\d{6}[HM][A-Z]{5}[0-9A-Z]\d$"
                                title="Ingresa una CURP valida"
                                required
                                />
                            <InputError className='mb-2' message={errors.CURP}/>
                        </div>
                        
                        
                        <div className='lg:flex'>
                            <div className='grid justify-items-stretch w-full'>
                                <label className='mx-5 mb-4' htmlFor="weight">Peso</label>
                                <input 
                                    value={data.weight}
                                    onChange={e => setData('weight', e.target.value)}
                                    className='mx-5 mb-3 rounded-md text-black' 
                                    type="text" 
                                    placeholder='Peso del paciente (kg)' 
                                    id='weight' 
                                    name='weight'
                                    pattern="[0-9]{1,3}"
                                    title="El campo no puede estar vacio"
                                    required
                                    />
                                <InputError className='mb-2' message={errors.weight}/>
                            </div>

                            <div className='grid justify-items-stretch w-full'>
                                <label className='mx-5 mb-4' htmlFor="height">Altura</label>
                                <input 
                                    value={data.height}
                                    onChange={e => setData('height', e.target.value)}
                                    className='mx-5 mb-3 rounded-md text-black' 
                                    type="text" 
                                    placeholder='Altura del paciente (cm)' 
                                    id='height' 
                                    name='height'
                                    pattern="[0-9]{1,3}"
                                    title="El campo no puede estar vacio"
                                    required
                                    />
                                <InputError className='mb-2' message={errors.height}/>
                            </div>

                            <div className='grid justify-items-stretch w-full'>
                                <label className='mx-5 mb-4' htmlFor="">Fecha de nacimiento</label>
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={(date) => {
                                        handleDateChange(date);
                                    }}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="DD/MM/YYYY"
                                    showMonthDropdown
                                    showYearDropdown
                                    dropdownMode='select'
                                    className='mx-5 mb-3 rounded-md text-black lg:w-[85%] w-[88%]'
                                    title="Porfavor selecciona una fecha"
                                    required
                                />
                                <input type="text" className='text-black hidden' name='date_birth' id='date_birth' onChange={e => setDateString(e.target.value)}  value={dateString}/>
                                <InputError className='mb-2' message={errors.date_birth}/>
                            </div>
                        </div>

                        <div className='lg:space-x-3 lg:flex lg:justify-center lg:items-center grid justify-items-stretch'>
                            <Boton type='submit' text='Guardar'/>
                            <Boton text='Cancelar' onClick={ closeAdding }/>
                        </div>
                    </form>
                    : (
                        <>
                        </>
                    )
                }

                {
                    adding ?
                    <></>
                    :
                    <div className='mt-6 shadow-sm rounded-lg divide-y-4 border'>
                        {
                            pacientes.map(paciente =>
                                    <Paciente key={paciente.id} paciente={paciente} auth={auth}/>
                                )
                        }
                    </div>
                }
                

                <div className='mx-auto space-x-5 pt-5'>
                    <Boton url='inicio' text='regresar'/>
                </div>
            </Contenedor>
        </main>
    </>
  )
}

export default Pacientes