import { useEffect, useState } from 'react';

import MenuCategories from './MenuCategories';

import './styles.scss';
import NavBar from './NavBar';
import Logo from '../BasicComponents/Logo';
import Search from './Links/Search';
import Request from './Links/Request';
import ContactUs from './Links/ContactUs';

const Header = () => {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header className={`${scroll > 0 ? 'header-scroll ' : ''}header`}>
      <div className='container'>
        <div className='col-left'>
          <Logo />
          <MenuCategories />
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
        <div className='col-right'>
          <ContactUs />
          <div className='container-btn'>
            <Request />
            <Search />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;