import React, { useEffect, useState } from 'react';
import { Fab } from 'react-tiny-fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DataTable from 'react-data-table-component';
import { fetchAllRedFiles } from '../api/request';
import Footer from '../components/Footer';
import HeaderSection from '../components/HeaderSection';
import ReactPaginate from 'react-paginate';
import columns from './config/ArchivoRojoColumnFormat';
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
        <div style={{ overflowX: 'hidden' }}>
            <Fab
                mainButtonStyles={styles.mainButtonStyle}
                icon={<KeyboardArrowUpIcon />}
                onClick={top}
            />
            <HeaderSection/>
            <section>
                <DataTable fixedHeader={true}
                           columns={columns}
                           data={redFiles ? redFiles.data : []} />
            </section>
            <div className="pagination-container">
                {redFiles && redFiles.totalPages > 1 && (
                    <ReactPaginate
                        pageCount={redFiles.totalPages}
                        pageRangeDisplayed={TABLE_LIMIT}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageChange}
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                )}
            </div>
            <Footer/>
        </div>
    );
}
