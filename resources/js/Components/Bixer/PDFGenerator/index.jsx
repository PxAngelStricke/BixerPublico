import React from 'react';
import Boton from '../Boton';
import pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { format } from 'date-fns';
// Configura pdfMake con las fuentes
pdfMake.vfs = pdfFonts && pdfFonts.pdfMake ? pdfFonts.pdfMake.vfs : globalThis.pdfMake.vfs;
class PDFGenerator extends React.Component {
  generatePDF = () => {
    const { doctorName, 
            doctorLastName,
            doctorProfessional_id,  
            doctorSpecialty, 
            doctorPhone, 
            pacienteName, 
            pacienteLastName, 
            pacienteLastName2, 
            pacienteBirth, 
            pacienteWeigth, 
            pacienteHeigth,
            observations,
            suffering,
            chartImage,
            status
        } = this.props;

    if(status === "paciente") {
        const documentDefinition = {
            header: function(currentPage, pageCount, pageSize) {
                return [
                    {
                        text: 'Morelia, Michoacan',
                        fontSize: 14,
                        bold: true,
                        alignment: 'right',
                        margin: [0, 5, 20, 0]
                    },
                    {
                        text: format(new Date(), 'dd/MM/yyyy HH:mm'),
                        fontSize: 12,
                        alignment: 'right',
                        margin: [0, 0, 20, 5]
                    }
                ]
            },
    
            content: [
                //Titulo
                {
                    text: 'CONSULTA MEDICA',
                    fontSize: 18,
                    bold: true,
                    italics: 'center',
                    margin: [0, 0, 0, 10]
                },
                //Subtitulo especialista
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Especialista',
                        italics: true,
                        bold: true,
                        width: '*',
                        fontSize: 14,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Lic. ' + doctorLastName + ' ' + doctorName,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                {
                    columns: [{
                        text: 'Cedula profesional: ' + doctorProfessional_id,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    },
                    {
                        text: 'Especialidad: ' + doctorSpecialty,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    },
                    {
                        text: 'Telefono: ' + doctorPhone,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                //Subtitulo paciente
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Paciente',
                        italics: true,
                        bold: true,
                        width: '*',
                        fontSize: 14,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Nombre(s): ' + pacienteName,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    },
                    {
                        text: 'Apellido P.: ' + pacienteLastName,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    },
                    {
                        text: 'Apellido M.: ' + pacienteLastName2,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                {
                    columns: [{
                        text: 'Nacimiento: ' + pacienteBirth,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    },
                    {
                        text: 'Peso: ' + pacienteWeigth + ' kg',
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    },
                    {
                        text: 'Altura: ' + pacienteHeigth + ' cm',
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                //Subtitulo observaciones y padecimiento
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Observaciones',
                        italics: true,
                        bold: true,
                        width: '*',
                        fontSize: 14,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Padecimiento: ' + suffering,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                {
                    columns: [{
                        text: 'Observaciones: ' + observations,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                /* GRAFICA - Aun por implementar */
                /*
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Grafica',
                        italics: true,
                        bold: true,
                        width: '*',
                        fontSize: 14,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Grafica',
                        image: chartImage, 
                        width: 500,
                    }],
                    margin: [0, 0, 0, 10]
                },*/
            ],
            footer: function(currentPage, pageCount) {
                return [{
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    text: 'Pagina ' + currentPage.toString() + ' de ' + pageCount,
                    alignment: 'center',
                    fontSize: 10, 
                    margin: [0, 10]
                }]
            }
        };
        var pdfDoc = pdfMake.createPdf(documentDefinition)
        var nombreDoc = format(new Date(), 'dd/MM/yyyy HH:mm').toString() + '_Bixer'
        pdfDoc.open();

    } else if (status === "graficador") {
        const documentDefinition = {
            header: function(currentPage, pageCount, pageSize) {
                return [
                    {
                        text: 'Morelia, Michoacan',
                        fontSize: 14,
                        bold: true,
                        alignment: 'right',
                        margin: [0, 5, 20, 0]
                    },
                    {
                        text: format(new Date(), 'dd/MM/yyyy HH:mm'),
                        fontSize: 12,
                        alignment: 'right',
                        margin: [0, 0, 20, 5]
                    }
                ]
            },
    
            content: [
                //Titulo
                {
                    text: 'CONSULTA MEDICA',
                    fontSize: 18,
                    bold: true,
                    italics: 'center',
                    margin: [0, 0, 0, 10]
                },
                //Subtitulo especialista
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Especialista',
                        italics: true,
                        bold: true,
                        width: '*',
                        fontSize: 14,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Lic. ' + doctorLastName + ' ' + doctorName,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                {
                    columns: [{
                        text: 'Cedula profesional: ' + doctorProfessional_id,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    },
                    {
                        text: 'Especialidad: ' + doctorSpecialty,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    },
                    {
                        text: 'Telefono: ' + doctorPhone,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                //Subtitulo observaciones y padecimiento
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Observaciones',
                        italics: true,
                        bold: true,
                        width: '*',
                        fontSize: 14,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Padecimiento: ' + suffering,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                {
                    columns: [{
                        text: 'Observaciones: ' + observations,
                        width: '*',
                        fontSize: 12,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                /* GRAFICA - Aun por implementar */
                /*
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Grafica',
                        italics: true,
                        bold: true,
                        width: '*',
                        fontSize: 14,
                        alignment: 'center'
                    }],
                    margin: [0, 0, 0, 10]
                },
                {
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    columns: [{
                        text: 'Grafica',
                        image: chartImage, 
                        width: 500,
                    }],
                    margin: [0, 0, 0, 10]
                },*/
            ],
            footer: function(currentPage, pageCount) {
                return [{
                    canvas: [{
                        type: 'line',
                        x1: 0,
                        y1: 0,
                        x2: 515,
                        y2: 0,
                        lineWidth: .75,
                        lineColor: '#000000'
                    }],
                    margin: [0, 0, 0, 10],
                    alignment: 'center'
                },
                {
                    text: 'Pagina ' + currentPage.toString() + ' de ' + pageCount,
                    alignment: 'center',
                    fontSize: 10, 
                    margin: [0, 10]
                }]
            }
        };
        var pdfDoc = pdfMake.createPdf(documentDefinition)
        var nombreDoc = format(new Date(), 'dd/MM/yyyy HH:mm').toString() + '_Bixer'
        pdfDoc.open();
    }
  };

  render() {
    return (
      <>
        <Boton onClick={this.generatePDF} text="Generar PDF" />
      </>
    );
  }
}

export default PDFGenerator;
