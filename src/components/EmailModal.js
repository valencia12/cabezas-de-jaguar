import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { reserveRedFile } from '../api/request';


const EmailModal = ({ open, handleClose, formData }) => {
  const [fullName, setFullName] = useState(formData.fullName);
  const [email, setEmail] = useState(formData.email);
  const [date, setDate] = useState(formData.date);
  const [description, setDescription] = useState(formData.description);
  const [emailError, setEmailError] = useState('');
  const [fullNameError, setFullNameError] = useState('');
  const [dateError, setDateError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    let errors = false;

    // Not-empty (required) field validations
    if (!fullName) {
        setFullNameError('Campo requerido');
        errors = true;
    }
    if (!email) {
        setEmailError('Campo requerido');
        errors = true;
    }
    if (!validateEmail(email)) {
        setEmailError('Correo no válido');
        errors = true;
    }

    if (!date) {
        setDateError('Campo requerido');
        errors = true;
    }

    if (!description) {
        setDescriptionError('Campo requerido');
        errors = true;
    }

    if(errors) return;

    reserveRedFile({
        ...formData,
        fullName,
        email,
        date,
        description
    }).then((data) => {
        setFullName('');
        setEmail('');
        setDate('');
        setDescription('');
        handleClose();
      })
      .catch((error) => {
        console.error('Error al enviar solicitud:', error);
      });
  };

  const validateEmail = (email) => {
    // Simple email validation using regular expression
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <Modal open={open} >
    <Box
     sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%', // Set a default width for smaller screens (e.g., mobile)
        maxWidth: '600px', // Set a maximum width for larger screens (e.g., PC)
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4
      }}
    >
      <form onSubmit={handleSave}>
        <Grid container spacing={2} className="grid-container">
            <Grid item xs={11} className="grid-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" component="div">
                    Afiche de Reserva
                </Typography>
            </Grid>
          <Grid item xs={1} className="grid-item" style={{ textAlign: 'right' }}>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500]
                }}
                >
                <CloseIcon />
            </IconButton>
          </Grid>
          <Grid item xs={11} className="grid-item">
            <label>Debe ingresar los siguientes campos:</label>
          </Grid>
          <Grid item xs={12} className="grid-item">
            <TextField
              fullWidth
              label="Nombre completo"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
                setFullNameError('');
              }}
              error={!!fullNameError}
              helperText={fullNameError}
            />
          </Grid>
          <Grid item xs={12} className="grid-item">
            <TextField
              fullWidth
              type="email"
              label="Correo electronico"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError('');
              }}
              error={!!emailError}
              helperText={emailError}
            />
          </Grid>
          <Grid item xs={12} className="grid-item">
          
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                fullWidth
                label="Fecha de reserva"
                value={date}
                onChange={(newDate) => {
                  setDate(newDate);
                  setDateError('');
                }}
                renderInput={(params) => <TextField {...params} />}
                slotProps={{
                  textField: {
                      error: !!dateError,
                      helperText: dateError
                  }
                }}
                inputFormat="dd/MM/yyyy"
              />
            </LocalizationProvider>
            
          </Grid>
          <Grid item xs={11}>
            <label>Proporciona una breve explicación o razón para tu solicitud:</label>
          </Grid>
          <Grid item xs={12} className="grid-item">
            
            
            <TextField
                fullWidth
                label="Explicación a detalle"
                multiline
                rows={4}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                  setDescriptionError('');
                }}
                error={!!descriptionError}
                helperText={descriptionError}
              />
          </Grid>
          <Grid item xs={12} className="grid-item" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button style={{ width: '100%' }}>Enviar Solicitud <EmailIcon /></button>
          </Grid>
        </Grid>
      </form>
    </Box>
  </Modal>
  );
};

export default EmailModal;