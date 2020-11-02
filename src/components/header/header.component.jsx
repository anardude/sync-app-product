import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';
import CurrentUserContext from '../../contexts/current-user/current-user.context';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = () => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
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
