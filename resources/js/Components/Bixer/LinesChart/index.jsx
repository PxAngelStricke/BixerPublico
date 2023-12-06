import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS,
         CategoryScale,
         LinearScale,
         PointElement,
         LineElement,
         Title,
         Tooltip,
         Legend,
         Filler
} from 'chart.js'
import { format } from 'date-fns'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
)

function LinesChart({ ejex, ejey, onChartImageReady }) {
    const horaActual = () => format(new Date(), 'HH:mm:ss')

    const midata = {
        labels: ejex.map((_, index) => horaActual()),
        datasets: [
            {
                label: 'Eje X',
                data: ejex,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255, 99, 132)',
                pointBackgroundColor: 'rgba(255, 99, 132)'
            },
            {
                label: 'Eje Y',
                data: ejey,
                tension: 0.5,
                fill: true,
                borderColor: 'rgb(54, 162, 235)',
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(54, 162, 235)',
                pointBackgroundColor: 'rgba(54, 162, 235)'
            },
        ],
    };

    const mioptions = {
        scales: {
          x: {
            title: {
                display: true,
                text: 'Tiempo'
            }
          },
          y: {
            title: {
                display: true,
                text: 'Muestreos'
            },
            // Configuración del eje Y para incluir valores negativos
            beginAtZero: false
          }
        }
      };

    useEffect(() => {
      const canvas = document.createElement('canvas')
      const context = canvas.getContext('2d');

      new ChartJS(context, {
        type: 'line',
        data: midata,
        options: mioptions,
      })

      const chartImage = canvas.toDataURL('image/png')
      onChartImageReady(chartImage)

      context.clearRect(0, 0, canvas.width, canvas.height)
    }, [ejex, ejey])

  return (
    <Line data={midata} options={mioptions}/>
  )
}

export default LinesChart