import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';

const BackButton = ({ link }) => (
  <Link to={link}>
    <button>
      <ArrowBackIcon /> Regresar
    </button>
  </Link>
);

export default BackButton;
