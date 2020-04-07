import React, { Component, FormEvent, ChangeEvent } from 'react';

import './sign-in.styles.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils';

type SignInProps = {};
type SignInState = {
  email: string;
  password: string;
};

class SignIn extends Component<SignInProps, SignInState> {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    this.setState({ email: '', password: '' })
  }

  handleChange = <T extends keyof SignInState>(event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    const newState = { [name]: value };
    this.setState(newState as { [P in T]: SignInState[P] });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input name="email1" type="email" value={this.state.email} onChange={this.handleChange} required />
          <label>Email</label>
          <input name="password" type="password" value={this.state.password} onChange={this.handleChange} required />
          <label>Password</label>
          <input type="submit" value="Submit Form" />
        </form>
      </div>
    );
  }
}

export default SignIn;