import React, { useEffect, useState } from 'react';
import { Fab } from 'react-tiny-fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DataTable from 'react-data-table-component';
import { fetchAllRedFiles } from '../api/request';
import Footer from '../components/Footer';
import HeaderSection from '../components/HeaderSection';
import columns from './config/ArchivoRojoColumnFormat';
import { Grid } from '@mui/material';
import BackButton from '../components/BackButton';
import Pagination from '../components/Pagination';

import {styles, top, TABLE_LIMIT} from './config/ArchivoRojoConstants';
import './ArchivoRojo.css'; 



export default function ArchivoRojo() {
    const [redFiles, setRedFiles] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const fetchData = () => {
            const searchParams = { ...searchQuery, 
                page: currentPage, 
                limit: TABLE_LIMIT 
            };
            fetchAllRedFiles(searchParams)
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
    }, [searchQuery, currentPage]);

    const handlePageChange = selectedPage => {
        setCurrentPage(selectedPage.selected);
    };

    return (
        <div >
            <Fab
                mainButtonStyles={styles.mainButtonStyle}
                icon={<KeyboardArrowUpIcon />}
                onClick={top}
            />
            <HeaderSection/>
            <section>
                <Grid container spacing={2} className='grid-container'>
                    <Grid item xs={12} className='grid-item'>
                        <BackButton/>
                        <Pagination 
                        data={redFiles} 
                        handlePageChange={handlePageChange}
                        tableLimit={TABLE_LIMIT}
                        />
                    </Grid>
                    <Grid item xs={12} className='grid-item'>
                        <DataTable fixedHeader={false}
                            columns={columns}
                            data={redFiles ? redFiles.data : []} />
                    </Grid>
                    <Grid item xs={12} className='grid-item'>
                        <Pagination 
                        data={redFiles} 
                        handlePageChange={handlePageChange}
                        tableLimit={TABLE_LIMIT}
                        />
                    </Grid>
                </Grid>    
            </section>
            <Footer/>
        </div>
    );
}
