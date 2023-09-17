const styles = {
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
    textDecoration: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
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

export {styles, hyperlinkStyle, buttonStyle, TABLE_LIMIT, top, goBack};