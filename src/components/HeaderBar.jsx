import * as Header from '../styles/HeaderBar.styled';
import logo from '../assets/logo.png';

const HeaderBar = () => {
    return (
      <>
        <Header.LogoBox>
            <Header.Logo>
                <img src={logo} alt="Logo" />
            </Header.Logo>
            <Header.Logo></Header.Logo>
        </Header.LogoBox>
        <Header.IconBox></Header.IconBox>
      </>
    );
  }
  
  export default HeaderBar;