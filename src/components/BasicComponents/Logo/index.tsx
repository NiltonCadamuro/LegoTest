import LogoImage from '../../../assets/logo.svg';

const Logo = () => {
  return (
    <a href="#1">
      <img src={LogoImage} alt="Logo Lego" className='logo' />
    </a>
  );
}

export default Logo;