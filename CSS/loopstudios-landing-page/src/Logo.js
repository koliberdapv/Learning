import logo from './images/logo.svg';

const Logo = () => {
  return (
    <picture className="logo">
      <img src={logo} alt="loopstudios" className="logo__image" />
    </picture>
  );
};
export default Logo;
