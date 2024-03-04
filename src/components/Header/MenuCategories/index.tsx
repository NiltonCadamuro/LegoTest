import Logo from '../../BasicComponents/Logo';
import './styles.scss';
import MenuClose from '../../../assets/menu-close.svg';
import NavBar from '../NavBar';
import { useState } from 'react';
import ContactUs from '../Links/ContactUs';
import Request from '../Links/Request';
import Home from '../Links/Home';
import Brands from './Brands';

const MenuCategories = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="menu-categories-btn" onClick={() => setVisible(true)}>
        <svg width="40" height="33" viewBox="0 0 40 33" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9999 32.9997C27.7728 32.9997 34.0739 30.4772 34.0739 27.3656C34.0739 27.3654 34.0739 27.3652 34.0739 27.365V22.5357H27.2506C25.133 22.0251 22.6521 21.7314 19.9999 21.7314C17.3476 21.7314 14.8667 22.0251 12.7491 22.5357H5.92578V27.365C5.92578 27.3652 5.92578 27.3654 5.92578 27.3656C5.92578 30.4772 12.227 32.9997 19.9999 32.9997Z" fill="#006CB7" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 28.9753C31.0457 28.9753 40 24.4348 40 18.8338C40 18.8338 40 18.8338 40 18.8338V10.1411H30.3071C27.2971 9.22142 23.7704 8.69238 20 8.69238C16.2296 8.69238 12.7029 9.22142 9.69288 10.1411H0V18.8338C0 18.8338 0 18.8338 0 18.8338C0 24.4348 8.9543 28.9753 20 28.9753Z" fill="#2CAFE5" />
            <ellipse cx="20" cy="10.1415" rx="20" ry="10.1415" fill="#BBDCF5" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.9998 16.7409C26.1363 16.7409 31.1109 14.2185 31.1109 11.1068C31.1109 11.1066 31.1109 11.1064 31.1109 11.1062V6.27692H25.7241C24.0522 5.76635 22.0937 5.47266 19.9998 5.47266C17.9059 5.47266 15.9473 5.76635 14.2755 6.27692H8.88867V11.1062C8.88867 11.1064 8.88867 11.1066 8.88867 11.1068C8.88867 14.2185 13.8633 16.7409 19.9998 16.7409Z" fill="#2CAFE5" />
            <ellipse cx="19.9998" cy="5.79512" rx="11.1111" ry="5.79512" fill="#BBDCF5" />
          </g>
          <line x1="15.5" y1="7.5" x2="24.5" y2="7.5" stroke="#006CB7" stroke-linecap="round" className='hover-black' />
          <path d="M16 5.5H24" stroke="#006CB7" stroke-linecap="round" className='hover-black' />
          <line x1="16.5" y1="3.5" x2="23.5" y2="3.5" stroke="#006CB7" stroke-linecap="round" className='hover-black' />
        </svg>
        <p>Categories</p>
      </div>
      <div className={`${visible ? "menu-container__active" : ""} menu-container`}>
        <div className="navigation">
          <div className="menu-header">
            <Logo />
            <div className="menu-close" onClick={() => setVisible(false)}>
              <img src={MenuClose} alt="Close Menu" />
            </div>
          </div>
          <div className='links'>
            <Home />
            <Request />
            <ContactUs />
          </div>
          <div className='themes'>
            <div className='title-theme'>
              <div className='line'></div>
              <h3>Themes</h3>
            </div>
            <NavBar items={[
              { id: 'Gifting', text: 'Gifting' },
              { id: 'Travel', text: 'Travel' },
              { id: 'AdultsWelcome', text: 'Adults Welcome' },
              { id: 'ArtHomeDecor', text: 'Art and Home Décor' },
              { id: 'Space', text: 'Space' },
              { id: 'PopCulture', text: 'Pop Culture' },
              { id: 'Toddlers', text: 'Toddlers' },
              { id: 'RealWorldRolePlaying', text: 'Real World Role Playing' },
            ]} />
          </div>
        </div>
        <Brands />
      </div>
    </>
  );
};

export default MenuCategories;