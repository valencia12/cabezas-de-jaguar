import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { Fab } from 'react-tiny-fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Footer from '../components/Footer';
import HeaderSection from '../components/HeaderSection';
import { fetchRedFile } from '../api/request';

import { Grid } from '@mui/material';
import {styles, top, goBack} from './config/ArchivoRojoConstants';
import './ArchivoRojo.css'; 


// Rest of your component code...

export default function ArchivoRojoDetail() {
    const { referenceCode } = useParams(); 
    const [data, setData] = useState(null);


    useEffect(() => {
        fetchRedFile(referenceCode)
        .then(data => {
            setData(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });
    }, [referenceCode]);

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Fab
                mainButtonStyles={styles.mainButtonStyle}
                icon={<KeyboardArrowUpIcon />}
                onClick={top}
            />
            <HeaderSection/>
            <section>
                <Grid container spacing={2} className='grid-container'>
                    <Grid item xs={6} className='grid-item'>
                        <button  onClick={goBack}>Regresar</button>
                    </Grid>
                </Grid>
                {data !== null && ( // Conditional rendering
                    <Grid container spacing={2} className='grid-container'>
                        <Grid item xs={6} className='grid-item'>
                            <p>Código de Referencia: {data.reference_code}</p>
                            <p>Código de País: {data.country_code}</p>
                            <p>Institución: {data.institution}</p>
                            <p>Dependencia: {data.dependency}</p>
                            <p>Tipo de Documento: {data.document_type}</p>
                            <p>Título: {data.title}</p>
                        </Grid>
                        <Grid item xs={6} className='grid-item'>
                            <p>Lugar y Fecha: {data.place_and_date}</p>
                            <p>Precedencia: {data.precedence}</p>
                            <p>Idioma: {data.language}</p>
                            <p>Características Físicas: {data.physical_characteristics}</p>
                            <p>Volumen: {data.volume}</p>
                            <p>Notas: {data.notes}</p>
                        </Grid>
                        <Grid item xs={6} className='grid-item'>
                            <p className='content-row'>
                                Contenido: {data.content}
                            </p>
                        </Grid>
                    </Grid>
                )}
            </section>
            <Footer/>
        </div>
    );
}