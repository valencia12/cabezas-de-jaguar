import React from 'react';
import { TextField, Grid, InputLabel } from '@mui/material';

const InputLabelPair = ({ label, name, value, onChange }) => {
    const handleInputChange = (e) => {
        const newValue = e.target.value;
        onChange(name, newValue);
    };
    return (
      <Grid container item sm={2} xs={12} direction="column" spacing={0}>
        <Grid item>
          <InputLabel>{label}:</InputLabel>
        </Grid>
        <Grid item>
        <TextField
            variant="outlined"
            type="text"
            name={name}
            value={value}
            onChange={handleInputChange}
            fullWidth
            size="small"
            style={{ fontSize: '14px', padding: '8px' }} 
          />
        </Grid>
      </Grid>
    );
  };
  

export default InputLabelPair;