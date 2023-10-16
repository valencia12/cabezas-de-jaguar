const mainButtonStyle = {
  backgroundColor: '#485922',
  marginLeft: '75%'
};
const hyperlinkStyle = {
  color: 'blue',
  textDecoration: 'underline',
  cursor: 'pointer'
};
const buttonStyle = {
  display: 'inline-block',
  padding: '10px 20px',
  backgroundColor: '#485922',
  color: 'white',
  cursor: 'pointer'
};


const redFileLabels = {
  countryCode : 'Código de país',
  referenceCode : 'Código de referencia',
  institution : 'Subfondo',
  dependency: 'Serie',
  documentType: 'Subserie',
  title : 'Título',
  placeDate : 'Lugar y Fecha',
  precedence : 'Productor/ Procedencia',
  volume : 'Volumen',
  language : 'Lengua',
  content : 'Alcance y contenido', 
  physicalCharacteristics : 'Características Físicas'
};


const styles = {
  mainButtonStyle,
  hyperlinkStyle,
  buttonStyle
};

const TABLE_LIMIT = 10;

const top = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smoothly scrolling
  });
};
const goBack = () => {
  window.history.back();
};

export { styles, TABLE_LIMIT, top, goBack, redFileLabels };
