import React, { useState } from 'react'
import { useForm, Link } from '@inertiajs/react'
import Dropdown from '@/Components/Dropdown'
import Boton from '../Boton';
import DatePicker from 'react-datepicker';
import InputError from '@/Components/InputError';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import es from 'date-fns/locale/es/index.js';


registerLocale('es', es);

function Paciente({ paciente, auth }) {
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

    /* UPDATE paciente */
    const [details, setDetails] = useState(false)
    const [editing, setEditing] = useState(false)

    const {data, setData, patch, processing, reset, errors} = useForm({
        id: paciente.id,
        name: paciente.name,
        lastname: paciente.lastname,
        lastname2: paciente.lastname2,
        CURP: paciente.CURP,
        weight: paciente.weight,
        height: paciente.height,
        date_birth: paciente.date_birth,
        userid: auth.user.id,
    })

    const handleUpdate = (e) => {
        e.preventDefault()
        patch(route('pacientes.update', paciente.id), {onSuccess: () => setEditing(false)})
    }

  return (
    <>
    {
    details ?
    <div className='p-5 flex space-x-2'>
        <div className='flex-1'>
            {
                editing ?
                <form onSubmit={handleUpdate} className='grid gap-4 text-left'>
                    <label className='mx-5' htmlFor="name">Nombre</label>
                    <input 
                        value={data.name}
                        onChange={e => setData('name', e.target.value)}
                        className='mx-5 mb-3 rounded-md text-black' 
                        type="text" 
                        placeholder='Nombre del paciente' 
                        id='name' 
                        name='name'/>
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
                                name='lastname'/>
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
                                name='lastname2'/>
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
                            name='CURP'/>
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
                                placeholder='Peso del paciente' 
                                id='weight' 
                                name='weight'/>
                            <InputError className='mb-2' message={errors.weight}/>
                        </div>

                        <div className='grid justify-items-stretch w-full'>
                            <label className='mx-5 mb-4' htmlFor="height">Altura</label>
                            <input 
                                value={data.height}
                                onChange={e => setData('height', e.target.value)}
                                className='mx-5 mb-3 rounded-md text-black' 
                                type="text" 
                                placeholder='Altura del paciente' 
                                id='height' 
                                name='height'/>
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
                            />
                            <input type="text" className='text-black hidden' name='date_birth' id='date_birth' onChange={e => setDateString(e.target.value)}  value={dateString}/>
                            <InputError className='mb-2' message={errors.date_birth}/>
                        </div>
                    </div>

                    <div className='lg:space-x-3 lg:flex lg:justify-center lg:items-center grid justify-items-stretch'>
                        <Boton text="Guardar" type='submit'/>
                        <Boton text='Cancelar' onClick={() => setEditing(false)}/>
                    </div>
                </form>


                :
                <div className='flex justify-between items-center'>
                    <div className='text-left'>
                        <h1 className='font-bold'>{paciente.lastname} {paciente.lastname2} {paciente.name}</h1>
                        <div className='grid space-y-1 pt-2'>
                            <span hidden>ID: {paciente.id}</span>
                            <span>CURP: {paciente.CURP}</span>
                            <span>Fecha de nacimiento: {paciente.date_birth}</span>
                            <span>Peso: {paciente.weight} kg</span>
                            <span>Altura : {paciente.height} cm</span>
                        </div>
                        <div className='lg:flex lg:space-x-5 grid mt-4'>
                            <Boton onClick={ () =>  setEditing(true) } text="editar"/>
                            <Boton>
                                <Link 
                                    as='button'
                                    href={route('graficador.index', { CURP: paciente.CURP })}>
                                CONSULTA
                                </Link>
                            </Boton>

                            <Boton>
                                <Link 
                                    as='button'
                                    href={route('pacientes.destroy', paciente.id)}
                                    method='delete'>
                                BORRAR
                                </Link>
                            </Boton>
                        </div>
                    </div>
                    <button onClick={ () => setDetails(false) }>
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#fff] h-7 w-7' viewBox="0 0 320 512">
                            <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"/>
                        </svg>
                    </button>
                </div>
            }
        </div>
    </div>
    :
    <div className='p-5 flex space-x-2'>
        <div className='flex-1'>
            <div className='flex justify-between items-center'>
                <div className='text-left'>
                    <h1 className='font-bold'>{paciente.lastname} {paciente.lastname2} {paciente.name}</h1>
                    
                </div>
                <button onClick={ () => setDetails(true) }>
                    <svg xmlns="http://www.w3.org/2000/svg" className='fill-[#fff] h-7 w-7' height="1em" viewBox="0 0 320 512">
                        <path d="M182.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-9.2-9.2-11.9-22.9-6.9-34.9s16.6-19.8 29.6-19.8H288c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-128 128z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
    }
    </>
  )
}

export default Paciente