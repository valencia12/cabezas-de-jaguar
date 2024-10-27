import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Fab } from 'react-tiny-fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EmailIcon from '@mui/icons-material/Email';

import Footer from '../components/Footer';
import HeaderSection from '../components/HeaderSection';
import { fetchRedFile } from '../api/request';
import BackButton from '../components/BackButton';
import EmailModal from '../components/EmailModal';

import { Grid, Typography, InputLabel, Container, Button } from '@mui/material';
import { styles, top, redFileLabels } from './config/ArchivoRojoConstants';
import './ArchivoRojo.css';

export default function ArchivoRojoDetail() {
  const { referenceCode } = useParams();
  const [data, setData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const initialFormData = {
    fullName: '',
    email: '',
    date: null,
    description: '',
    code: referenceCode
  };

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    fetchRedFile(referenceCode)
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error('Error al obtener datos de la API:', error);
      });
  }, [referenceCode]);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Fab mainButtonStyles={styles.mainButtonStyle} icon={<KeyboardArrowUpIcon />} onClick={top} />
      <HeaderSection />
      <section>
        <Container maxWidth="lg">
          <Grid container spacing={2} className="grid-container">
            <Grid item xs={12} className="grid-item">
              <BackButton link={'/archivo'} />
            </Grid>
            {data !== null && (
              <>
                <Grid item xs={12} className="grid-item">
                  <div className="large-title-container">
                    <Typography
                      variant="h4"
                      component="h2"
                      className="title text-center"
                      style={{
                        color: 'white',
                        background: 'var(--primary-color)',
                        padding: '16px',
                        fontSize: '1.8em'
                      }}
                    >
                      Detalles del Documento - {referenceCode}
                    </Typography>
                  </div>
                </Grid>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <InputLabel>{redFileLabels.title}:</InputLabel>
                    <Typography variant="body1">{data.title}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <InputLabel>{redFileLabels.countryCode}:</InputLabel>
                    <Typography variant="body1">{data.country_code}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <InputLabel>{redFileLabels.referenceCode}:</InputLabel>
                    <Typography variant="body1">{data.reference_code}</Typography>
                  </Grid>
                  {/* Continúa agregando el resto de los campos de datos */}
                  <Grid item xs={12} className="grid-item">
                    <InputLabel>{redFileLabels.content}:</InputLabel>
                    <Typography variant="body1" className="content-row">
                      {data.content}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} className="grid-item" style={{ textAlign: 'center', marginTop: '16px' }}>
                  <Button variant="contained" color="primary" onClick={handleOpenModal} startIcon={<EmailIcon />}>
                    Reservar
                  </Button>
                  <EmailModal open={modalOpen} handleClose={handleCloseModal} formData={initialFormData} />
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </section>
      <Footer />
    </div>
  );
}
