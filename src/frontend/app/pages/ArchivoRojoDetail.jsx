import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { Fab } from 'react-tiny-fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import EmailIcon from '@mui/icons-material/Email';

import Footer from '../components/Footer';
import HeaderSection from '../components/HeaderSection';
import { fetchRedFile } from '../api/request';
import BackButton from '../components/BackButton';
import EmailModal from '../components/EmailModal';

import { Grid, Typography, InputLabel, Container } from '@mui/material';
import { styles, top, redFileLabels } from './config/ArchivoRojoConstants';
import './ArchivoRojo.css';

// Rest of your component code...

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
        <Grid container spacing={2} className="grid-container">
          <Grid item xs={12} className="grid-item">
            <BackButton link={'/archivo'} />
          </Grid>
          {data !== null && ( // Conditional rendering
            <>
            
            <Container className="grid-container">
              <Grid item xs={12} className="grid-item">
                  <div className='large-title-cotainer'>
                      <h2  className="title text-right md:text-lg md:text-center"
                      style={{
                      fontSize: '1.8em',
                      justifyContent: 'center',
                      color: 'white',
                      background: 'var(--primary-color)',
                      padding: '16px'
                      }}>Detalles del Documento - {referenceCode}</h2>
                      <br></br>
                  </div>
              </Grid>
              <Grid container spacing={2}>

                  <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <InputLabel> {redFileLabels.title}:</InputLabel>
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
                  <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <InputLabel>{redFileLabels.institution}:</InputLabel>
                    <Typography variant="body1">{data.institution}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <InputLabel>{redFileLabels.dependency}:</InputLabel>
                    <Typography variant="body1">{data.dependency || 'Ninguna'}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <InputLabel>{redFileLabels.documentType}:</InputLabel>
                    <Typography variant="body1">{data.document_type}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <InputLabel>{redFileLabels.physicalCharacteristics}:</InputLabel>
                    <Typography variant="body1">{data.physical_characteristics}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <InputLabel>{redFileLabels.placeDate}:</InputLabel>
                    <Typography variant="body1">{data.place_and_date}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <InputLabel>{redFileLabels.precedence}:</InputLabel>
                    <Typography variant="body1">{data.precedence}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <InputLabel>{redFileLabels.language}:</InputLabel>
                    <Typography variant="body1">{data.language}</Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} className="grid-item">
                    <InputLabel>{redFileLabels.volume}:</InputLabel>
                    <Typography variant="body1">{data.volume}</Typography>
                  </Grid>
                  <Grid item xs={12} className="grid-item">
                    <InputLabel>{redFileLabels.content}:</InputLabel>
                    <Typography variant="body1" className="content-row">
                      {data.content}
                    </Typography>
                  </Grid>
                </Grid>
            </Container>
             <Grid item xs={12} className="grid-item">
             <button onClick={handleOpenModal}>
               Reservar <EmailIcon />
             </button>
             <EmailModal open={modalOpen} handleClose={handleCloseModal} formData={initialFormData}/>
           </Grid>
            </>
          )}
        </Grid>
      </section>
      <Footer />
    </div>
  );
}
