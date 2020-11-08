import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import ImportPage from './pages/import/import.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import ProviderPack from './providers/index.provider';
import CurrentUserContext from './contexts/current-user/current-user.context';

import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = { currentUser: null };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({
        currentUser: userAuth,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className='App'>
        <CurrentUserContext.Provider value={this.state.currentUser}>
          <div className='header-container'>
            <Header />
          </div>
        </CurrentUserContext.Provider>
        <div className='container'>
          <ProviderPack>
            <Switch>
              <Route exact path='/' component={HomePage} />
              <Route exact path='/import' component={ImportPage} />
              <Route
                exact
                path='/signin'
                render={() =>
                  this.state.currentUser ? (
                    <Redirect to='/' />
                  ) : (
                    <SignInAndSignUpPage />
                  )
                }
              />
            </Switch>
          </ProviderPack>
        </div>
      </div>
    );
  }
}

export default App;
