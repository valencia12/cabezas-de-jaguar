import React, { useEffect, useState } from 'react';
import { Fab } from 'react-tiny-fab';
import Aos from 'aos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DataTable from 'react-data-table-component';
import { fetchDataFromApi } from '../api/request';
import Footer from '../components/Footer';
import logo from '../assets/images/ascj.png';
import Header from '../components/Header';

export default function ArchivoRojo() {
    const [redFiles, setRedFiles] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchData = () => {
            const searchParams = { ...searchQuery };
            fetchDataFromApi(searchParams)
              .then(apiData => {
                  setRedFiles(apiData);
              })
              .catch(error => {
                  console.error('Error al obtener datos de la API:', error);
              });
        };
        // Debounce fetchData by 500 milliseconds
        const debounceTimer = setTimeout(fetchData, 500);
        return () => {
            clearTimeout(debounceTimer);
        };
    }, [searchQuery]);

    const columns = [
        {
            id: 'reference_code',
            name: 'Codigo de referencia',
            selector: (row) => row.reference_code,
            sortable: true
        },
        {
            id: 'country_code',
            name: 'Codigo de pais',
            selector: (row) => row.country_code,
            sortable: true
        },
        {
            id: 'institution',
            name: 'Institucion',
            selector: (row) => row.institution,
            sortable: true
        },
        {
            id: 'dependency',
            name: 'Dependencia',
            selector: (row) => row.dependency,
            sortable: true
        },
        {
            id: 'document_type',
            name: 'Tipo de documento',
            selector: (row) => row.document_type,
            sortable: true
        },
        {
            id: 'title',
            name: 'Titulo',
            selector: (row) => row.title,
            sortable: true
        },
        {
            id: 'place_and_date',
            name: 'Lugar y fecha',
            selector: (row) => row.place_and_date,
            sortable: true
        },
        {
            id: 'content',
            name: 'Contenido',
            selector: (row) => row.content,
            sortable: true
        },
        {
            id: 'precedence',
            name: 'Precedente',
            selector: (row) => row.precedence,
            sortable: true
        },
        {
            id: 'language',
            name: 'language',
            selector: (row) => row.language,
            sortable: true
        },
        {
            id: 'physical_characteristics',
            name: 'Caracteristicas fisicas',
            selector: (row) => row.physical_characteristics,
            sortable: true
        },
        {
            id: 'volume',
            name: 'Volumen',
            selector: (row) => row.volume,
            sortable: true
        },
        {
            id: 'notes',
            name: 'Notas',
            selector: (row) => row.notes,
            sortable: true
        },
        {
            id: 'year',
            name: 'Año',
            selector: (row) => row.year,
            sortable: true
        }
    ];

    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // for smoothly scrolling
        });
    };
    const styles = {
        backgroundColor: '#485922',
        marginLeft: '75%'
    };

    return (
        <div style={{ overflowX: 'hidden' }}>
            <Fab
                mainButtonStyles={styles}
                icon={<KeyboardArrowUpIcon />}
                onClick={top}
            />
            <section className="banner-header" alt="Bg-goventuresbuilds">
                <div className="blue-layer" />
                <nav>
                    <img
                        className="brand md:hidden"
                        alt="Logo-goventurespositive"
                        src={logo}
                    />
                    <Header/>
                </nav>
                <div className="header-container">
                    <div className="md:flex md:justify-center">

                        <div
                            className="large-title-container"
                            style={{
                                zIndex: '300',
                                borderRadius: '3px',
                                opacity: '0.9'
                            }}
                        >
                            <h3
                                className="title text-right md:text-lg md:text-center"
                                style={{
                                    fontSize: '1.8em',
                                    justifyContent: 'center',
                                    color: 'white'
                                }}
                            >
                                Archivo Rojo <br />
                            </h3>
                            <br />
                            <div
                                style={{
                                    display: 'flex',
                                    border: '3px solid white',
                                    borderRadius: '5px',
                                    fontSize: '1em'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <DataTable fixedHeader={true}
                           columns={columns}
                           data={redFiles ? redFiles.data : []} />
            </section>
            <Footer/>
        </div>
    );
}
