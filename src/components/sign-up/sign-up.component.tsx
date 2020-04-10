import React, { Component, SyntheticEvent, FormEvent, ChangeEvent } from 'react'

import { FormInput } from '../form-input/form-input.component'
import { CustomButton } from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert(`passwords dont't match`);
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(user, { displayName });
      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })
    } catch (err) {
      console.error(err);
    }
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email an password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}></form>
        <FormInput
          type='displayName'
          name='displayName'
          value={displayName}
          handleChange={this.handleChange}
          label='Display Name'
          required
        ></FormInput>
        <FormInput
          type='email'
          name='email'
          value={email}
          handleChange={this.handleChange}
          label='Email'
          required
        ></FormInput>
        <FormInput
          type='password'
          name='password'
          value={password}
          handleChange={this.handleChange}
          label='Password'
          required
        ></FormInput>
        <FormInput
          type='confirmPassword'
          name='confirmPassword'
          value={confirmPassword}
          handleChange={this.handleChange}
          label='Confirm Password'
          required
        ></FormInput>
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </div>
    )
  }
}

export default SignUp;