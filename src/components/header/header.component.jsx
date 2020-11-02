import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import CurrentUserContext from '../../contexts/current-user/current-user.context';

import logo from '../../assets/logo.png';

import './header.styles.scss';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <img className='logo' src={logo} alt='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/import'>
          IMPORT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            CONNEXION
          </div>
        ) : (
          <Link className='option' to='/signin'>
            DECONNEXION
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
