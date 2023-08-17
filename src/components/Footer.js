import { HashLink } from 'react-router-hash-link';
import Title from './Title';

const Footer = () => (
  <div className="footter pt-16 md:px-14">
    <div className="flex flex-col">
      <div className="flex justify-start">
        <Title
          title={
            <h3
              style={{
                color: '#FFF',
              }}
            >
              ASCJ
            </h3>
          }
        />
      </div>

      <div className="grid gap-2.5 grid-cols-3 mt-12 pl-8 pr-8 link-container">
        <HashLink smooth to="#what-we-do-section">
          <h3>Cabezas de Jaguar</h3>
        </HashLink>
        <HashLink smooth to="#partners">
          <h3>Archivo Rojo</h3>
        </HashLink>
        <HashLink smooth to="#contactUs">
          <h3>Centro Cultural</h3>
        </HashLink>
        <HashLink smooth to="#keyprojects">
          <h3>Quienes somos?</h3>
        </HashLink>
      </div>

      <div className="flex justify-end mt-16">
        <span className="cpy">Copyright ASCJ</span>
      </div>
    </div>
  </div>
);

export default Footer;
