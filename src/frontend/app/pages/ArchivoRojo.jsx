import React, { useEffect, useState } from 'react';
import { Fab } from 'react-tiny-fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DataTable from 'react-data-table-component';
import { fetchAllRedFiles, downloadPdf } from '../api/request';
import Footer from '../components/Footer';
import HeaderSection from '../components/HeaderSection';
import columns from './config/ArchivoRojoColumnFormat';
import { CircularProgress, Grid, Typography } from '@mui/material';
import BackButton from '../components/BackButton';
import Pagination from '../components/Pagination';
import { Download } from '@mui/icons-material';

import { styles, top, TABLE_LIMIT } from './config/ArchivoRojoConstants';
import './ArchivoRojo.css';
import ArchivoSearch from './ArchivoSearch';

export default function ArchivoRojo() {
  const [loading, setLoading] = useState(true);
  const [redFiles, setRedFiles] = useState(null);
  const [searchQuery, setSearchQuery] = useState({});
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchData = () => {
      const searchParams = { ...searchQuery, page: currentPage, limit: TABLE_LIMIT };
      fetchAllRedFiles(searchParams)
        .then((apiData) => {
          setRedFiles(apiData);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error al obtener datos de la API:', error);
          setLoading(false);
        });
    };

    // Debounce fetchData by 500 milliseconds
    const debounceTimer = setTimeout(fetchData, 500);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchQuery, currentPage]);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const handleSearch = (fieldName, fieldValue) => {
    setSearchQuery((prevQuery) => ({ ...prevQuery, [fieldName]: fieldValue }));
  };




  return (
    <div>
      <Fab mainButtonStyles={styles.mainButtonStyle} icon={<KeyboardArrowUpIcon />} onClick={top} />
      <HeaderSection />
      <section>
        <Grid container spacing={2} className="grid-container">
          <Grid item xs={12} className="grid-item">
            <BackButton link={'/'} />
          </Grid>
          <Grid item xs={12} className="grid-item">
            <ArchivoSearch columns={columns} handleSearch={handleSearch} />
          </Grid>

          <Grid item xs={12} className="grid-item">
            {loading ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <CircularProgress />
              </div>
            ) : !redFiles || !redFiles.data || redFiles.data.length === 0 ? (
              <Typography variant="body1" align="center" color="textSecondary" sx={{ padding: '40px 0' }}>
                No hay datos disponibles.
              </Typography>
            ) : (
              <DataTable
                noHeader={true}
                columns={columns}
                data={redFiles.data}
                customStyles={{
                  table: {
                    padding: '0'
                  },
                  tableWrapper: {
                    padding: '10px'
                  }
                }}
              />
            )}
          </Grid>

          <Grid item xs={12} className="grid-item">
            {!loading && redFiles && redFiles.data && redFiles.data.length > 0 && (
              <Pagination
                data={redFiles}
                handlePageChange={handlePageChange}
                tableLimit={TABLE_LIMIT}
                initialPage={currentPage}
              />
            )}
          </Grid>

          <Grid item xs={12} className="grid-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button onClick={downloadPdf}>
              <Download /> Descargar Cátalogo
            </button>
          </Grid>
        </Grid>
      </section>
      <Footer />
    </div>
  );
}