import './Header.scss';
import Hekto from './Hekto.svg';
import heart from './Heart.svg';
import korzina from './Korzina.svg';
import lupa from './lupa.svg';
import message from './Message.svg';
import phone from './bx_bx-phone-call.svg';
import user from './carbon_user.svg';
import vector from './Vector.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      <div className="header-and-nav">
        <div className="header-bar">
          <div className="little-header-bar">
            <div className="contacts">
              <div className="contact">
                <img className="message" src={message} alt="" />
                <p className="numphon">mhhasanul@gmail.com</p>
              </div>
              <div className="contact">
                <img className="phone" src={phone} alt="" />
                <p className="numphon">(12345)67890</p>
              </div>
            </div>
            <div className="user-char">
              <div className="user-act">
                <p className="numphon">USD</p>
                <img className="vector" src={vector} alt="" />
              </div>
              <div className="user-act">
                <p className="numphon">Login</p>
                <img className="user" src={user} alt="" />
              </div>
              <div className="user-act">
                <p className="numphon">Wishlist</p>
                <img className="heart" src={heart} alt="" />
              </div>
              <img className="korzina" src={korzina} alt="" />
            </div>
          </div>
        </div>
        <div className="big-navbar">
          <div className="navbar">
            <img className="hekto" src={Hekto} alt="" />
            <nav>
              <Link to='' className="navlink" >
                Home <img className="little-vector" src={vector} alt="" />
              </Link>
              <Link to="" className="nav-link">
                Pages
              </Link>
              <Link to="" className="nav-link">
                Product
              </Link>
              <Link to="./faq" className="nav-link">
                Faq
              </Link>
              <Link to="" className="nav-link">
                Shop
              </Link>
              <Link to="" className="nav-link">
                Contact
              </Link>
            </nav>
            <form className="search-button">
              <input className="search" type="text" name="search" />
              <button className="lupa-button" type="submit">
                <img className="lupa" src={lupa} alt="" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};
