import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { Fab } from 'react-tiny-fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EmailIcon from '@mui/icons-material/Email';
import Footer from '../components/Footer';
import HeaderSection from '../components/HeaderSection';
import { fetchRedFile } from '../api/request';
import BackButton from '../components/BackButton';

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
                        <Grid item xs={12} className='grid-item'>
                            <BackButton link={'/archivo'}/>
                        </Grid>
                        {data !== null && ( // Conditional rendering
                        <>
                            <Grid item xs={12} className='grid-item'>
                                <p>Código de Referencia: {data.reference_code}</p>
                                <p>Título: {data.title}</p>
                            </Grid>

                            <Grid item xs={6} className='grid-item'>
                                <p>Código de País: {data.country_code}</p>
                                <p>Institución: {data.institution}</p>
                                <p>Dependencia: {data.dependency}</p>
                                <p>Tipo de Documento: {data.document_type}</p>
                                <p>Características Físicas: 
                                    {data.physical_characteristics}</p>
                            </Grid>
                            <Grid item xs={6} className='grid-item'>
                                <p>Lugar y Fecha: {data.place_and_date}</p>
                                <p>Precedencia: {data.precedence}</p>
                                <p>Idioma: {data.language}</p>
                                <p>Volumen: {data.volume}</p>
                                <p>Notas: {data.notes}</p>
                            </Grid>
                            <Grid item xs={12} className='grid-item'>
                                <p className='content-row'>
                                    Contenido: {data.content}
                                </p>
                            </Grid>
                            <Grid item xs={12} className='grid-item'>
                                <button>Reservar <EmailIcon/></button>
                            </Grid>
                        </>
                        )}
                    </Grid>
                

            </section>
            <Footer/>
        </div>
    );
}