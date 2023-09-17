import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { Fab } from 'react-tiny-fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Footer from '../components/Footer';
import HeaderSection from '../components/HeaderSection';
import { fetchRedFile } from '../api/request';
import {styles, top, goBack, buttonStyle} from './config/ArchivoRojoConstants';
import './ArchivoRojo.css'; 
import { Button } from '@mui/material';

// Rest of your component code...

export default function ArchivoRojoDetail() {
    const { id } = useParams(); 
    const [data, setData] = useState(null);


    useEffect(() => {
        fetchRedFile(id)
        .then(data => {
            setData(data);
            console.log(data);
        })
        .catch(error => {
            console.error('Error al obtener datos de la API:', error);
        });
    }, [id]);

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Fab
                mainButtonStyles={styles}
                icon={<KeyboardArrowUpIcon />}
                onClick={top}
            />
            <HeaderSection/>
            <section>
                <Button style={buttonStyle} onClick={goBack}>Regresar</Button>
                {data !== null && ( // Conditional rendering
                    <div>
                        <p>Reference Code: {data.reference_code}</p>
                        <p>Country Code: {data.country_code}</p>
                        <p>Institution: {data.institution}</p>
                        <p>Dependency: {data.dependency}</p>
                        <p>Document Type: {data.document_type}</p>
                        <p>Title: {data.title}</p>
                        <p>Place and Date: {data.place_and_date}</p>
                        <p>Content: {data.content}</p>
                        <p>Precedence: {data.precedence}</p>
                        <p>Language: {data.language}</p>
                        <p>Physical Characteristics: {data.physical_characteristics}</p>
                        <p>Volume: {data.volume}</p>
                        <p>Notes: {data.notes}</p>
                    </div>
                )}
            </section>
            <Footer/>
        </div>
    );
}