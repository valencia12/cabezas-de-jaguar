import React, { useEffect, useState } from 'react';
import { Fab } from 'react-tiny-fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DataTable from 'react-data-table-component';
import { fetchDataFromApi } from '../api/request';
import Footer from '../components/Footer';
import logo from '../assets/images/ascj.png';
import Header from '../components/Header';
import ReactPaginate from 'react-paginate';
import columns from './ColumnFormat';
import './ArchivoRojo.css'; 

const TABLE_LIMIT = 20;

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
    }, [searchQuery, currentPage]);

    const handlePageChange = selectedPage => {
        setCurrentPage(selectedPage.selected);
    };

    

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
