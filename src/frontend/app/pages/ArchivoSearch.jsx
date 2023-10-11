import React from 'react';
import InputLabelPair from '../components/InputLabelPair';
import { Grid } from '@mui/material';

const ArchivoSearch = ({ columns, handleSearch }) => {
    const initialFormData = {};
    columns.forEach((column) => {
      initialFormData[column.id] = '';
    });
  
    const handleInputChange = (fieldName, fieldValue) => {
      handleSearch(fieldName, fieldValue);
    };
  
    return (
      <Grid container item xs={12} spacing={2}>
          {columns.map((column) => (
            <InputLabelPair
              key={column.id}
              label={column.name}
              name={column.id}
              onChange={handleInputChange}
            />
          ))}
      </Grid>
    );
  };
  
  export default ArchivoSearch;