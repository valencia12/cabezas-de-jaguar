import React, { useEffect, useState } from 'react';
import { Fab } from 'react-tiny-fab';
import Aos from 'aos';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DataTable from 'react-data-table-component';
import { fetchDataFromApi } from '../api/request';
import NavigationMobile from '../components/NavigationMobile';
import Footer from '../components/Footer';
import logo from '../assets/images/logopng.png';
import Header from '../components/Header';

export default function ArchivoRojo() {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiData = await fetchDataFromApi();
                setData(apiData);
            } catch (error) {
                console.error('Error al obtener datos de la API:', error);
            }
        };

        fetchData();
    }, []);

    const rows = {
        data: [
            
            {
                reference_code: 'C10.UD261',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: '',
                title:
                    'Organización de  equipo de las FPL para  la conducccion del Programa de Transferencia de Tierras',
                place_and_date: 'sin fecha',
                content:
                    'Recopilación de acciones y dificultades del programa de Transferencia de Tierras y otros programas dependientes según FPL',
                precedence: 'Fuerzas Populares de Liberación "Farabundo Martí" (FPL).',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '16 folios',
                notes: 'Oxidacion de papel. Oxidacion de metal. Perfotaciones. Sellado',
                year: 'Sin fecha',
            },
            {
                reference_code: 'C10.UD262',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Correspondencia',
                title: 'sin título',
                place_and_date: 'March 20, 1995',
                content:
                    'Memorandum dirigido a referentes zonales sobre la recolección de información para elaborar un balance del PTT al 30 de abril y fecha de proxima reunión en la comisión de tierras',
                precedence:
                    'Comisión de tierras, Fuerzas Populares de Liberación "Farabundo Martí" (FPL).',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '1 folio',
                notes: 'Perdida de tinta. Oxidación de metal',
                year: '1995',
            },
            {
                reference_code: 'C10.UD263',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title: 'Datos de becas 223',
                place_and_date: 'sin fecha',
                content: 'Listados de becados de becas 223',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Buen estado',
                volume: '9 folios',
                notes:
                    'Documento computarizado. Anotaciones manuscritas a lápiz al margen y fuera de margen',
                year: 'Sin fecha',
            },
            {
                reference_code: 'C10.UD264',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title:
                    'PRN- Programa de becas para desmovilizados del FMLN y de la FAES. Listados por partidos politicos incompletos es su documentación. Partido político: FPL (sic)',
                place_and_date: '3 de May de 1994',
                content:
                    'Lista de personas con  documentación incompleta y los sustitutos  para el programa de becas',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '2 folios',
                notes:
                    'oxidacion de papel, oxidacion por metal, anotaciones manuscritas',
                year: '1994',
            },
            {
                reference_code: 'C10.UD261',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: '',
                title:
                    'Organización de  equipo de las FPL para  la conducccion del Programa de Transferencia de Tierras',
                place_and_date: 'sin fecha',
                content:
                    'Recopilación de acciones y dificultades del programa de Transferencia de Tierras y otros programas dependientes según FPL',
                precedence: 'Fuerzas Populares de Liberación "Farabundo Martí" (FPL).',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '16 folios',
                notes: 'Oxidacion de papel. Oxidacion de metal. Perfotaciones. Sellado',
                year: 'Sin fecha',
            },
            {
                reference_code: 'C10.UD262',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Correspondencia',
                title: 'sin título',
                place_and_date: 'March 20, 1995',
                content:
                    'Memorandum dirigido a referentes zonales sobre la recolección de información para elaborar un balance del PTT al 30 de abril y fecha de proxima reunión en la comisión de tierras',
                precedence:
                    'Comisión de tierras, Fuerzas Populares de Liberación "Farabundo Martí" (FPL).',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '1 folio',
                notes: 'Perdida de tinta. Oxidación de metal',
                year: '1995',
            },
            {
                reference_code: 'C10.UD263',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title: 'Datos de becas 223',
                place_and_date: 'sin fecha',
                content: 'Listados de becados de becas 223',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Buen estado',
                volume: '9 folios',
                notes:
                    'Documento computarizado. Anotaciones manuscritas a lápiz al margen y fuera de margen',
                year: 'Sin fecha',
            },
            {
                reference_code: 'C10.UD264',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title:
                    'PRN- Programa de becas para desmovilizados del FMLN y de la FAES. Listados por partidos politicos incompletos es su documentación. Partido político: FPL (sic)',
                place_and_date: '3 de May de 1994',
                content:
                    'Lista de personas con  documentación incompleta y los sustitutos  para el programa de becas',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '2 folios',
                notes:
                    'oxidacion de papel, oxidacion por metal, anotaciones manuscritas',
                year: '1994',
            },
            {
                reference_code: 'C10.UD261',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: '',
                title:
                    'Organización de  equipo de las FPL para  la conducccion del Programa de Transferencia de Tierras',
                place_and_date: 'sin fecha',
                content:
                    'Recopilación de acciones y dificultades del programa de Transferencia de Tierras y otros programas dependientes según FPL',
                precedence: 'Fuerzas Populares de Liberación "Farabundo Martí" (FPL).',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '16 folios',
                notes: 'Oxidacion de papel. Oxidacion de metal. Perfotaciones. Sellado',
                year: 'Sin fecha',
            },
            {
                reference_code: 'C10.UD262',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Correspondencia',
                title: 'sin título',
                place_and_date: 'March 20, 1995',
                content:
                    'Memorandum dirigido a referentes zonales sobre la recolección de información para elaborar un balance del PTT al 30 de abril y fecha de proxima reunión en la comisión de tierras',
                precedence:
                    'Comisión de tierras, Fuerzas Populares de Liberación "Farabundo Martí" (FPL).',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '1 folio',
                notes: 'Perdida de tinta. Oxidación de metal',
                year: '1995',
            },
            {
                reference_code: 'C10.UD263',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title: 'Datos de becas 223',
                place_and_date: 'sin fecha',
                content: 'Listados de becados de becas 223',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Buen estado',
                volume: '9 folios',
                notes:
                    'Documento computarizado. Anotaciones manuscritas a lápiz al margen y fuera de margen',
                year: 'Sin fecha',
            },
            {
                reference_code: 'C10.UD264',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title:
                    'PRN- Programa de becas para desmovilizados del FMLN y de la FAES. Listados por partidos politicos incompletos es su documentación. Partido político: FPL (sic)',
                place_and_date: '3 de May de 1994',
                content:
                    'Lista de personas con  documentación incompleta y los sustitutos  para el programa de becas',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '2 folios',
                notes:
                    'oxidacion de papel, oxidacion por metal, anotaciones manuscritas',
                year: '1994',
            },
            {
                reference_code: 'C10.UD261',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: '',
                title:
                    'Organización de  equipo de las FPL para  la conducccion del Programa de Transferencia de Tierras',
                place_and_date: 'sin fecha',
                content:
                    'Recopilación de acciones y dificultades del programa de Transferencia de Tierras y otros programas dependientes según FPL',
                precedence: 'Fuerzas Populares de Liberación "Farabundo Martí" (FPL).',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '16 folios',
                notes: 'Oxidacion de papel. Oxidacion de metal. Perfotaciones. Sellado',
                year: 'Sin fecha',
            },
            {
                reference_code: 'C10.UD262',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Correspondencia',
                title: 'sin título',
                place_and_date: 'March 20, 1995',
                content:
                    'Memorandum dirigido a referentes zonales sobre la recolección de información para elaborar un balance del PTT al 30 de abril y fecha de proxima reunión en la comisión de tierras',
                precedence:
                    'Comisión de tierras, Fuerzas Populares de Liberación "Farabundo Martí" (FPL).',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '1 folio',
                notes: 'Perdida de tinta. Oxidación de metal',
                year: '1995',
            },
            {
                reference_code: 'C10.UD263',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title: 'Datos de becas 223',
                place_and_date: 'sin fecha',
                content: 'Listados de becados de becas 223',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Buen estado',
                volume: '9 folios',
                notes:
                    'Documento computarizado. Anotaciones manuscritas a lápiz al margen y fuera de margen',
                year: 'Sin fecha',
            },
            {
                reference_code: 'C10.UD264',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title:
                    'PRN- Programa de becas para desmovilizados del FMLN y de la FAES. Listados por partidos politicos incompletos es su documentación. Partido político: FPL (sic)',
                place_and_date: '3 de May de 1994',
                content:
                    'Lista de personas con  documentación incompleta y los sustitutos  para el programa de becas',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '2 folios',
                notes:
                    'oxidacion de papel, oxidacion por metal, anotaciones manuscritas',
                year: '1994',
            },
            ,
            {
                reference_code: 'C10.UD264',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title:
                    'PRN- Programa de becas para desmovilizados del FMLN y de la FAES. Listados por partidos politicos incompletos es su documentación. Partido político: FPL (sic)',
                place_and_date: '3 de May de 1994',
                content:
                    'Lista de personas con  documentación incompleta y los sustitutos  para el programa de becas',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '2 folios',
                notes:
                    'oxidacion de papel, oxidacion por metal, anotaciones manuscritas',
                year: '1994',
            },
            ,
            {
                reference_code: 'C10.UD264',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title:
                    'PRN- Programa de becas para desmovilizados del FMLN y de la FAES. Listados por partidos politicos incompletos es su documentación. Partido político: FPL (sic)',
                place_and_date: '3 de May de 1994',
                content:
                    'Lista de personas con  documentación incompleta y los sustitutos  para el programa de becas',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '2 folios',
                notes:
                    'oxidacion de papel, oxidacion por metal, anotaciones manuscritas',
                year: '1994',
            },
            ,
            {
                reference_code: 'C10.UD264',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title:
                    'PRN- Programa de becas para desmovilizados del FMLN y de la FAES. Listados por partidos politicos incompletos es su documentación. Partido político: FPL (sic)',
                place_and_date: '3 de May de 1994',
                content:
                    'Lista de personas con  documentación incompleta y los sustitutos  para el programa de becas',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '2 folios',
                notes:
                    'oxidacion de papel, oxidacion por metal, anotaciones manuscritas',
                year: '1994',
            },
            ,
            {
                reference_code: 'C10.UD264',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title:
                    'PRN- Programa de becas para desmovilizados del FMLN y de la FAES. Listados por partidos politicos incompletos es su documentación. Partido político: FPL (sic)',
                place_and_date: '3 de May de 1994',
                content:
                    'Lista de personas con  documentación incompleta y los sustitutos  para el programa de becas',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '2 folios',
                notes:
                    'oxidacion de papel, oxidacion por metal, anotaciones manuscritas',
                year: '1994',
            },
            ,
            {
                reference_code: 'C10.UD264',
                country_code: 'SV-ACCJ',
                institution: 'FMLN',
                dependency: 'FPL',
                document_type: 'Informes',
                title:
                    'PRN- Programa de becas para desmovilizados del FMLN y de la FAES. Listados por partidos politicos incompletos es su documentación. Partido político: FPL (sic)',
                place_and_date: '3 de May de 1994',
                content:
                    'Lista de personas con  documentación incompleta y los sustitutos  para el programa de becas',
                precedence: 'sin productor',
                language: 'Español',
                physical_characteristics: 'Estado regular',
                volume: '2 folios',
                notes:
                    'oxidacion de papel, oxidacion por metal, anotaciones manuscritas',
                year: '1994',
            },
        ],
        page: '0',
        totalCount: 4,
        totalPages: 1,
    };
    const columns = [
        {
            name: 'Codigo de referencia',
            selector: (row) => row.reference_code,
        },
        {
            name: 'Codigo de pais',
            selector: (row) => row.country_code,
        },
        {
            name: 'Institucion',
            selector: (row) => row.institution,
        },
        {
            name: 'Dependencia',
            selector: (row) => row.dependency,
        },
        {
            name: 'Tipo de documento',
            selector: (row) => row.document_type,
        },
        {
            name: 'Titulo',
            selector: (row) => row.title,
        },
        {
            name: 'Lugar y fecha',
            selector: (row) => row.place_and_date,
        },
        ,
        {
            name: 'Contenido',
            selector: (row) => row.content,
        },
        ,
        {
            name: 'Precedente',
            selector: (row) => row.precedence,
        },
        ,
        {
            name: 'lenguage',
            selector: (row) => row.lenguage,
        },
        ,
        {
            name: 'Caracteristicas fisicas',
            selector: (row) => row.physical_characteristics,
        },
        ,
        {
            name: 'Volumen',
            selector: (row) => row.volume,
        },
        ,
        {
            name: 'Notas',
            selector: (row) => row.notes,
        },
        {
            name: 'Año',
            selector: (row) => row.year,
        },
    ];

    console.log(rows);
    const top = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // for smoothly scrolling
        });
    };
    const styles = {
        backgroundColor: '#485922',
        marginLeft: '75%',
    };

    useEffect(() => { }, []);
    useEffect(() => {
        Aos.init({ duration: 1200 });
    }, []);
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
                    <Header />
                </nav>
                <div className="header-container">
                    <div className="md:flex md:justify-center">
                        <div className="md:hidden">
                            <NavigationMobile />
                        </div>
                        <div
                            className="large-title-container"
                            style={{
                                zIndex: '300',
                                borderRadius: '3px',
                                opacity: '0.9',
                            }}
                        >
                            <h3
                                className="title text-right md:text-lg md:text-center"
                                style={{
                                    fontSize: '1.8em',
                                    justifyContent: 'center',
                                    color: 'white',
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
                                    fontSize: '1em',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <DataTable columns={columns} data={rows.data} fixedHeader />
                {/* <img className='circle-fill-primary' src={circleFillPrimary} /> */}
            </section>
            <Footer/>
        </div>
    );
}
