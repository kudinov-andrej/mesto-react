import Headerlogo  from '../image/logo.svg';

function Header () {
    return (
        <header class="header">
          <img class="header__logo" src={Headerlogo} alt="логотип"/>
        </header>
    );
  }
  
  export default Header;