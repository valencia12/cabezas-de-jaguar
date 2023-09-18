import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {goBack} from '../pages/config/ArchivoRojoConstants';

const BackButton = () =>  (
<button onClick={goBack}><ArrowBackIcon/> Regresar</button>
);

export default BackButton;