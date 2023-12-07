import Boton from '@/Components/Bixer/Boton';
import Contenedor from '@/Components/Bixer/Contenedor';
import React, {useEffect, useRef, useState} from 'react'
import LinesChart from '@/Components/Bixer/LinesChart';
import PDFGenerator from '@/Components/Bixer/PDFGenerator';

function Pruebas() {
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

  /* -------------------------- CHART ------------------------- */
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

  return (
    <>
    <main className='flex justify-center items-center py-5'>
        <Head>
            <title>Software de goniometria: Pruebas</title>
            <meta name="description" content="Esta ventana es privada y de uso exclusivo a usuarios con rol developer." />
            <meta name="keywords" content="pruebas, prueba, desarrollo, goniometro, goniometría, goniometro digital, fisioterapia, fisioterapeuta, rehabilitacion, graficador" />
            <meta name="author" content="byLastLine_" />
        </Head>
        <Contenedor>
          
          <LinesChart ejex={ejex} ejey={ejey} onChartImageReady={handleChartImageReady}/>

          <Boton onClick={handleBluetoothBtn} text={bluetoothConnected ? 'desconectar' : 'conectar'}/>
          {
            bluetoothConnected && (
              <>
                <Boton onClick={toggleMuestreo} text={muestreoActivo ? 'pausar muestreo' : 'iniciar muestreo'}/>
                <Boton onClick={eliminarMuestreo} text='eliminar muestreo'/>
              </>
            )
          }

        </Contenedor>
    </main>
    </>
  )
}

export default Pruebas