import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import { HomePage } from "./pages/homepage/homepage.component";
import { ShopPage } from './pages/shop/shop.component';
import { SignInAndSignUpPage } from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Header } from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

type AppProps = {}
type AppState = {
  currentUser: any
}

class App extends Component<AppProps, AppState> {
  state = {
    currentUser: null
  }

  unsubscribeFromAuth: firebase.Unsubscribe | null = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      if (user) {
        // User is signed in
        const userRef = await createUserProfileDocument(user);
        userRef?.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          })
        })
      } else {
        // User is signed out
        this.setState({ currentUser: user })
      }
    })
  }

  componentWillUnmount() {
    if (!this.unsubscribeFromAuth) {
      return;
    }
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
