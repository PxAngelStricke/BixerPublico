import React, { useEffect, useRef, useState } from 'react'
import { Head, useForm, Link } from '@inertiajs/react'
import Contenedor from '@/Components/Bixer/Contenedor'
import Boton from '@/Components/Bixer/Boton'
import InputError from '@/Components/InputError';
import PDFGenerator from '@/Components/Bixer/PDFGenerator';
import LinesChart from '@/Components/Bixer/LinesChart';



function Graficador({paciente, auth}) {
    /* --------------- OBTENCION DE DATOS ----------- */
    const {data, setData, post, processing, reset, errors} = useForm({
        suffering: '',
        observations: ''
    }) 

    /* --------------------------------- BLUETOOTH ----------------------------------- */
    const [bluetoothConnected, setBluetoothConnected] = useState(false) 
    const [device, setDevice] = useState(null)
    const [characteristicBLE, setCharacteristicBLE] = useState(null)

    const conectarBluetooth = async () => {
        try {
            const selectedDevice = await navigator.bluetooth.requestDevice({
            filters: [{ services: ["0000ffe0-0000-1000-8000-00805f9b34fb"] }]
        })

            const server = await selectedDevice.gatt.connect()
            const service = await server.getPrimaryService("0000ffe0-0000-1000-8000-00805f9b34fb")
            const characteristic = await service.getCharacteristic("0000ffe1-0000-1000-8000-00805f9b34fb")

            await characteristic.startNotifications()

            setCharacteristicBLE(characteristic)
            setDevice(selectedDevice)
            setBluetoothConnected(true)
            console.log("Goniometro conectado correctamente")
        } catch (error) {
            console.log("Error bluetooth: ", error)
        }
    }

    const desconectarBluetooth = async () => {
        if (device && device.gatt.connected) {
            await device.gatt.disconnect()
            setBluetoothConnected(false)
            console.log('Dispositivo Bluetooth desconectado');
        } else {
            console.log('El dispositivo ya está desconectado');
        }
    }

    const handleBluetoothBtn = () => {
        if (bluetoothConnected) {
            desconectarBluetooth();
        } else {
            conectarBluetooth();
        }
    }

    /* --------------------------------- CHART ----------------------------------- */
    const [ejex, setEjex] = useState([]);
    const [ejey, setEjey] = useState([]);
    const [muestreoActivo, setMuestreoActivo] = useState(false);
    const [chartImage, setChartImage] = useState(null);

    const handleChartImageReady = (image) => {
        setChartImage(image)
    }

    const toggleMuestreo = () => {
        setMuestreoActivo((prevMuestreoActivo) => !prevMuestreoActivo);
    }

    const eliminarMuestreo = () => {
        setEjex([]);
        setEjey([]);
        setMuestreoActivo(false);
    }

    useEffect(() => {
        let intervalId;

        const handleCharacteristicValueChanged = (e) => {
            const data = new TextDecoder().decode(e.target.value);
            const valores = data.split(', ');
            const numeros = valores.map(Number);

            if(numeros.length === 2 && numeros.every(Number.isFinite)) {
                setEjex((prevEjex) => [...prevEjex, numeros[0]]);
                setEjey((prevEjey) => [...prevEjey, numeros[1]]);
            }
        }

        if(muestreoActivo) {
            if(characteristicBLE !== null) {
                characteristicBLE.addEventListener('characteristicvaluechanged', handleCharacteristicValueChanged);
            } else {
                console.log("Error al conectar goniometro")
            }
        }  

        return () => {
            clearInterval(intervalId);
            if(characteristicBLE !== null) {
                characteristicBLE.removeEventListener('characteristicvaluechanged', handleCharacteristicValueChanged)
            }
        }
    }, [muestreoActivo, characteristicBLE]);

    let contenido;
    let status;

    if(paciente !== null){
        status = "paciente"
        contenido = <PDFGenerator
                        doctorName={auth.user.name} 
                        doctorLastName={auth.user.lastname}
                        doctorProfessional_id={auth.user.professional_id}
                        doctorSpecialty={auth.user.specialty}
                        doctorPhone={auth.user.phone}
                        pacienteName={paciente.name}
                        pacienteLastName={paciente.lastname}
                        pacienteLastName2={paciente.lastname2}
                        pacienteBirth={paciente.date_birth}
                        pacienteWeigth={paciente.weight}
                        pacienteHeigth={paciente.height}
                        observations={data.observations}
                        suffering={data.suffering}
                        chartImage={chartImage}
                        status={status}
                    />
    } else {
        status = "graficador"
        contenido = <PDFGenerator
                        doctorName={auth.user.name} 
                        doctorLastName={auth.user.lastname}
                        doctorProfessional_id={auth.user.professional_id}
                        doctorSpecialty={auth.user.specialty}
                        doctorPhone={auth.user.phone}
                        observations={data.observations}
                        suffering={data.suffering}
                        chartImage={chartImage}
                        status={status}
                    />
    }
                         
                    
  return (
    <>
    <Head>
        <title>Software de goniometria: Graficador</title>
        <meta name="description" content="El graficador de la aplicacion web de goniometría de Bixer grafica en tiempo real las medidas generadas y enviadas desde el goniómetro digital Bixer, facilitando asi la precisión del diagnóstico y seguimiento." />
        <meta name="keywords" content="goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" />
        <meta name="author" content="byLastLine_" />
    </Head>

    <main className='flex justify-center items-center py-5'>
        <Contenedor>
            <h1 className='text-4xl font-bold'>Graficador</h1>
            
            <LinesChart ejex={ejex} ejey={ejey} onChartImageReady={handleChartImageReady}/>

            <Boton onClick={handleBluetoothBtn} text={bluetoothConnected ? 'desconectar' : 'conectar'}/>

            {
                bluetoothConnected && (
                    <>
                        <Boton onClick={toggleMuestreo} text={muestreoActivo ? 'pausar muestreo' : 'iniciar muestreo'}/>
                        <Boton onClick={eliminarMuestreo} text='eliminar muestreo'/>

                        <form action="" className='grid gap-4 text-left mt-4'>
                            <div className='grid justify-items-stretch w-full'>
                                <label className='mx-5' htmlFor="suffering">Padecimiento</label>
                                <input
                                    value={data.suffering}
                                    onChange={e => setData('suffering', e.target.value)} 
                                    className='mx-5 mb-3 rounded-md text-black' 
                                    type="text" 
                                    placeholder='Padecimientos del paciente' 
                                    id='suffering' 
                                    name='suffering'/>
                                <InputError className='mb-2'/>
                            </div>

                            <div className='grid justify-items-stretch w-full'>
                                <label className='mx-5' htmlFor="observations">Observaciones</label>
                                <textarea
                                    value={data.observations}
                                    onChange={e => setData('observations', e.target.value)} 
                                    className='mx-5 mb-10 rounded-md text-black' 
                                    placeholder='Ingrese observaciones importantes del paciente' 
                                    name="observations" 
                                    id="observations" 
                                    rows="5"></textarea>
                                <InputError className='mb-2'/>
                            </div>
                        </form>
                    
                        { contenido }
                    </>
                )
            }
            <Boton url={route('inicio')} text='volver'/>
        </Contenedor>
    </main>
    </>
  )
}

export default Graficador