import React from 'react';
import { Link } from 'react-router-dom';
import {styles} from './ArchivoRojoConstants';

const columns = [
    {
        id: 'country_code',
        name: 'Código de pais',
        selector: (row) => row.country_code,
        sortable: true,
        wrap: true
    },
    {
        id: 'reference_code',
        name: 'Código de referencia',
        selector: (row) => (
            <Link style={styles.hyperlinkStyle} 
            to={`/archivo/${row.reference_code}`}>
                {row.reference_code}
            </Link>
        ),
        sortable: true,
        wrap: true
    },
    {
        id: 'institution',
        name: 'Institución',
        selector: (row) => row.institution,
        sortable: true,
        wrap: true
    },
    {
        id: 'title',
        name: 'Titulo',
        selector: (row) => row.title,
        sortable: true,
        wrap: true
    },
    {
        id: 'place_and_date',
        name: 'Lugar y fecha',
        selector: (row) => row.place_and_date,
        sortable: true,
        wrap: true
    },
    {
        id: 'precedence',
        name: 'Precedente',
        selector: (row) => row.precedence,
        sortable: true,
        wrap: true
    },
    {
        id: 'volume',
        name: 'Volumen',
        selector: (row) => row.volume,
        sortable: true,
        wrap: true
    },
    {
        id: 'language',
        name: 'Lenguaje',
        selector: (row) => row.language,
        sortable: true,
        wrap: true
    },
    {
        id: 'content',
        name: 'Contenido',
        selector: (row) => row.content,
        sortable: true,
        wrap: true
    }
];

export default columns;