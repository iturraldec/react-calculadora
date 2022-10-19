import '../hojas-de-estilo/Logo.css';
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';


function Logo() {
  return (
    <div className='freecodecamp-contenedor-logo'>
      <img
        className='freecodecamp-logo'
        src={freeCodeCampLogo}
        alt='Logo de freeCodeCamp' />
    </div>
  );
};

export default Logo;